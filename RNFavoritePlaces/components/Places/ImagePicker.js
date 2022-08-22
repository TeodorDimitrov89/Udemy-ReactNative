import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = () => {
  const [pickedImage, setpickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    // Only for  IOS
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponce = await requestPermission();

      return permissionResponce.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission!",
        "You need to grant camera permission to use this app."
      );
      return false;
    }

    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setpickedImage(image.uri);
  };

  let imagePreview = (
    <Text style={styles.imageFallbackText}>No image taken yet.</Text>
  );
  if (pickedImage) {
    imagePreview = (
      <Image style={styles.imagePreview} source={{ uri: pickedImage }} />
    );
  }
  return (
    <View>
      <View style={styles.imagePreviewContainer}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;
const styles = StyleSheet.create({
  imageFallbackText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 14,
  },
  imagePreviewContainer: {
    marginVertical: 12,
    width: "100%",
    height: 200,
    backgroundColor: Colors.primary400,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    overflow: "hidden",
  },
  imagePreview: {
    width: "100%",
    height: "100%",
  },
});
