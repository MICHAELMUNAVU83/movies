import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href="/onboarding">
        <Text className="text-blue-500 mt-4">Go to Onboarding</Text>
      </Link>
      <Link href="/movie/avengers">
        <Text className="text-blue-500 mt-4">Avengers Movie</Text>
      </Link>
    </View>
  );
}
