import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/Home';
import ModalProdutos from './pages/produtos/produtos';
import Categoria from './pages/categoria/Categoria';
import Sobre from './pages/sobre/Sobre';
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProdutos';
import FormProdutos from './components/produtos/formprodutos/FormProdutos';
import ListaProdutos from './components/produtos/listarprodutos/ListarProdutos';
import ProdutosSaudaveis from './pages/produtos/ProdutosSaudaveis';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col h-screen justify-between">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ModalProdutos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/deletarprodutos" element={<DeletarProduto />} />
          <Route path="/formprodutos" element={<FormProdutos />} />
          <Route path="/listarprodutos" element={<ListaProdutos />} /> 
          <Route path="/produtossaudaveis" element={<ProdutosSaudaveis />} /> 
          <Route path="/formprodutos/:id" element={<FormProdutos />} />
          <Route path="/listarprodutos" element={<ListaProdutos />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          <Route path="/categoria" element={<Categoria/>}/>
          <Route path="/formcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
        </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
