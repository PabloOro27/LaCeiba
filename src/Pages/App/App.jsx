import React from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom'
// rutas
import Layout from "../../Components/Layout";
import NavbarUp from '../../Components/NavbarUp';
import NavbarLeft from '../../Components/NavbarLeft';
import Home from '../Home'
import './App.css' // estilo de la pagina
// contexto general de la aplicacion
import { GeneralContextProvider } from "../../Context";
// funcion de las rutas 
const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
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
        </Layout>
      </BrowserRouter>
    </GeneralContextProvider>
  );
}

export default App
