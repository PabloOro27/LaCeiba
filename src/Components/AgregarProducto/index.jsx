import { React, useState, useContext } from "react";
// toast de notificaciones
import { toast } from "react-toastify";

const AgregarProducto = () => {
  // estado del formulario
  const [formData, setFormData] = useState({});

  // función para manejar el envío del formulario
 const handleSubmit = (event) => {
   event.preventDefault();

   fetch(`http://localhost:3000/api/v1/productos`, {
     method: "POST",
     body: JSON.stringify(formData),
     headers: {
       "Content-Type": "application/json", // Asegúrate de incluir el encabezado de tipo de contenido
     },
   })
     .then((response) => response.json())
     .then((data) => {
       // Manejar la respuesta de la API aquí
       console.log(data);
       if (data.statusCode === 409 || data.error) {
         toast.error("No se pudo agregar el producto Error: " + data.message);
       } else {
         toast.success("Producto agregado con éxito");
         setTimeout(() => {
           window.location.reload();
         }, 3000);
       }
     })
     .catch((error) => {
       // Manejar errores aquí
       console.error(error);
       // notificación de error
       toast.error("No se pudo agregar el producto. Error: " + error);
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
      <h2 className="text-2xl font-bold text-lime-600 mt-3 mb-3">
        Agregar un Producto
      </h2>
      {/* formulario de eliminar productos */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* Nombre  */}
        <input
          type="text"
          name="nombre"
          value={formData.nombre || ""}
          onChange={handleChange}
          placeholder="nombre del producto"
          className="border-2 border-lime-400 rounded-lg px-3 py-1 text-lime-400 w-[230px] box-content mb-4"
        />
        {/* descripcion  */}
        <input
          type="text"
          name="descripcion"
          value={formData.descripcion || ""}
          onChange={handleChange}
          placeholder="descripcion del producto"
          className="border-2 border-lime-400 rounded-lg px-3 py-1 text-lime-400 w-[230px] box-content mb-4"
        />
        {/* fecha de Vencimiento  */}
        <input
          type="date"
          name="fechaVencimiento"
          value={formData.fechaVencimiento || ""}
          onChange={handleChange}
          //   placeholder="descripcion del producto"
          className="border-2 border-lime-400 rounded-lg px-3 py-1 text-lime-400 w-[230px] box-content mb-4"
        />
        {/* Proveedor  */}
        <input
          type="text"
          name="proveedor"
          value={formData.proveedor || ""}
          onChange={handleChange}
          placeholder="proveedor del producto"
          className="border-2 border-lime-400 rounded-lg px-3 py-1 text-lime-400 w-[230px] box-content mb-4"
        />
        {/* nit del proveedor */}
        <input
          type="number"
          name="nitProveedor"
          value={formData.nitProveedor || ""}
          onChange={handleChange}
          placeholder="NIT del proveedor"
          className="border-2 border-lime-400 rounded-lg px-3 py-1 text-lime-400 w-[230px] box-content mb-4"
        />
        {/* Cantidad  */}
        <input
          type="number"
          name="cantidad"
          value={formData.cantidad || ""}
          onChange={handleChange}
          placeholder="cantidad de productos"
          className="border-2 border-lime-400 rounded-lg px-3 py-1 text-lime-400 w-[230px] box-content mb-4"
        />
        {/* Precio Costo  */}
        <input
          type="number"
          name="precioCosto"
          value={formData.precioCosto || ""}
          onChange={handleChange}
          placeholder="precio del producto"
          className="border-2 border-lime-400 rounded-lg px-3 py-1 text-lime-400 w-[230px] box-content mb-4"
        />
        {/* Precio Venta  */}
        <input
          type="number"
          name="precioVenta"
          value={formData.precioVenta || ""}
          onChange={handleChange}
          placeholder="precio venta del producto"
          className="border-2 border-lime-400 rounded-lg px-3 py-1 text-lime-400 w-[230px] box-content mb-4"
        />
        <button
          type="submit"
          className="text-lg font-bold text-lime-400 border-2 border-lime-400 rounded-lg px-4 py-1 hover:bg-lime-400 hover:text-white"
        >
            Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default AgregarProducto;
