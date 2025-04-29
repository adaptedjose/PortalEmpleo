-- inserciones

use panel_empleo;

-- Insertar algunas empresas
INSERT INTO Empresa (nombre, ubicacion) VALUES
('Globant', 'BOG'),
('Microsoft', 'MDE'),
('Google', 'Remote');

-- Insertar reclutadores
INSERT INTO Reclutador (nombre, correo) VALUES
('Juan Pérez', 'juan@empresa1.com'),
('Ana Gómez', 'ana@empresa2.com'),
('Carlos Ruiz', 'carlos@empresa3.com');

-- Insertar habilidades
INSERT INTO Habilidad (nombre) VALUES
('Java'), ('Spring'), ('PostgreSQL'),
('React'), ('HTML'), ('CSS'), ('JavaScript'),
('Node.js'), ('Express'), ('MongoDB'),
('Agile'), ('JIRA'), ('UX/UI Principles'),
('Python'), ('R'), ('SQL'), ('Machine Learning'),
('AWS'), ('Docker'), ('Kubernetes'),
('Figma'), ('Adobe XD'), ('Sketch'),
('Selenium'), ('JUnit'), ('TestNG'),
('Business Analysis'), ('Excel'), ('Business Process Modeling'),
('Azure'), ('Google Cloud'),
('Cybersecurity'), ('Firewalls'), ('Penetration Testing'),
('Markdown'), ('Technical Writing'),
('C#'), ('Scrum'), ('VPN'), ('Network Security'), ('Cisco');

-- Insertar ofertas de trabajo
INSERT INTO OfertaTrabajo (titulo, descripcion, id_empresa, salario, tipo_empleo, id_reclutador, ubicacion, area, fecha_publicacion) VALUES
('Software Engineer', 'Develop and maintain software applications.', 1, 0, 'Tiempo Completo', 1, 'BOG', 'Engineering', '2024-10-01'),
('Front-End Developer', 'Build user interfaces and improve user experience.', 2, 0, 'Tiempo Completo', 1, 'MDE', 'Engineering', '2024-10-02'),
('Backend Developer', 'Create server-side applications and APIs.', 3, 0, 'Remoto', 2, 'Remote', 'Engineering', '2024-10-03'),
('Product Manager', 'Lead product development and manage product lifecycle.', 1, 0, 'Tiempo Completo', 2, 'BOG', 'Business', '2024-10-04'),
('Data Scientist', 'Analyze data and provide actionable insights.', 2, 0, 'Remoto', 3, 'Remote', 'Engineering', '2024-10-05'),
('DevOps Engineer', 'Automate and streamline operations and processes.', 3, 0, 'Tiempo Completo', 1, 'MDE', 'Engineering', '2024-10-06'),
('UX/UI Designer', 'Design user-friendly interfaces and experiences.', 1, 0, 'Tiempo Completo', 2, 'BOG', 'Staff', '2024-10-07'),
('Quality Assurance Engineer', 'Ensure software quality through testing and debugging.', 2, 0, 'Remoto', 3, 'Remote', 'Engineering', '2024-10-08'),
('Systems Analyst', 'Analyze and improve IT systems and processes.', 3, 0, 'Tiempo Completo', 1, 'MDE', 'Business', '2024-10-09'),
('Mobile App Developer', 'Develop applications for mobile platforms.', 1, 0, 'Tiempo Completo', 2, 'BOG', 'Engineering', '2024-10-10'),
('IT Support Specialist', 'Provide technical support and troubleshooting assistance.', 2, 0, 'Remoto', 3, 'Remote', 'Staff', '2024-10-11'),
('Business Analyst', 'Gather requirements and analyze business needs.', 3, 0, 'Tiempo Completo', 1, 'MDE', 'Business', '2024-10-12'),
('Cloud Architect', 'Design and manage cloud infrastructure and solutions.', 1, 0, 'Remoto', 2, 'Remote', 'Engineering', '2024-10-13'),
('Security Analyst', 'Protect systems and networks from security breaches.', 2, 0, 'Tiempo Completo', 3, 'BOG', 'Engineering', '2024-10-14'),
('Technical Writer', 'Create documentation and user manuals for software.', 3, 0, 'Remoto', 1, 'Remote', 'Staff', '2024-10-15'),
('Software Quality Engineer', 'Design and implement quality assurance processes.', 1, 0, 'Tiempo Completo', 2, 'MDE', 'Engineering', '2025-01-05'),
('Network Engineer', 'Manage and maintain network infrastructure.', 2, 0, 'Tiempo Completo', 3, 'BOG', 'Engineering', '2025-01-06'),
('Scrum Master', 'Facilitate Agile development processes and teams.', 3, 0, 'Remoto', 1, 'Remote', 'Business', '2025-01-07');

-- Oferta 1: Software Engineer
INSERT INTO Oferta_Habilidad (id_oferta, id_habilidad) VALUES
(1, 1), -- Java
(1, 2), -- Spring
(1, 3); -- PostgreSQL

-- Oferta 2: Front-End Developer
INSERT INTO Oferta_Habilidad (id_oferta, id_habilidad) VALUES
(2, 4), -- React
(2, 5), -- HTML
(2, 6), -- CSS
(2, 7); -- JavaScript

-- Oferta 3: Backend Developer
INSERT INTO Oferta_Habilidad (id_oferta, id_habilidad) VALUES
(3, 8), -- Node.js
(3, 9), -- Express
(3, 10); -- MongoDB
