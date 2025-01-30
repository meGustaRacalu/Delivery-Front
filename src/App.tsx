import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/Home';
import ProdutosPage from './pages/produtos/produtos';
import Sobre from './pages/sobre/Sobre';
import DeletarProduto from './components/produtos/deletarprodutos/DeletarProdutos';
import FormProdutos from './components/produtos/formprodutos/FormProdutos';
import ListaProdutos from './components/produtos/listarprodutos/ListarProdutos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/formprodutos/:id" element={<FormProdutos />} />
        <Route path="/listarprodutos" element={<ListaProdutos />} />
        <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
