import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Ads from './Ads';

const history = {
  push: jest.fn(),
};

describe('Ads', () => {
  const store = {
    dispatch: () => { },
    getState: () => ({
      ads: [
        {
          name: 'No Man\'s Sky',
          price: '300',
          description: 'Best game ever',
          createdAt: '1/1/11',
          tags: 'lifestyle,mobile',
          type: 'buy',
          updatedAd: '2/1/11',
          _id: '56gc3h45v4bj4h5',
        }
      ],
    }),
    subscribe: () => { },
  };
  it('should render a list of Card', () => {
    const wrapper = mount(
      <Router>
        <Provider store={store}>
          <Ads ads={store.getState().ads} history={history} />
        </Provider>
      </Router>
    );
    expect(wrapper.find('Card')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
