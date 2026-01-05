import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text } from "react-native";

const TabIcon = () => {
  return (
    <ImageBackground
      source={images.highlight}
      className="flex-row justify-center items-center rounded-full overflow-hidden px-4 py-2"
      style={{ minWidth: 100, height: 40 }}
      resizeMode="cover"
    >
      <Image source={icons.home} tintColor="#151313" className="w-5 h-5" />
      <Text className="text-black text-xs font-semibold ml-2">Home</Text>
    </ImageBackground>
  );
};

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false, // hide the default label
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabIcon />
            ) : (
              <Image source={icons.home} className="w-6 h-6" tintColor="#fff" />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabIcon />
            ) : (
              <Image source={icons.home} className="w-6 h-6" tintColor="#fff" />
            ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Saved",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabIcon />
            ) : (
              <Image source={icons.home} className="w-6 h-6" tintColor="#fff" />
            ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          title: "Search",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TabIcon />
            ) : (
              <Image source={icons.home} className="w-6 h-6" tintColor="#fff" />
            ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
