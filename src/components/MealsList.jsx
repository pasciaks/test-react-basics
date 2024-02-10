import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
  const { meals } = useMealsListContext();

  return (
    <ul>
      {meals.map((meal, index) => (
        <li key={index}>{meal}</li>
      ))}
    </ul>
  );
};

export default MealsList;
