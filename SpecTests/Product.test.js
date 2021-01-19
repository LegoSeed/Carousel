import React from 'react';
import { shallow } from 'enzyme';
import Product from '../src/components/Product';

const LegoItem = {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
};

describe('Product component', () => {
  test('renders Product component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<Product item={LegoItem} />);

    expect(wrapper.exists()).toBe(true);
  });
});
