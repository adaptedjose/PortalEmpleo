import React from "react";

function JobCard({ job }) {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Contenido principal */}
        <div className="flex-1 space-y-3">
          <h4 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            {job.title}
          </h4>
          <p className="text-gray-600 text-sm">
            {job.company ? (
              <span className="font-medium text-gray-700">{job.company}</span>
            ) : (
              "Company not specified"
            )}{" "}
            - {job.location}
          </p>
          <p className="text-gray-800 font-semibold text-base">
            {job.salary ? job.salary : "Salary not specified"}
          </p>
          <p className="text-gray-500 text-sm">
            <span className="font-medium">Posted:</span>{" "}
            {job.datePosted || "Date not available"}
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            {job.description}
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-sm">
              <strong className="text-gray-800">Area:</strong>{" "}
              {job.area || "Not specified"}
            </p>
            <p className="text-gray-600 text-sm">
              <strong className="text-gray-800">Technologies:</strong>{" "}
              {job.technologies || "Not specified"}
            </p>
          </div>
        </div>

        {/* Botón */}
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 self-end sm:self-center">
          Go to Vacancy
        </button>
      </div>
    </div>
  );
}

export default JobCard;