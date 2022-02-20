import React, { useState } from "react";
import { observer } from "mobx-react";
import { Button, Image, Text } from "react-native";
import { AspectRatio, Box, Center, Heading, HStack, Stack } from "native-base";
import NumericInput from "react-native-numeric-input";
import cartStore from "../stores/cartStore";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleAdd = (value) => {
    cartStore.addItemToCart(item.product, value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleDelete = (productId) => {
    cartStore.deleteItemFromCart(productId);
  };

  return (
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: item.product.image,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "primary.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="5"
          py="1.5"
        >
          <Text style={{ color: "white" }}>
            KWD {item.product.price} x {item.quantity} ={" "}
            {item.product.price * item.quantity} KWD
          </Text>
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {item.product.name}{" "}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            <NumericInput
              //   initValue={quantity} return number to 0 after adding
              value={quantity}
              onChange={(value) => handleAdd(value)}
              totalWidth={60}
              totalHeight={30}
              minValue={0}
            />
            <Button
              onPress={() => handleDelete(item.product._id)}
              title="Delete"
            />
          </Text>
        </Stack>

        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            ></Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default observer(CartItem);
