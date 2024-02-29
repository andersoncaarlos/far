import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import FormularioCategoria from './components/Categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/Categorias/deletarCategoria/DeletarCategoria';
import ListaCategorias from './components/Categorias/listaCategorias/ListaCategoria';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className='min-h-[84vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  );
}
export default App;