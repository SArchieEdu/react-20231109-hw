import { Counter } from "../counter/component";

export const Dish = ({ dish, className, amount, increment, decrement }) => {
  if (!dish) {
    return null;
  }

  return (
    <div className={className}>
      <div>{dish.name}</div>
      <Counter value={amount} increment={increment} decrement={decrement} />
    </div>
  );
};
