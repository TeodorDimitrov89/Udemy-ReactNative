import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Button, Platform, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useEffect(() => {
    const configurePushNotifications = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;
      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Alert.alert(
          "Permission required",
          "Push notification need the appropriate permissions"
        );
        return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();

      if (Platform.OS === "android") {
        //Permission for android specific

        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    };

    configurePushNotifications();
  }, []);
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(JSON.stringify(notification), "Notification");
        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
    );

    const subscriptionResponce =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(JSON.stringify(response), "response");
      });

    return () => {
      subscription.remove();
      subscriptionResponce.remove();
    };
  }, []);
  const scheduleNotificationHandler = async () => {
    console.log("Notification");
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Annual technical inspection",
        body: "The annual technical review expires in August 2023",
        data: { userName: "Teo" },
      },
      trigger: { seconds: 5 },
    });
  };
  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
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
