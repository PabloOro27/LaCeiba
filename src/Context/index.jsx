import { createContext, useEffect, useState } from 'react';

// creacion del contexto y exportacion
export const GeneralContext = createContext();

// funcion del proveedor del contexto
export const GeneralContextProvider = ({ children }) => {
    return (
        <GeneralContext.Provider 
            // valores a compartir
            value={{   

            }}>
            {/* heredacion de los hijos  */}
            {children}
        </GeneralContext.Provider>
    );
};