import React from 'react';

export default function CV() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Kevin Thiry</h1>
        <p className="text-xl text-gray-600">Back-End Engineer | Robotics & Game Dev</p>
        <p className="mt-2 text-blue-600 underline">
          <a href="https://github.com/Kevin-THIRY/WarOfTime" target="_blank">GitHub - WarOfTime</a>
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Languages: Python, C++, C#, JavaScript, ROS, Matlab</li>
          <li>Back-end: REST APIs, SQL Server, data processing</li>
          <li>Robotics: modeling, control, 3D vision, AI/ML</li>
          <li>Tools: LabView, InnoSetup, VBA, JIRA/Confluence</li>
          <li>Game Dev: custom engine, gameplay, enemy AI, rendering</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>

        <div>
          <h3 className="text-xl font-bold">Development Engineer – D.R.A Technologies (2024 – present)</h3>
          <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
            <li>Custom app development: control, acquisition, security, updates</li>
            <li>Tech: Python, C#, LabView, InnoSetup, SQL Server</li>
            <li>Support & new features for Actemium: ticketing, patches, dev</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mt-4">Data Scientist – Volvo Trucks (2023)</h3>
          <ul className="list-disc list-inside ml-4 mt-1 text-sm">
            <li>Predictive maintenance for leak test stations</li>
            <li>Stack: Python, Java, ML, Thingworks</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mt-4">Robotics Engineer – Volvo Trucks (2022 – 2023)</h3>
          <ul className="list-disc list-inside ml-4 mt-1 text-sm">
            <li>Robotic cell for engine quality control</li>
            <li>Trajectory, vision, defect detection, cobot integration</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>Master’s degree in Computer Engineering – CPE Lyon (2022)<br />Specialized in Service Robotics</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Languages</h2>
        <p>English: C1 / German: B1</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Soft Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Passionate, curious, autonomous</li>
          <li>Strong project management & tech communication</li>
          <li>Built a PC game in duo (see GitHub)</li>
        </ul>
      </section>
    </div>
  );
}
