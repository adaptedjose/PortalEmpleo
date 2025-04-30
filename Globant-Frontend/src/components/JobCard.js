import React from "react";

function JobCard({ job }) {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 min-h-[400px] max-h-[400px] flex flex-col">
      <div className="flex flex-col flex-1 space-y-4">
        {/* Encabezado */}
        <div className="space-y-2">
          <h4 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 font-poppins line-clamp-2">
            {job.titulo}
          </h4>
          <div className="flex items-center text-gray-600 text-sm">
            <svg
              className="h-4 w-4 mr-1 text-blue-500"
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
            <p>
              Empresa ID: <span className="font-medium text-gray-700">{job.id_empresa}</span> -{" "}
              {job.ubicacion}
            </p>
          </div>
        </div>

        {/* Detalles */}
        <div className="flex-1 space-y-2">
          <p className="text-gray-800 font-semibold text-base font-inter">
            {job.salario !== "0.00" ? `$${job.salario}` : "Salario no especificado"}
          </p>
          <p className="text-gray-500 text-sm font-inter">
            <span className="font-medium">Publicado:</span>{" "}
            {new Date(job.fecha_publicacion).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-gray-700 text-base leading-relaxed line-clamp-3 font-inter">
            {job.descripcion}
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-sm font-inter flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-blue-500"
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
              <strong className="text-gray-800">Área:</strong>{" "}
              {job.area || "No especificada"}
            </p>
            <p className="text-gray-600 text-sm font-inter flex items-center">
              <svg
                className="h-4 w-4 mr-1 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <strong className="text-gray-800">Tipo de Empleo:</strong> {job.tipo_empleo}
            </p>
          </div>
        </div>
      </div>

      {/* Botón */}
      <div className="flex justify-end mt-4">
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-poppins">
          Ver Vacante
        </button>
      </div>
    </div>
  );
}

export default JobCard;