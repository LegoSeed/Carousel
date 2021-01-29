/* eslint-disable react/jsx-no-bind */
/* eslint-disable max-len */
import React from 'react';
import { Col, Container } from 'react-bootstrap';
import ProductList from './components/ProductList';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recommendedProducts: [], clicked: false, clicked2: false };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.getItems(this.onComplete.bind(this));
  }

  onComplete(items) {
    this.setState({ recommendedProducts: items.data });
  }

  OnAddToBagClick() {
    this.setState({ clicked: true });
    setTimeout(() => this.setState({ clicked: false }), 5000);
  }

  OnAddToWishlistClick() {
    this.setState({ clicked2: true });
    setTimeout(() => this.setState({ clicked2: false }), 5000);
  }

  render() {
    return (
      <div>
        <Container>
          <Col className="buffer">
            <ProductList items={this.state.recommendedProducts} wasClicked={this.state.clicked} wasClicked2={this.state.clicked2} click={this.OnAddToBagClick.bind(this)} click2={this.OnAddToWishlistClick.bind(this)} />

          </Col>

        </Container>

      </div>
    );
  }
}

export default App;
