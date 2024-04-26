import { useState } from "react";
import SignUpService from "../api/SignUpService";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/FormsModule.css";

const SignUp = () => {
  const [info, setInfo] = useState({
    nombre: '',
    username: '',
    password: '',
    tipo_usuario: '',
    tipo_tasador: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("info")
      console.log(info)
      const response = await SignUpService(info); // Llama al servicio SignUpService con los datos del usuario
      console.log(response.data); // Muestra la respuesta del backend en la consola
      // Aquí podrías agregar lógica adicional, como redirigir al usuario a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al crear usuario:', error);
      // Aquí podrías manejar los errores y mostrar un mensaje al usuario
    } finally {
      setLoading(false);
    }
  };

  const handleTipoUsuarioChange = (e) => {
    const tipoUsuario = e.target.value;
    setInfo({
      ...info,
      tipo_usuario: e.target.value,
      tipo_tasador: tipoUsuario === 'tasador' ? info.tipo_tasador : '' // Si no es tasador, establece tipo_tasador como vacío
    }); // Cambiado a tipoUsuario
  };

  const handleTipoTasadorChange = (e) => {
    setInfo({ ...info, tipo_tasador: e.target.value });
  };

  return (

    <div className="sign-up-container">
    </div>
  );
};


export default SignUp;