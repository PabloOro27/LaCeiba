import {React, useContext} from 'react';
import DataTable from '../../Components/DataTable';
import { GeneralContext } from '../../Context';

const Productos = () => {
    const context = useContext(GeneralContext);
    // datos para la tabla
    const data = context.productos;
    const columns = [
      { Header: "ID", accessor: "id" },
      { Header: "Nombre", accessor: "nombre" },
      { Header: "Precio Costo", accessor: "precioCosto" },
      { Header: "Precio", accessor: "precioVenta" },
      { Header: "Proveedor", accessor: "proveedor" },
      { Header: "Existencia", accessor: "existencia" },
    ];
    return (
        <div className='flex flex-col items-center w-[825px] mt-3'>
            <span className='text-2xl font-bold text-lime-400 mb-5'>Productos</span>
            <div className='mb-10'>
                <DataTable data={data} columns={columns} />
            </div>
        </div>
    );
};

export default Productos;