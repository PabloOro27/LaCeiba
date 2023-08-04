import React from 'react';
import ImagenBienvenida from '../../assets/Images/Bienvenida.svg'

const Home = () => {
    const estilos = {
      width: "calc(100vw - 100px)",
      height: "calc(100vh - 80px)",
    };
    return (
        <div className='flex flex-col items-center' style={estilos}>
            <h1 className='font-bold text-2xl text-lime-400 mt-5'>Bienvenido</h1>
            <figure className='w-1/2'>
                <img src={ImagenBienvenida} alt="bienvenida" />
            </figure>
        </div>
    );
};

export default Home;