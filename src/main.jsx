import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SidebarLeft from './components/SidebarLeft.jsx';
import SidebarRight from './components/SidebarRight.jsx';
import Profile from './pages/Profile.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="w-full h-screen bg-[#E5D9F2] flex flex-col">
        <Navbar />
        <div className="w-full flex flex-1 overflow-hidden">
          <SidebarLeft className="w-1/5 h-full overflow-y-auto p-4 scrollbar-hidden" />
          <div className="w-3/5 h-full overflow-y-auto scrollbar-hidden p-4">
            <Routes>
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <SidebarRight className="w-1/5 h-full overflow-y-auto p-4 scrollbar-hidden" />
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
