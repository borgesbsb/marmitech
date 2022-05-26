import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { fromWei } from '../../utils/web3';
import * as orderActionsCreator from '../../actions/orders';
import IconText from '../icon-text';
import styles from './product.scss';

const { Meta } = Card;

const STATUS = {
  0: 'Disponível',
  1: 'Comprando',
  2: 'Entregando',
  3: 'Vendido',
};

const Product = ({ product, placeOrder }) => (
  <Card
    className={styles.product}
    cover={<img alt={product.name} src={product.imageLink} />}
    actions={[
      <span>{STATUS[product.status.toNumber()]}</span>,
      <span>{fromWei(product.price, 'ether').toString()} Ether</span>,
      <IconText
        type="shopping-cart"
        text="Comprar"
        onClick={() => placeOrder(product)}
      />,
    ]}
  >
    <Meta title={product.name} description={product.descLink} />
  </Card>
);

Product.propTypes = {
  product: PropTypes.object.isRequired,
  placeOrder: PropTypes.func.isRequired,
};

export default connect(null, orderActionsCreator)(Product);
