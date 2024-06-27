
import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map((route,index)=>{
            const Page = route.element;
            return <Route  key={index} path={route.path} element={<Page/>} />
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
