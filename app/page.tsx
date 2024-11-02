import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./main/page";
import About from "./components/about";
import Mission from "./components/mission";
import OurProject from "./components/proj";
import ContactUs from "./components/contact";

export default function Home() {
  return (
    <div>
      
      <Main/>
      <About/>
      <Mission/>
      <OurProject/>
      <ContactUs/>

    </div>
  );
}
