import Header from "components/Header";

import Loading from "components/Loading";
import Tab from "components/Tab";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "hooks/auth";
import { StyleSheet, Text, View } from "react-native";
import utilities from "styles/tailwind.json";
import { TailwindProvider } from "tailwind-rn";

export default function App() {
  return (
    <AuthProvider>
      <TailwindProvider utilities={utilities}>
        <Header />
        <Tab />
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
          <Loading />
        </View>
      </TailwindProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
