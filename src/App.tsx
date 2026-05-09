import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails/JobDetails'; // Создадим на следующем шаге
import EducationDetails from './pages/EducationDetails/EducationDetails';
import ScrollToTop from './components/ScrollToTop'; // Помощник для скролла наверх при смене страницы
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Возвращает скролл в начало при переходе по ссылкам */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-details/:jobId" element={<JobDetails />} />
          <Route path="/education-details/:eduId" element={<EducationDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App