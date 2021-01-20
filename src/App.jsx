import React from 'react';
import './main.css';
import ProductList from './components/ProductList';

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
        <h1>Recommended products</h1>
        <ProductList items={this.state.recommendedProducts} />
      </div>
    );
  }
}

export default App;
