import { NavLink } from 'react-router-dom'
import Router from './routers/index'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/login">login</NavLink> ｜
        <NavLink to="/dashboard">dashboard</NavLink> ｜
        <NavLink to="/welcome">welcome</NavLink>
      </nav>
      <Router />
    </div>
  );
}

export default App;
