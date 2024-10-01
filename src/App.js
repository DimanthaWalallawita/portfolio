
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/index';
import Contact from './Pages/contact';
import About from './Pages/about';
import Admin from './Pages/Admin/login';
import CookieConsent from 'react-cookie-consent';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/Admin" element={<Admin/>}/>
        </Routes>
        <CookieConsent
          location='bottom'
          style={{ backgroundColor: '#292929', textAlign: 'start'}}
          buttonStyle={{ backgroundColor: '#fd2', fontSize: '15px', borderRadius: '5px', }}
          expires={365}
        >
          By continuing to use this website, you agree to our <a href="/terms" style={{ color: '#fd2' }}>Terms and Conditions</a> and <a href="/privacy" style={{ color: '#fd2' }}>Privacy Policy</a>.<br></br>
          <span style={{ marginLeft: '0' }}>I use cookies to enhance your experience and improve our services.</span>
        </CookieConsent>
    </BrowserRouter>
  )
}

export default App