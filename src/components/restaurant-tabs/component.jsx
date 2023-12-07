/* eslint-disable react/jsx-key */
import { RestaurantTabContainer } from "../restaurant-tab/container";
import { Tab } from "../tab/component";

import styles from "./styles.module.css";

export const RestaurantTabs = ({
  restaurantIds,
  onTabClick,
  activeRestaurantId,
}) => {
  return (
    <div>
      <Tab onClick={() => onTabClick(null)} className={styles.tab}>
        Reset
      </Tab>
      <Tab onClick={() => onTabClick("All")} className={styles.tab}>
        All
      </Tab>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer
          restaurantId={id}
          onClick={() => onTabClick(id)}
          isActive={id === activeRestaurantId}
          className={styles.tab}
        />
      ))}
    </div>
  );
};
