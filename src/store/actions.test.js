import * as actions from './actions';
import * as TYPES from './types';

describe('Accion asincrona: fetchAds', () => {
  test('should dispatch FETCH_ADS_REQUEST and FETCH_ADS_SUCCESS actions', async () => {
    const ads = [];
    const getAds = jest.fn().mockResolvedValue({ results: ads });
    const dispatch = jest.fn();
    const action = actions.fetchAds();
    const getState = () => { };
    const api = () => ({
      getAds,
    });

    await action(dispatch, getState, { api });

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: TYPES.FETCH_ADS_REQUEST,
    });

    expect(getAds).toHaveBeenCalled();

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: TYPES.FETCH_ADS_SUCCESS,
      ads,
    });
  });
});

describe('Accion sincrona: loginUserAction', () => {
  test('should create one USER_LOGIN action with success', () => {
    const success = true;
    const expectedAction = {
      type: TYPES.USER_LOGIN,
      success,
    };
    expect(actions.loginUserAction(success)).toEqual(
      expectedAction
    );
  });
});
