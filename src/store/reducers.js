import * as TYPES from './types';

const initialState = {
  ads: [],
};

// const updateItem = (items, updatedId, update) => {
//   return items.map(item => {
//     if (item.id === updatedId) {
//       return {
//         ...item,
//         ...update(item),
//       };
//     }
//     return item;
//   });
// };

const createItem = (items, itemToCreate) => {
  return [
    ...items,
    itemToCreate,
  ];
};

export function ads(state = initialState.ads, action) {
  switch (action.type) {
    case TYPES.FETCH_ADS_SUCCESS:
      return action.ads;
    case TYPES.CREATE_AD:
      return createItem(state, action.adToCreate);
    default:
      return state;
  };
};
