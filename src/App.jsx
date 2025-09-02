import Education from './components/resume';
import Home from './components/home';
import SideBar from './components/sidebar';
import Services from './components/services';
import SkillsSlider from './components/SkillsSlider';
import Portfolio from './components/portfolio';
import Footer from './components/footer';

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto scroll-smooth">
        <section id="home">
          <Home />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="resume">
          <Education />
        </section>

        <section id="Skills">
          <SkillsSlider />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
