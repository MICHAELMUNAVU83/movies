import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-gray-100 flex justify-center items-center h-[100vh]">
      <Text className="text-4xl ">Incrimentor</Text>

      <TouchableOpacity className="bg-blue-500  p-3 rounded-md">
        <Text className="text-white">Increment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
