import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shorten from "./components/Shorten/Shorten";
import Statistics from "./components/Statistics/Statistics";
import Footer from "./components/Footer/Footer";
import CTA from "./components/Footer/CTA";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <main style={{backgroundColor: "#F2F2F2", padding: "5px 0"}}>
        <Shorten/>
        <Statistics/>
      </main>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
