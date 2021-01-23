import React from 'react';
import { shallow } from 'enzyme';
import BagBanner from '../src/components/BagBanner';

describe('BagBanner component', () => {
  jest.useFakeTimers();
  test('renders BagBanner component', async (done) => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = await shallow(<BagBanner />);

    expect(wrapper.exists()).toBe(true);
    done();
  });
});
