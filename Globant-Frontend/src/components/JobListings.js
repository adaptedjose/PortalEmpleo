import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";

function JobListings({ selectedCity, filteredJobs: propFilteredJobs }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mapa para normalizar ubicaciones
  const locationMap = {
    BOG: "Bogotá, Bogotá D.C.",
    MDE: "Medellín, Antioquia",
    Remote: "Remote",
    // Agrega más mapeos según necesites (CAL para Cali, etc.)
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = "http://localhost:5000/jobs"; // Fetch inicial sin filtro
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch job listings");
        }
        const data = await response.json();

        // Normalizar datos
        const normalizedData = data.map((job, index) => ({
          ...job,
          id: job.id || index,
          location: locationMap[job.location] || job.location,
        }));

        setJobs(normalizedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    // Solo hacemos fetch si no hay filteredJobs desde props
    if (!propFilteredJobs || propFilteredJobs.length === 0) {
      fetchJobs();
    } else {
      setJobs(propFilteredJobs); // Usamos filteredJobs desde App.js
      setLoading(false);
    }
  }, [propFilteredJobs]); // Dependencia en propFilteredJobs

  // Usamos filteredJobs desde props si existe, o filtramos localmente como respaldo
  const filteredJobs = propFilteredJobs?.length > 0
    ? propFilteredJobs
    : selectedCity
      ? jobs.filter((job) =>
        job.location.toLowerCase().includes(selectedCity.toLowerCase())
      )
      : jobs;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <svg
            className="animate-spin h-10 w-10 text-gray-600 mx-auto mb-4"
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
          <p className="text-lg font-medium text-gray-600">Loading jobs...</p>
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
          <p className="text-lg font-semibold text-red-600">
            Error: {error}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Please try again later or contact support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
        {filteredJobs.length} Vacancies {selectedCity ? `in ${selectedCity}` : "for You"}
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
              No jobs found {selectedCity ? `in ${selectedCity}` : "at the moment"}.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Try adjusting your filters or check back later!
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="transform transition-all hover:scale-105 hover:shadow-lg"
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