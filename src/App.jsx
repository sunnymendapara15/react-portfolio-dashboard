import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Overview from './pages/Overview';
import Portfolio from './pages/Portfolio';

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <NavBar />
        <main className="page-shell">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
