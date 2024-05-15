import React, { Component } from "react";
import { connect } from "react-redux";
import { getproduct } from "../../actions/productAction";
import { Card } from "antd";

const { Meta } = Card;

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.props.getproduct();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.products.products) {
      const products = nextProps.products.products;
      this.setState({ products });
    }
  }
  productDetails = (product) =>{
    return(
      <ul>
        <li>Rupees:{product.price}</li>
        <li>quantity:{product.quantity}</li>
      </ul>
    );
  };
  render() {
    const { products } = this.state;
    return (
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <card
              key={index}
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={product.name} description={this.productDetails(product)} />
            </card>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getproduct })(Products);