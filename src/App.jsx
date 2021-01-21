import React from 'react';
import './main.css';
import styled from 'styled-components';
import ProductList from './components/ProductList';

const Title = styled.h1`
font-family: Cera Pro,sans-serif;
  font-size: 30px;
  `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recommendedProducts: [] };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.getItems(this.onComplete.bind(this));
  }

  onComplete(items) {
    this.setState({ recommendedProducts: items.data });
  }

  render() {
    return (
      <div>
        <Title>
          Recommended For You
        </Title>
        <ProductList items={this.state.recommendedProducts} />
      </div>
    );
  }
}

export default App;
