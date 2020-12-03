/* eslint-disable default-case */
import produce from "immer";

export const productReducer = produce((draft, action) => {
  switch(action.type) {
    case 'PRODUCT_FETCH_INIT':
      draft.isLoading = true;
      draft.isError = false;
      break;
    case 'PRODUCT_FETCH_SUCCESS':
      draft.isLoading = false;
      draft.isError = false;
      draft.data = action.payload;
      draft.filtered = action.payload;
      break;
    case 'PRODUCT_FETCH_FAILURE':
      draft.isLoading = false;
      draft.isError = true;
      break;
    case 'ADD_FILTER_CATEGORY':
      draft.filters.push(action.payload);
      draft.filtered = []

      // Treat Multiple filters from same category as 'OR' relation
      // Different category as 'AND' Relation
      for (let obj of draft.filters) {
        draft.filtered = draft.filtered.concat(draft.data.filter((item) => {
          if (item[obj.categoryProp] === undefined || item[obj.categoryProp] !== obj.value) {
            return false;
          }
          return true;
        }));
      }
      break;
    case 'REMOVE_FILTER_CATEGORY':
      let tempIndex = draft.filters.findIndex((element) =>
        element.value === action.payload.value 
        && element.categoryProp === action.payload.categoryProp
      );
      draft.filters.splice(tempIndex, 1);
      draft.filtered = draft.data.filter((item) => {
        for (let obj of draft.filters) {
          if (item[obj.categoryProp] === undefined || item[obj.categoryProp] !== obj.value)
            return false;
        }
        return true;
      });
  }
}, {
  data: [],
  filtered: [],
  filters: [],
  isLoading: false,
  isError: false,
});
