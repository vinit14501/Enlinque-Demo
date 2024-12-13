import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import AboutPage2 from "./pages/AboutPage2"
import ContactPage from "./pages/ContactPage"
import ContactPage2 from "./pages/ContactPage2"

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
              path="/about2"
              element={<AboutPage2 />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="/contact2"
              element={<ContactPage2 />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
