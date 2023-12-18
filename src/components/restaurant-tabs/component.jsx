/* eslint-disable react/jsx-key */
import { Tab } from "../tab/component";

import styles from "./styles.module.css";

export const RestaurantTabs = ({ restaurants, onTabClick }) => {
  return (
    <div>
      <Tab onClick={() => onTabClick(null)} className={styles.tab}>
        Reset
      </Tab>
      <Tab onClick={() => onTabClick("All")} className={styles.tab}>
        All
      </Tab>
      {restaurants.map(({ id, name }) => (
        <Tab onClick={() => onTabClick(id)} className={styles.tab}>
          {name}
        </Tab>
      ))}
    </div>
  );
};
