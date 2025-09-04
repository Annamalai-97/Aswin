const Home = () => (
  <section id="home" className="flex flex-col items-center justify-center text-center py-20">
    <img src="/profile.png" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
    <h2 className="text-3xl font-semibold">Hi, I'm Aswin Kanagaraj</h2>
    <p className="text-teal-400 text-lg mt-2">Full Stack Developer</p>
    <a href="#projects" className="mt-6 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
      View Projects
    </a>
  </section>
);

export default Home;
