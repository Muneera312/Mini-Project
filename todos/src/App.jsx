
import Todos from './Todos';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css";
function App() {
  

  return (
    <>
          <BrowserRouter>
     <Routes>
       <Route path="/" element={<Todos/>}/>
        
                                                 

     </Routes>
     
     
     </BrowserRouter>

     
    </>
  )
}

export default App
