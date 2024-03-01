import { useState } from "react";
import SignUpService from "../api/SignUpService";
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
      <div className="fondoBlanco form-container">
        <main className="container-fluid h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="card bg-green bg-gradient">
                <div className="card-body">
                  <h2 className="text-center mb-4">Registro de Usuarios</h2>
                  <form onSubmit={submitHandler}>
                    <div className="signUp form-group">
                      <label htmlFor="nombre">Nombre Completo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder=""
                        value={info.nombre}
                        onChange={(e) => setInfo({ ...info, nombre: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">Nombre Usuario</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder=""
                        value={info.username}
                        onChange={(e) => setInfo({ ...info, username: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder=""
                        value={info.password}
                        onChange={(e) => setInfo({ ...info, password: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tipo_usuario">Tipo Usuario</label>
                      <select
                        className="form-control"
                        id="tipo_usuario"
                        value={info.tipo_usuario}
                        onChange={handleTipoUsuarioChange}
                      >
                        <option value="">Seleccione un tipo de usuario</option>
                        <option value="administrador">Administrador</option>
                        <option value="gerencia">Gerencia</option>
                        <option value="secretaria">Secretaria</option>
                        <option value="tasador">Tasador</option>
                      </select>
                    </div>
                    {info.tipo_usuario === 'tasador' && (
                      <div className="form-group">
                        <label htmlFor="especialidad">Tipo tasador</label>
                        <select
                          className="form-control"
                          id="especialidad"
                          value={info.tipo_tasador}
                          onChange={handleTipoTasadorChange}
                        >
                          <option value="">Seleccione un tipo de tasador</option>
                          <option value="relevador">Relevador</option>
                          <option value="tasador">Tasador</option>
                        </select>
                      </div>
                    )}
                    <button type="submit" className="btn btn-primary button">Registrarse</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};


export default SignUp;