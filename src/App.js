import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './pages/View'
import Edit from './pages/Edit';
import Home from './pages/Home'
function App() {
  return ( 
    
    <BrowserRouter>
      <Routes>
        <Route path="/view" element={<View />} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
