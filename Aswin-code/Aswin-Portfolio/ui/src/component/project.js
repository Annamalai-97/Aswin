const Projects = () => (
  <section id="projects" className="p-10 bg-gray-800">
    <h3 className="text-2xl font-bold mb-6">Projects</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-lg">Project One</h4>
        <p className="text-sm">
          <b>🩺 Doctor Examination App:</b><br/>
          &nbsp;&nbsp;Full Stack Web Application Designed and developed a responsive and
          user-friendly interface using HTML, CSS, and Bootstrap, ensuring
          seamless access across desktops and mobile devices. Built dynamic
          components using React.js, enabling smooth navigation and enhanced
          interactivity for patients and doctors. Utilized Redux for centralized
          state management, streamlining data flow between patient profiles,
          appointments, prescriptions, and reports. Integrated RabbitMQ to
          facilitate asynchronous communication between microservices, ensuring
          reliable message delivery for notifications, appointment updates, and
          prescription generation. Wrote clean and modular JavaScript code to
          handle real-time user interactions, form validations, and dynamic data
          rendering for examination records.
        </p>
      </div>
      <div className="p-4 bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-lg">Project Two</h4>
        <p className="text-sm">Description of project two...</p>
      </div>
    </div>
  </section>
);

export default Projects;
