import React, { useState, useEffect } from "react";
import heroImage from "../tools/images/HeroSection.jpg";
import ciudadesColombia from "../tools/data/ciudadesColombia.json";

function HeroSection({ setFilteredJobs, jobs, setSelectedCity }) {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredCount, setFilteredCount] = useState(jobs?.length || 0);

  useEffect(() => {
    if (location.length < 3) {
      setSuggestions([]);
      return;
    }

    const filteredCities = ciudadesColombia
      .filter((city) =>
        city.city.toLowerCase().includes(location.toLowerCase())
      )
      .slice(0, 5)
      .map((city) => `${city.city}, ${city.region}`);

    setSuggestions(filteredCities);
  }, [location]);

  const handleSelectCity = (city) => {
    setLocation(city);
    setSelectedCity(city); // Actualiza el estado en App.js
    setSuggestions([]);
  };

  const handleFilter = () => {
    if (!location) return; // Usamos 'location' ya que 'selectedCity' ahora está en App.js

    if (!Array.isArray(jobs)) {
      console.error("jobs is not an array");
      return;
    }

    const filtered = jobs.filter((job) =>
      job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
    setFilteredCount(filtered.length);
  };

  return (
    <section className="relative h-[500px] flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-xl mb-12 mt-16 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
          Find Your Dream Job!
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative max-w-3xl mx-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search by location"
              className="px-6 py-3 w-full rounded-xl text-gray-900 bg-white bg-opacity-90 shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-500 transition-all duration-200"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              aria-label="Location"
            />
            {suggestions.length > 0 && (
              <ul className="absolute bg-white shadow-lg rounded-xl w-full mt-2 z-50 overflow-hidden border border-gray-200 max-h-36 overflow-y-auto">
                {suggestions.map((city, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 hover:text-white cursor-pointer transition-all duration-200 text-sm font-medium"
                    onClick={() => handleSelectCity(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <input
            type="text"
            placeholder="Search by position"
            className="px-6 py-3 w-full sm:w-64 rounded-xl text-gray-900 bg-white bg-opacity-90 shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-500 transition-all duration-200"
            aria-label="Position"
          />
        </div>
      </div>

      {/* Contador y botón */}
      <div className="relative z-10 text-center mt-16">
        <p className="text-xl sm:text-2xl font-semibold text-white drop-shadow-md">
          {filteredCount} Vacancies Waiting for You
        </p>
        <button
          className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          onClick={handleFilter}
        >
          Apply Filters
        </button>
      </div>
    </section>
  );
}

export default HeroSection;