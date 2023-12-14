import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';

export const App = () => {
  return <RecipeList items={recipes} />;
};

// https://react-icons.github.io/react-icons/