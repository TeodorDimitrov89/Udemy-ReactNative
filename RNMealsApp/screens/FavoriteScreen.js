// import { useContext } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavoriteContext } from "../store/context/favorite-context";

const FavoriteScreen = () => {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  // const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You hove no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
    color: "white",
  },
});
