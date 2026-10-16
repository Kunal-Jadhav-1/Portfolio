import NavBar from "./components/NavBar";
import Self from "./components/Self";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="site-frame text-neutral-300 antialiased selection:bg-cyan-700 selection:text-neutral-200">
      <div className="site-shell">
        <NavBar />
        <main>
          <Self />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
