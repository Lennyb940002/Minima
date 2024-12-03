import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage';
import { SalesDashboard } from './pages/SalesDashboard';
import { StockPage } from './pages/StockPage';
import { AccountingPage } from './pages/AccountingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <main className="container mx-auto py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/e-commerce/ventes" element={<SalesDashboard />} />
            <Route path="/e-commerce/stock" element={<StockPage />} />
            <Route path="/e-commerce/comptabilite" element={<AccountingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;