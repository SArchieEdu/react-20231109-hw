export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantDishIds = (state, id) =>
  selectRestaurantById(state, id)?.menu;

export const selectRestaurantLoadingStatus = (state) => {
  return selectRestaurantModule(state).status;
};
