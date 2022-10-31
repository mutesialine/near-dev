
import Certificate from "../components/Homepage/Certificate";
import Complete from "../components/Homepage/Complete";
import Development from "../components/Homepage/Development";
import Hero from "../components/Homepage/Hero";
import Wallet from "../components/Homepage/Wallet";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Home(){
  return (
    <div className=" min-w-small lg:max-w-large mx-auto">
      <Header />
      <Hero />
      <Wallet />
      <Complete />
      <Certificate/>
      <Development/>
      <Footer/>
    </div>
  );
}

