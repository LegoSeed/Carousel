import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../src/App';
import ProductList from '../src/components/ProductList';

const flushPromises = () => new Promise(setImmediate);
// jest.mock('getItems', () => jest.fn(() => ({})));

describe('App component', () => {
  test('renders App component', async () => {
    /* eslint-disable-next-line react/jsx-filename-extension */
    const wrapper = mount(<App getItems={(cb) => {
      cb({
        data: [{
          imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
        }],
      });
    }}
    />);
    await flushPromises();
    wrapper.update();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state('recommendedProducts').length).toBe(1);
  });
  it('renders the inner ProductList', async () => {
    const wrapper = mount(<App getItems={jest.fn()} />);
    await flushPromises();
    wrapper.update();
    expect(wrapper.find(ProductList).length).toEqual(1);
  });
});
