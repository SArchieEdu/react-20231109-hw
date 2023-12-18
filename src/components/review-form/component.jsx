import { useReducer } from "react";
import { Counter } from "../counter/component";
import { Button } from "../button/component";

const INITIAL_STATE = {
  name: "",
  text: "",
  rating: 5,
};

const RATING_STEP = 0.5;

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
      };
    case "setText":
      return {
        ...state,
        text: action.payload,
      };
    // case "setRating":
    //   return {
    //     ...state,
    //     rating: action.payload,
    //   };
    case "incrementRating":
      return {
        ...state,
        rating: state.rating + RATING_STEP,
      };
    case "decrementRating":
      return {
        ...state,
        rating: state.rating - RATING_STEP,
      };

    default:
      return state;
  }
};

export const ReviewForm = ({ initialState = INITIAL_STATE, onSave }) => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input
          id="text"
          type="text"
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <Counter
          value={formValue.rating}
          increment={() =>
            dispatch({
              type: "incrementRating",
            })
          }
          decrement={() =>
            dispatch({
              type: "decrementRating",
            })
          }
          min={1}
        />
      </div>
      <Button onClick={() => onSave?.(formValue)}>Save</Button>
    </div>
  );
};
