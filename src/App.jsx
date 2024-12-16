import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FractionalCxoPage from "./pages/FractionalCxoPage"
import FractionalCxoPage2 from "./pages/FractionalCxoPage2"
import FractionalCxoPage3 from "./pages/FractionalCxoPage3"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/about"
              element={<AboutPage />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="/fractionalCxO"
              element={<FractionalCxoPage />}
            />
            <Route
              path="/fractionalCxO2"
              element={<FractionalCxoPage2 />}
            />
            <Route
              path="/fractionalCxO3"
              element={<FractionalCxoPage3 />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
