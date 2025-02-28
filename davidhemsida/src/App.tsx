import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css'
import {Navbar} from "./Navbar.tsx";
import {Home} from "./Home.tsx";
import {CV} from "./CV.tsx";
import {LanguageProvider} from "./LanguageProvider.tsx";

function App() {


  return (
      <LanguageProvider>
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
              <Route path="/CV" element={<CV />} />
          </Routes>
      </Router>
      </LanguageProvider>
  )
}

export default App
