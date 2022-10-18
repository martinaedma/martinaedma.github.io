import type { NextPage } from "next";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { MainContent } from "../src/components/MainContent";
import { Menu } from "../src/components/Menu";

const Home: NextPage = () => {
  return (
    <div className="app-container">
      <Menu />
      <div className="content-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
