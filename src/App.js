import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Layout from './Component/Layout';
import TodyResult from './Component/TodyResult';
import OldResult from './Component/OldResult';
import LiveDraw from './Component/LiveDraw';
import PdfResult from './Component/PdfResult';
import SearchPage from './Component/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route index element={<TodyResult />} />
          <Route path="/today-result" element={<TodyResult />} />
          <Route path="/old-result" element={<Home />} />
          <Route path="/live-draw" element={<LiveDraw />} />
          {/* <Route path="/yputube-live" element={<LiveDraw />} /> */}
          <Route path="/search-res/:gDate" element={<SearchPage />} />
          <Route path="/pdfResult/:date/:gtime" element={<PdfResult />} />


        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
