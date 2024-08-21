import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Layout from './Component/Layout';
import TodyResult from './Component/TodyResult';
import OldResult from './Component/OldResult';
import LiveDraw from './Component/LiveDraw';
import PdfResult from './Component/PdfResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/today-result" element={<TodyResult />} />
          <Route path="/old-result" element={<OldResult />} />
          <Route path="/live-draw" element={<LiveDraw />} />
          <Route path="/yputube-live" element={<LiveDraw />} />
          <Route path="/pdfResult/:date/:gtime" element={<PdfResult />} />


        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
