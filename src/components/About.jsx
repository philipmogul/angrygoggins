import Navbar from "./Navbar";     

function About() {
  return (
    <div className="about">
      <Navbar />
      <h1>About This App</h1>
      <p>This app is designed to motivate you with a touch of humor and a bit of anger!</p>
      <p>It uses React to provide a dynamic user experience.</p>
      <p>Enjoy your journey to motivation!</p>
    </div>
  );
}

export default About;