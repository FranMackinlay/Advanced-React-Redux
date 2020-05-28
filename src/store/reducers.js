import * as TYPES from './types';

const initialState = {
  ads: [],
  isUserLogged: false,
  localCheck: false,
};

const updateItem = (items, updatedId, update) => {
  return items.map(item => {
    if (item.id === updatedId) {
      return {
        ...item,
        ...update(item),
      };
    }
    return item;
  });
};

const createItem = (items, itemToCreate) => {
  return [
    ...items,
    itemToCreate,
  ];
};

const isUserLogged = (state, success) => {
  console.log(state);
  state = success;
  return state;
};

const setLocal = (state, value) => {
  state = value;
  return state;
}

export function ads(state = initialState.ads, action) {
  switch (action.type) {
    case TYPES.FETCH_ADS_SUCCESS:
      return action.ads;
    case TYPES.CREATE_AD:
      return createItem(state, action.adToCreate);
    case TYPES.EDIT_AD:
      return updateItem(state, action.adToEdit, ad => ({
        name: ad.name,
        price: ad.price,
        description: ad.description,
        createdAt: ad.createdAt,
        tags: ad.tags,
        type: ad.type,
        updatedAd: ad.updatedAd,
        _id: ad._id,
      }));

    default:
      return state;
  };
};

export function checkLogin(state = initialState.isUserLogged, action) {
  switch (action.type) {
    case TYPES.USER_LOGIN:
      return isUserLogged(state, action.success);
    default:
      return state;
  }
};

export function localChecking(state = initialState.localCheck, action) {
  switch (action.type) {
    case TYPES.SET_LOCAL:
      return setLocal(state, action.value);
    default:
      return state;
  }
}
