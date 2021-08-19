import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './Screens/Login'
import { Home } from './Screens/Home'
import { Cadastro } from './Screens/Cadastro'
import { Update } from './Screens/Update'
import { Criar } from './Screens/Criar';

function App() {
  return (
    <>
       <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/update/:id" component={Update} />
            <Route path="/create" component={Criar} />
        </Switch>
    </ BrowserRouter>
    </>
  );
}

export default App;
