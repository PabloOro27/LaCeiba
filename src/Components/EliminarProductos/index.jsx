import { React, useState, useContext } from "react";
import { GeneralContext } from "../../Context";
// toast de notificaciones
import { toast } from "react-toastify";
import ProductoEliminadoImg from "../../assets/Images/ProductoEliminado.svg";

const EliminarProductos = () => {
  // estado del formulario
  const [formData, setFormData] = useState({});

  // función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/api/v1/productos/${formData.id_producto}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta de la API aquí
        console.log(data);
        if(data.error){
            toast.error("No se pudo eliminar el producto. Error: " + data.error);
        } else {
            toast.success("Producto eliminado con éxito");
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
      })
      .catch((error) => {
        // Manejar errores aquí
        console.error(error);
        // notificación de error
        toast.error("No se pudo eliminar el producto. Error: " + error);
      });
    
  };

  // función para actualizar el estado del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
 
  return (
    <div className="flex flex-col items-center">
      {/* título */}
      <h2 className="text-2xl font-bold text-lime-600 mt-8 mb-5">
        Eliminar Productos
      </h2>
      {/* formulario de eliminar productos */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="number"
          name="id_producto"
          value={formData.id_producto || ""}
          onChange={handleChange}
          placeholder="Id del producto"
          className="border-2 border-lime-400 rounded-lg px-4 py-1 text-lime-400"
        />
        <button
          type="submit"
          className="text-lg font-bold text-lime-400 border-2 border-lime-400 rounded-lg px-4 py-1 mt-5 hover:bg-lime-400 hover:text-white"
        >
          Eliminar
        </button>
      </form>
      {/* figura de eliminación de productos */}
      <figure className="w-80">
        <img src={ProductoEliminadoImg} alt="" />
      </figure>
    </div>
  );
};

export default EliminarProductos;
