import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu, Input } from 'antd';
import Home from './home';
import YourOrders from './your-orders';
import AddProduct from './add-product';
import About from './about';
import MenuLink from './menu-link';
import logo from '../images/logo.svg';
import styles from './app.scss';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const App = () => (
  <Router>
    <Layout className={styles.app}>
      <Header className={styles.header} >
       
        <Search
          className={styles.search}
          placeholder="Procurar marmita"
        />
      </Header>

      <Content className={styles.content}>
        <Menu
          className={styles.mainNav}
          mode="horizontal"
          defaultSelectedKeys={['active']}
          selectable={false}
        >
          <MenuLink to="/" activeOnlyWhenExact label="Pratos" />
          <MenuLink to="/your-orders" label="Pedidos" />
          <MenuLink to="/add-product" label="Adicionar Produtos" />
          <MenuLink to="/about" label="Sobre" />
        </Menu>

        <div className={styles.main}>
          <Route exact path="/" component={Home} />
          <Route path="/your-orders" component={YourOrders} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/about" component={About} />
        </div>
      </Content>

      <Footer className={styles.footer}>
        Oficina III
      </Footer>
    </Layout>
  </Router>
);

export default hot(module)(App);
