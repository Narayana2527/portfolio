import Aboutme from "./components/AboutMe";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Aboutme />
      <Services />
      <Contact />
    </div>
  );
}
