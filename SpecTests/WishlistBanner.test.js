import React from 'react';
import { shallow } from 'enzyme';
import WishlistBanner from '../src/components/WishlistBanner';

describe('Product component', () => {
  jest.useFakeTimers();
  test('renders Product component', async (done) => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = await shallow(<WishlistBanner />);

    expect(wrapper.exists()).toBe(true);
    done();
  });
});
