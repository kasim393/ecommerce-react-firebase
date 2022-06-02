import { WISH_ACTION_TYPES } from "./wish.types";

export const WISH_INITIAL_STATE = {
  wishItems: [],
};

export const wishReduce = (state = WISH_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case WISH_ACTION_TYPES.SET_WISH_ITEMS:
      return {
        ...state,
        wishItems: payload,
      };
    default:
      return state;
  }
};
