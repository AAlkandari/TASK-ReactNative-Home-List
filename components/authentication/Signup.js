import { Link } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import authStore from "../../stores/authStore";
import toast from "react-native-root-toast";
import { observer } from "mobx-react";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //   const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    await authStore.signUp(user);
    if (authStore.user) navigation.replace("Home");
  };
  //   const handleSubmit = () => {
  //     if (user.password === confirmPassword) authStore.signUp(user);
  //     navigation.goBack();
  //       toast.show({
  //         title: "Wrong Password",
  //         status: "danger",
  //       });

  //   };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>FirstName</FormControl.Label>
            <Input
              type="text"
              onChangeText={(firstName) => setUser({ ...user, firstName })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>LastName</FormControl.Label>
            <Input
              type="text"
              onChangeText={(lastName) => setUser({ ...user, lastName })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="email"
              onChangeText={(email) => setUser({ ...user, email })}
            />
          </FormControl>
          {/* <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl> */}
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default observer(Signup);
