import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SellPage from './pages/SellPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import MyAccountPage from './pages/MyAccountPage';
import axios from 'axios';
import PageNotFound from './pages/PageNotFound';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import TermsOfService from './pages/TermsOfService';
import FAQ from './pages/FAQ';

function App() {
  const [user, setUser] = useState(null);

  useEffect(
    () => {
      async function fetchUserInfo() {
        try {
          const response = await axios.get("http://localhost:3000/islogin",
            { withCredentials: true }
          );
          setUser(response.data.user);
        }
        catch (error) {
          setUser(null);
        }
      }
      fetchUserInfo();
    }, []
  )

  return (
    <>
      <Toaster />
      <Router>
        <div className="min-h-screen bg-gray-50 pt-16">
          <Header user={user}/>
          <main>
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
              <Route path="/sell" element={<SellPage user={user} />} />
              <Route path="/about" element={<AboutUs user={user}/>} />
              <Route path="/contact" element={<ContactUs/>} />
              <Route path="/terms" element={<TermsOfService/>} />
              <Route path="/faq" element={<FAQ/>} />
              {
                user ?
                <Route path="/myAccount" element={<MyAccountPage user={user} setUser={setUser} />} />
                :
                <>
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/login" element={<LoginPage setUser={setUser} />} />
                </>
              }
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App