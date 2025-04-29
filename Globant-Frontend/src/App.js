import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JobListings from "./components/JobListings";

// Páginas placeholder (puedes reemplazarlas con componentes reales más adelante)
const ResumePage = () => <div className="container mx-auto py-8 text-center text-2xl">Resume Page</div>;
const ContactPage = () => <div className="container mx-auto py-8 text-center text-2xl">Contact Us Page</div>;
const LoginPage = () => <div className="container mx-auto py-8 text-center text-2xl">Login Page</div>;

function App() {
  // Estado para la ciudad seleccionada
  const [selectedCity, setSelectedCity] = useState("");
  // Estado para la lista completa de empleos y los filtrados
  const [jobs, setJobs] = useState([]); // Podrías inicializarlo con datos estáticos o desde una API
  const [filteredJobs, setFilteredJobs] = useState([]);

  return (
    <Router>
      <div className="App min-h-screen bg-gray-100">
        {/* Header siempre visible */}
        <Header />

        {/* Rutas */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection
                  setFilteredJobs={setFilteredJobs}
                  jobs={jobs}
                  setSelectedCity={setSelectedCity}
                />
                <JobListings selectedCity={selectedCity} filteredJobs={filteredJobs} />
              </>
            }
          />
          <Route
            path="/jobs"
            element={<JobListings selectedCity={selectedCity} filteredJobs={filteredJobs} />}
          />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/jobs"
            element={<JobListings selectedCity={selectedCity} />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;