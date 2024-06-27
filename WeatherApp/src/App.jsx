
import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import routes from './routes';
import Home from './pages/Home/Home';


function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {
    //       routes.map((route,index)=>{
    //         const Page = route.element;
    //         return <Route  key={index} path={route.path} element={<Page/>} />
    //       })
    //     }
    //   </Routes>
    // </BrowserRouter>

    <Home/>
  );
}

export default App;
