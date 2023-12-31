import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { List } from './RecipeList.styled';
import { ListItem } from './RecipeList.styled';


export const RecipeList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <Recipe item={item} />
        </ListItem>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
    .isRequired,
};

/* items - это пропсы Компонента <RecipeList items={recipes} /> */
/* ключ даём верхнему элементу (li) */
