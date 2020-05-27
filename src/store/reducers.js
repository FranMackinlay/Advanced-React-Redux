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

export function ads(state = initialState.ads, action) {
  switch (action.type) {
    case TYPES.FETCH_ADS_SUCCESS:
      return action.ads;
    default:
      return state;
  };
};
