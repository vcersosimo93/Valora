import React, { useEffect, useState } from 'react';
import "../css/FormsModuleLogin.css";
import LoginService from '../api/LoginService';

function Login() {

  const [info, setInfo] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log("info")
      console.log(info)
      const response = await LoginService(info);
      console.log(response.data);
    } catch (error) {
      console.error('Error al crear usuario:', error);
    } finally {
      setLoading(false);
    }
  };



  return (


    <div className="container-fluid fondoLogin ">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body formularioLogin">
              <h2 className="text-center mb-4 tituloLogin">Iniciar Sesión</h2>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre de Usuario:</label>
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
                  <label htmlFor="email">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                    value={info.password}
                    onChange={(e) => setInfo({ ...info, password: e.target.value })}
                  />
                </div>
                <div className="botonLogin">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;