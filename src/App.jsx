import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";

const App = () => {
  return (
    <div>
      <TopBanner />
      <Navbar />
      <main className="min-h-[200vh] bg-red-400">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
