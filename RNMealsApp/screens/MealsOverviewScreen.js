import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
// import {useRoute} from "@react-navigation/native"

import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  // const route = useRoute();
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
