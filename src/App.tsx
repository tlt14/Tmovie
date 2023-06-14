
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { useEffect } from 'react';

function App() {
  const { theme } = useSelector((state: RootState) => state.theme)
  useEffect(() => {
      document.body.classList.add(theme)
      document.body.classList.remove(theme==='dark'?'light':'dark')
  }, [theme])
  return (
    <div>
      <Routes>
        {
          publicRoutes.map((route, index) => {
            const Layout = route.layout
            return <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />
          })
        }
      </Routes>
    </div>
  );
}

export default App;
