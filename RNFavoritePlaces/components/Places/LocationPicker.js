import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

import { getMapPreview } from "../../util/location";
import { getPositionMapPreview } from "../../util/positionStack";

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const verifyPermissions = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponce = await requestPermission();

      return permissionResponce.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission!",
        "You need to grant location permission to use this app."
      );
      return false;
    }

    return true;
  };
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    let location = await getCurrentPositionAsync();

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

    const mapResponse = await getPositionMapPreview(
      location.coords.latitude,
      location.coords.longitude
    );
    console.log(mapResponse, "mapResponse");
  };

  const pickOnMapHandler = () => {};

  let locationPreview = <Text>No Location picked yet.</Text>;
  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }
  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    marginVertical: 12,
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary400,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
