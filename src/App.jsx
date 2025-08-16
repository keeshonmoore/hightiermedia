import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Vault from './pages/Vault';
import ScrollToTop from './components/ScrollToTop';


function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      <Header />
      <ScrollToTop />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about-me" element={<Layout><AboutMe /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/vault" element={<Layout><Vault /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}