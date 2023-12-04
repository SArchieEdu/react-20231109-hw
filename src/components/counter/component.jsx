import { Button } from "../button/component";

export const Counter = ({ value, increment, decrement, min = 0, max = 5 }) => {
  return (
    <div>
      <Button onClick={decrement} disabled={value <= min}>
        -
      </Button>
      {value}
      <Button onClick={increment} disabled={value >= max}>
        +
      </Button>
    </div>
  );
};
