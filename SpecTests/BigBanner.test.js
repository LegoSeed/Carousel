import React from 'react';
import { shallow } from 'enzyme';
import BagBanner from '../src/components/BagBanner';

describe('Product component', () => {
  jest.useFakeTimers();
  test('renders Product component', async (done) => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = await shallow(<BagBanner />);

    expect(wrapper.exists()).toBe(true);
    done();
  });
});
