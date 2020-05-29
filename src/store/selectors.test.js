import * as selectors from './selectors';

describe('Selectors', () => {
  test('should return visibleAds selector', () => {
    const state = {
      ads: [{
        name: 'No Man\'s Sky',
        price: '300',
        description: 'Best game ever',
        createdAt: '1/1/11',
        tags: 'lifestyle,mobile',
        type: 'buy',
        updatedAd: '2/1/11',
        _id: '56gc3h45v4bj4h5',
      }],
      isUserLogged: false,
    }
    expect(selectors.getVisibleAds(state)).toHaveLength(1);
  });
});
