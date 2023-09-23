import mainLogo from "../assets/header.png";
import Navbar from "./Navbar";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `URL(${mainLogo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "500px",
  };
  return (
    <>
      {/* Navbar */}
      <section className="relative" style={backgroundImageStyle}>
        <Navbar />
      </section>
    </>
  );
};

export default Hero;
