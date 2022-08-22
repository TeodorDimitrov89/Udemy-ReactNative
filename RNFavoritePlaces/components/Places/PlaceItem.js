import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const PlaceItem = ({ place, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={place.imageUri} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
