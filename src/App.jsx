import React from 'react';
import './main.css';
import axios from 'axios';
import ProductList from './components/ProductList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recommendedProducts: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/items')
      .then((items) => {
        this.setState({ recommendedProducts: items.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Recommended products!</h1>
        <ProductList items={this.state.recommendedProducts} />
      </div>
    );
  }
}

export default App;
