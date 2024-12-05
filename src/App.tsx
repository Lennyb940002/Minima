import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/PageVente/HomePage';
import { SalesDashboard } from './pages/PageVente/SalesDashboard';
import { StockPage } from './pages/PageVente/StockPage';
import { AccountingPage } from './pages/PageVente/AccountingPage';
import { NotePage } from './pages/PageVente/NotePage';
import { TablePage } from './pages/PageVente/TablePage';

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
            <Route path="/e-commerce/note" element={<NotePage />} />
            <Route path="/e-commerce/table" element={<TablePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;