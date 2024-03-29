import { useEffect, useState } from "react";
import "./App.css";
import Aos from "aos";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes, Outlet } from "react-router-dom";


function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-0">
      <Header />
      <main className="mt-8 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
