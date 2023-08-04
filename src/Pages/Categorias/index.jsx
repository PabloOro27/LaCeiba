import {React, useContext} from 'react';
import DataTable from '../../Components/DataTable';
import { GeneralContext } from '../../Context';

const Categorias = () => {
    const context = useContext(GeneralContext);
    // datos para la tabla
    const data = context.categorias;
    const columns = [
      { Header: "ID", accessor: "id" },
      { Header: "Nombre", accessor: "nombre" },
      { Header: "Descripcion", accessor: "descripcion" },
    ];


    return (
        <div className='flex flex-col items-center justify-center mt-6'>
            <span className='mb-4 text-2xl text-lime-400 font-bold'>Categorias</span>
            <DataTable data={data} columns={columns} />
        </div>
    );
};

export default Categorias;