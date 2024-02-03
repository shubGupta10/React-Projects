import NavbarSection from "./Components/NavbarSection.jsx";
import HeroSection from "./Components/HeroSection.jsx";

function App(){
    return (
        <div  >
            <NavbarSection name="My name is React" age={11}  />
            <NavbarSection name="My name is React" age={11}  />
            <HeroSection/>
            <HeroSection/>
        </div>
    )
}

export default App