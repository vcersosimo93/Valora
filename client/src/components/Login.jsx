import React, { useEffect, useState } from 'react';
import LoginService from '../api/LoginService';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/FormsModuleLogin.css";

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

    <div className="login-container">
      <div className="fondoBlanco form-container">
        <main className="container-fluid h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="card bg-green bg-gradient">
                <div className="card-body">
                  <h2 className="text-center mb-4">Login</h2>
                  <form onSubmit={submitHandler}>
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
                    <button type="submit" className="btn btn-primary button-login">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;