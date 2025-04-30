import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

function JobListings({ selectedCity: propSelectedCity, filteredJobs: propFilteredJobs }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(propSelectedCity || "");

  const locationMap = {
    BOG: "Bogotá, Bogotá D.C.",
    MDE: "Medellín, Antioquia",
    Remote: "Remote",
  };

  const cities = ["", "Bogotá, Bogotá D.C.", "Medellín, Antioquia", "Remote"];

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = "http://172.16.106.53:5000/jobs";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch job listings");
        }
        const data = await response.json();

        const normalizedData = data.map((job, index) => ({
          ...job,
          id: job.id || index,
          ubicacion: locationMap[job.ubicacion] || job.ubicacion || "Unknown",
        }));

        setJobs(normalizedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (!propFilteredJobs || propFilteredJobs.length === 0) {
      fetchJobs();
    } else {
      setJobs(propFilteredJobs);
      setLoading(false);
    }
  }, [propFilteredJobs]);

  useEffect(() => {
    setSelectedCity(propSelectedCity || "");
  }, [propSelectedCity]);

  const normalize = (text) =>
    text
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f,]/g, "");

  const filteredJobs = propFilteredJobs?.length > 0
    ? propFilteredJobs
    : selectedCity
      ? jobs.filter((job) => normalize(job.ubicacion) === normalize(selectedCity))
      : jobs;

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <svg
            className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
            />
          </svg>
          <p className="text-lg font-medium text-gray-600">Cargando vacantes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center p-6 bg-red-50 border border-red-200 rounded-lg shadow-md">
          <svg
            className="h-12 w-12 text-red-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-lg font-semibold text-red-600">Error: {error}</p>
          <p className="text-sm text-gray-600 mt-2">
            Por favor, intenta de nuevo o contacta al soporte.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Filtro por ciudad */}
      <div className="mb-8 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <label
            htmlFor="city-filter"
            className="block text-sm font-semibold text-gray-800 mb-3 transition-colors duration-200 group-hover:text-blue-600"
          >
            Filtrar por Ciudad
          </label>
          <div className="relative">
            <select
              id="city-filter"
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value)}
              className="appearance-none w-full bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 rounded-lg border border-gray-200 py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100"
            >
              {cities.map((city) => (
                <option key={city || "all"} value={city}>
                  {city || "Todas las ciudades"}
                </option>
              ))}
            </select>
            {/* Ícono de ubicación */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            {/* Ícono de dropdown */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
        {filteredJobs.length} Vacantes {selectedCity ? `en ${selectedCity}` : "para Ti"}
      </h3>

      {filteredJobs.length === 0 ? (
        <div className="flex justify-center items-center min-h-[30vh]">
          <div className="text-center p-8 bg-gray-50 rounded-xl shadow-sm border border-gray-200">
            <svg
              className="h-16 w-16 text-gray-400 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5v2m6-2v2M9 12h6m-3-7v14m-9 0h18"
              />
            </svg>
            <p className="text-lg font-medium text-gray-600">
              No se encontraron vacantes {selectedCity ? `en ${selectedCity}` : "en este momento"}.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Ajusta los filtros o regresa más tarde.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="transform transition-all hover:scale-[1.02] hover:shadow-lg"
            >
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobListings;