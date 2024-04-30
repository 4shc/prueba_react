import './App.css';
import LoginButton from './Componentes/LoginButton';
import LogoutButton from './Componentes/LogoutButton';
import Profile from './Componentes/Profile';
import Persona from './Componentes/Persona';

function App() {
  return (
    <div className="App">
        <nav className='nav-login'>
          <LoginButton/>
          <LogoutButton/>
          <Profile />
        </nav>

        <Persona 
          nombre =" Juan Lizcano" 
          edad="44" 
          correo = "juang@gmail.com" 
        />
        <Persona 
          nombre =" Maria Cano" 
          edad="33" 
          correo = "miiria@gmail.com" 
        />
        <Persona 
          nombre =" Ana Pulido" 
          edad="45" 
          correo = "" 
        />
    </div>
  );
}

export default App;
