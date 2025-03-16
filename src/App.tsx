import {BrowserRouter as Router, Routes, Route, HashRouter} from "react-router-dom";

import './App.css'
import {Navbar} from "./Navbar.tsx";
import {Home} from "./Home.tsx";
import {CV} from "./CV.tsx";
import {LanguageProvider} from "./LanguageProvider.tsx";

function App() {


  return (
      <LanguageProvider>
          <HashRouter basename="/website/">
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
              <Route path="/CV" element={<CV />} />
          </Routes>
      </HashRouter>
      </LanguageProvider>
  )
}

export default App
