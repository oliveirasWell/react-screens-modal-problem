import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { useNavigation } from "@react-navigation/native";

const screenStyles = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

export const Home = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ ...screenStyles, backgroundColor: "crimson" }}>
      <Text>Home</Text>
      <Button title="Redirect to Modal" onPress={() => navigate("Modal")} />
      <Button title="Redirect to ModalStackScreen" onPress={() => navigate("ModalStackScreen")} />
    </View>
  );
};

export const Modal = () => {
  const { goBack, setOptions } = useNavigation();

  useEffect(() => {
    setOptions({
      title: "modal test",
      headerLeft: () => (
        <Button
          style={{ backgroundColor: "lightblue", padding: 8 }}
          title="Back"
          onPress={() => goBack()}
        />
      ),
    });
  }, []);

  return (
    <View style={{ ...screenStyles, backgroundColor: "cornflowerblue" }}>
      <Text>Modal</Text>
    </View>
  );
};

export const ModalWithScreen = () => {
  const { goBack, setOptions } = useNavigation();

  useEffect(() => {
    setOptions({
      title: "modal test with screen",
      headerLeft: () => (
        <Button
          style={{ backgroundColor: "lightblue", padding: 8 }}
          title="Back"
          onPress={() => goBack()}
        />
      ),
    });
  }, []);

  return (
    <View style={{ ...screenStyles, backgroundColor: "cornflowerblue" }}>
      <Text>Modal</Text>
    </View>
  );
};

export const ModalStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Modal" component={Modal} />
    </Stack.Navigator>
  );
};

export const ModalStackScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="ModalStackScreen" component={ModalWithScreen} />
    </Stack.Navigator>
  );
};

const Stack = createStackNavigator();

export const HomeStack = () =>
  (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Modal"
        component={ModalStack}
        options={{ headerShown: false, stackPresentation: "modal" }}
      />
      <Stack.Screen
        name="ModalStackScreen"
        component={ModalStackScreen}
        options={{ headerShown: false, stackPresentation: "modal" }}
      />
    </Stack.Navigator>
  );
