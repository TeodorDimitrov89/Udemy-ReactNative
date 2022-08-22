import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  return (
    <View style={styles.form}>
      <ScrollView>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={changeTitleHandler}
            value={enteredTitle}
          ></TextInput>
        </View>
        <ImagePicker />
        <LocationPicker />
      </ScrollView>
    </View>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    color: Colors.primary500,
  },
});
