
import "./App.css";
import { createBrowserRouter, Route, RouterProvider, Routes,  } from "react-router-dom";
import rutas from "./router-config";


const MapeoRutas = rutas.map(elem => <Route key={elem.path} path={elem.path} element={<elem.element/>} ></Route>)

function App() {
  return (
    <div>
      <div className=''>
			<Routes>
				{MapeoRutas}
			</Routes>
      </div>

    </div>
  )
}
export default App;
