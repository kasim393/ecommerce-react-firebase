import { createSelector } from "reselect";

const selectModalReducer = (state) => state.modal;

export const selectIsModalOpen = createSelector(
  [selectModalReducer],
  (modal) => modal.isModalOpen
);
