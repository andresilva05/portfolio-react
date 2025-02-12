import GlobalStyles from "./globalStyles";
import IntroSection from "./pages/IntroSection";
import AboutMe from "./pages/AboutMe";
import MainProjects from "./pages/MainProjects";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <IntroSection />
      <AboutMe />
      <MainProjects />
      <Footer />
    </>
  );
}
