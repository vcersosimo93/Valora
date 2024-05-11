import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp.jsx';
import Header from './components/fragments/header/Header.jsx';
import Footer from './components/fragments/footer/Footer.jsx';
import HeaderLogin from './components/fragments/header/HeaderLogin.jsx';
import Order from './components/Order.jsx';
import Inspeccion from './components/Inspeccion.jsx';
import Prueba from './components/prueba.jsx';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const WithHeader = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const WithHeaderLogin = ({ children }) => (
  <>
    <HeaderLogin />
    {children}
  </>
);

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* La ruta de Login está envuelta con el componente WithHeaderLogin */}
          <Route path="/" element={<WithHeaderLogin><Login /></WithHeaderLogin>} />
          {/* La ruta de SignUp está envuelta con el componente WithHeader */}
          <Route path="/RegistroUsuarios" element={<WithHeader><SignUp /></WithHeader>} />
          <Route path="/Orden" element={<WithHeader><Order /></WithHeader>} />
          <Route path="/Inspeccion" element={<WithHeader><Inspeccion /></WithHeader>} />
          <Route path="/Prueba" element={<WithHeader><Prueba /></WithHeader>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
