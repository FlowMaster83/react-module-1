import PropTypes from 'prop-types';

// https://react-icons.github.io/react-icons/
import { IoMdTime } from 'react-icons/io';
import { FaPeopleRoof } from 'react-icons/fa6';
import { MdFoodBank } from 'react-icons/md';

/*

1. Компонент каждого рецепта: функция с экспортом
2. деструктуризация item + глубокая вложенностей
3. верстка с компонентами иконок
4. проптайпы

*/

export const Recipe = ({ item: { name, image, time, servings, calories } }) => {
  return (
    <section>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>

      <div style={{ display: 'flex' }}>
        <div>
          <IoMdTime size="20" />
          {time} min
        </div>
        <div>
          <FaPeopleRoof size="20" />
          {servings} servings
        </div>
        <div>
          <MdFoodBank size="20" />
          {calories} calories
        </div>
      </div>

      <div>
        <h3>Difficulty</h3>
        <div>
          <span>easy</span>
          <span>medium</span>
          <span>hard</span>
        </div>
      </div>
    </section>
  );
};

Recipe.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
