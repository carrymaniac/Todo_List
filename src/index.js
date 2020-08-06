import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import {reducer} from './reduces'
import Router from './router'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;



let store = createStore(reducer);
ReactDOM.render(
  <Provider store={store} className='myApp'>
     <Layout className="layout myApp">
     <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><a href='#/'>go todo List page</a></Menu.Item>
        <Menu.Item key="2"><a href='#/donepage'>go done page</a></Menu.Item>
      </Menu>
    </Header>
    <Content>
    <Router/>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
     </Layout>
  </Provider>
  ,document.getElementById('root')
);
