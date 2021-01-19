import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../src/App';
import ProductList from '../src/components/ProductList';

describe('App component', () => {
  test('renders App component', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the inner ProductList', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(ProductList).length).toEqual(1);
  });
});
