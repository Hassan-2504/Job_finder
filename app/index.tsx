import { SafeAreaView, ScrollView, View } from "react-native";
import "../global.css"; // Ensure this file is set up correctly
import { COLORS, icons, images } from "../constants"; // Ensure you import what you need
import { Stack, useRouter } from "expo-router";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components/index";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
              handlePress={() => {}}
            />
          ),
        }}
      />
      <ScrollView style={{ padding: 16, flex: 1 }}>
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </SafeAreaView>
  );
}
