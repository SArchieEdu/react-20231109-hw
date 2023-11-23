import { Tab } from "../tab/component";

export const RestaurantTabs = ({ restaurants, onTabClick }) => {
  return (
    <div>
      {restaurants.map(({ name }, index) => (
        <Tab onClick={() => onTabClick(index)}>
          <span>Name</span>:{name}
        </Tab>
      ))}
    </div>
  );
};
