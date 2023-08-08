import React from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom'
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// rutas
import Layout from "../../Components/Layout";
import NavbarUp from '../../Components/NavbarUp';
import NavbarLeft from '../../Components/NavbarLeft';
import Home from '../Home'
import Productos from '../Productos';
import Categorias from '../Categorias';
import EliminarProductos from '../../Components/EliminarProductos';
import AgregarProducto from '../../Components/AgregarProducto';
import NotFound from '../../Components/NotFound'
import './App.css' // estilo de la pagina
// contexto general de la aplicacion
import { GeneralContextProvider } from "../../Context";
// funcion de las rutas 
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home />},
    { path: "/productos", element: <Productos />},
    { path: "/categorias", element: <Categorias />},
    { path: "/agregarProductos", element: <AgregarProducto />},
    { path: "/eliminarProductos", element: <EliminarProductos />},
    { path: "*", element: <NotFound /> },	
  ]);
  return routes;
};

function App() {
  return (
    <GeneralContextProvider>
      <BrowserRouter>
        <Layout>
          <NavbarUp />
          <NavbarLeft />
          <AppRoutes />
          <ToastContainer />
        </Layout>
      </BrowserRouter>
    </GeneralContextProvider>
  );
}

export default App
