const Contact = () => (
  <section id="contact" className="p-10">
    <h3 className="text-2xl font-bold mb-4">Contact</h3>
    <form className="flex flex-col space-y-4 max-w-md">
      <input type="text" placeholder="Name" className="p-2 rounded bg-gray-800 text-white" />
      <input type="email" placeholder="Email" className="p-2 rounded bg-gray-800 text-white" />
      <textarea placeholder="Message" className="p-2 rounded bg-gray-800 text-white" rows="5"></textarea>
      <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded">Send Message</button>
    </form>
  </section>
);

export default Contact;
