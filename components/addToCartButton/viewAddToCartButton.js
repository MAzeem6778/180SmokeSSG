import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ViewAddToCartButton extends Component {
  static defaultProps = {
    isEnabled: true
  };

  render() {
    return (
      <div style={{width: '40%'}}>
        <Button
          className="page-product-view--add-to-cart-btn"
          block
          size="lg"
          variant="success"
          type="submit"
          disabled={false}
        >

          <span>
            {"Add To Cart"}
          </span>

        </Button>
      </div>

    );
  }
}



export default ViewAddToCartButton;
