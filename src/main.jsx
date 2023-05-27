import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Login from './components/Login/Login.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import { cartProductsLoader } from './loaders/cartProductsLoader.js';
import Checkout from './components/Checkout/Checkout.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,
		children: [
			{
				path: '/',
				element: <Shop></Shop>,
			},
			{
				path: '/orders',
				element: <Orders />,
				loader: cartProductsLoader,
			},
			{
				path: '/inventory',
				element: <Inventory />,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/checkout',
				element: <Checkout></Checkout>,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
