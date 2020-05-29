import * as reducers from './reducers';
import * as TYPES from './types';

describe('Reducers', () => {
  test('should handle FETCH_ADS_SUCCESS action', () => {
    const initialState = [];
    const ads = [{
      name: 'No Man\'s Sky',
      price: '300',
      description: 'Best game ever',
      createdAt: '1/1/11',
      tags: 'lifestyle,mobile',
      type: 'buy',
      updatedAd: '2/1/11',
      _id: '56gc3h45v4bj4h5',
    }];
    const action = {
      type: TYPES.FETCH_ADS_SUCCESS,
      ads,
    };
    const expectedState = ads;
    expect(reducers.ads(initialState, action)).toEqual(expectedState);
  });
});
