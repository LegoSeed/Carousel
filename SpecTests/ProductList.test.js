import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../src/components/ProductList';

const LegoArray = [{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/vwBusResized.jpg', name: 'The VW Bus', reviewScore: 90, price: 50,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/dragonAtGringottsResize2.jpg', name: 'Harry Potter: The Dragon escapes Gringotts', reviewScore: 60, price: 60,
},
{
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/starWarsR.jpg', name: 'Star Wars: Obi Won and Luke cruising', reviewScore: 70, price: 120,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/pirateShipResize.jpg ', name: 'Pirate Adventures', reviewScore: 80, price: 100,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/londonBridgeResize.jpg', name: 'London Bridge', reviewScore: 90, price: 220,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/airplaneResize.jpg', name: '10226 Sopwith Camel', reviewScore: 75, price: 80,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/sydneyOperaHouseResize.jpg', name: 'Sydney Opera House', reviewScore: 85, price: 250,
}, {
  imageUrl: 'https://chuck3774bucket.s3.us-east-2.amazonaws.com/leaningTowerResize.jpg ', name: 'The Leaning Tower of Pisa', reviewScore: 40, price: 50,
}];

describe('ProductList component', () => {
  test('renders ProductList component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<ProductList items={LegoArray} />);

    expect(wrapper.exists()).toBe(true);
  });
});
