import HeroSection from "../pages/HeroSection/Herosection";
import Features from "../pages/Features/Features";
import About from "../pages/about/about";
import Services from "../pages/OurServices/Services";
//import Gallery from "../pages/Gallery/Gallery.jsx"
import TeamSection from "../pages/Teamsection/TeamSection";
import SplashScreen from "../component/splashscreen";


const Home = () => {
  return(
    <SplashScreen>
      <div>
      <HeroSection/>
       <Features/>
       <About/>
       <Services/>
       <TeamSection/>
    </div>
    </SplashScreen>
  );
};

export default Home;
   //<HeroSection/>
   //   <Features/>
     // <About/>
      //<Services/>
