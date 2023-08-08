import { createContext, useEffect, useState } from 'react';

// creacion del contexto y exportacion
export const GeneralContext = createContext();

// funcion del proveedor del contexto
export const GeneralContextProvider = ({ children }) => {
    // categorias de la base de datos
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/categorias")
          .then((response) => response.json())
          .then((data) => setCategorias(data));
    }, []);
    // productos de la base de datos 
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/v1/productos")
          .then((response) => response.json())
          .then((data) => setProductos(data));
    }, []);
// -----------------------------------------------------------------------------------------------
    return (
        <GeneralContext.Provider 
            // valores a compartir
            value={{   
                categorias,
                setCategorias, 
                productos,
                setProductos,
            }}>
            {/* heredacion de los hijos  */}
            {children}
        </GeneralContext.Provider>
    );
};