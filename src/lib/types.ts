// types.ts
export type Recipe = {
  label: string;
  healthLabels: string[];
  yield: string;
  image: string;
  cuisineType: string[]
};

export type RecipeCardProps = {
  recipe: Recipe;
  bg: string;
  badge: string;
};