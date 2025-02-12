import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Automation } from "./components/Main/ui/Automation/Automation";
import Reviews from "./components/Main/ui/Reviews/Reviews";
import { WhyUs } from "./components/Main/ui/WhyUs/WhyUs";

function App() {
  return (
    <>
      <div className="banner">
        <Header />
        <Main />
      </div>
      <div className="sections">
        <Automation />
      </div>
      <WhyUs />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
