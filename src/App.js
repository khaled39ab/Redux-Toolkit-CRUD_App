import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer/Footer';
import Header from './layouts/header/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
