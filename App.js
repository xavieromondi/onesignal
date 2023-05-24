import { useEffect } from "react";
import { OneSignal } from "react-native-onesignal";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  useEffect(() => {
    OneSignal.setAppId("da4dd434-58ea-4c6d-900f-1bf3cc0ae81f");
    OneSignal.setLogLevel(6, 0); // Set log level to enable debug logging

    OneSignal.setNotificationOpenedHandler((notification) => {
      console.log("Notification opened:", notification);
    });

    // Optional: Set other OneSignal event handlers
    // OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent) => {
    //   const notification = notificationReceivedEvent.getNotification();
    //   console.log("Notification will show:", notification);
    // });

    OneSignal.setExternalUserId("da4dd434-58ea-4c6d-900f-1bf3cc0ae81f"); // Set a unique user ID for the receiver app

    return () => {
      OneSignal.clearHandlers(); // Clear OneSignal event handlers when component unmounts
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
n;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
