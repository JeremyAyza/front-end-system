
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import rutas from "./router-config";


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className=''>
          <Switch>
            {
              rutas.map(ruta => <Route key={ruta.path} path={ruta.path} exact={ruta.exact}><ruta.componente /></Route>)
            }
          </Switch>
        </div>

      </BrowserRouter>
    </div>
  )
}
export default App;
