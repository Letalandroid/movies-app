import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Popular } from './pages/popular/popular'
import { Top } from './pages/tendencias/top'
import { Page404 } from './pages/page404/404'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/popular' element={ <Popular /> } />
          <Route path='/tendencias' element={ <Top /> } />
          <Route path='*' element={ <Page404 /> } />
          {/* For GitHub Pages */}
          <Route path='/movies-app/' element={ <Home /> } />
          <Route path='/movies-app/home' element={ <Home /> } />
          <Route path='/movies-app/popular' element={ <Popular /> } />
          <Route path='/movies-app/tendencias' element={ <Top /> } />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
