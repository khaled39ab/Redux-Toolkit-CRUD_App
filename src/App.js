import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer/Footer';
import Header from './layouts/header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/show-books' element={<Home />}></Route>
          <Route path='/add-book' element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
