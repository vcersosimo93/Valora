import axios from "axios";

const SignUpService = (user) => {

  let url;
  console.log(user);
  if (user.tipo_tasador === 'relevador') {
    url = 'http://localhost:8080/api/create-relevador';
  } else if (user.tipo_tasador === 'tasador') {
    url = 'http://localhost:8080/api/create-tasador';
  } else {
    url = `http://localhost:8080/api/create-${user.tipo_usuario.toLowerCase()}`;
  }


  return axios.post(url, user)
    .then(response => response.data)
    .catch(error => {
      console.error('Error al crear usuario:', error);
      throw error;
    });
};

export default SignUpService;