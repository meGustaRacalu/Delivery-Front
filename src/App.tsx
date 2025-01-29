import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/Home';
import ProdutosPage from './pages/produtos/produtos'; // Importando a página de produtos

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/produtos" element={<ProdutosPage />} /> {/* Página de Produtos */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
