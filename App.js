import React from "react";
import Header from "./components/Header/Header";
import TopContainer from "./components/TopContainer/TopContainer";
import TopContent from "./components/TopContent/TopContent";
import SkillContain from "./components/SkillContain/SkillContain";
import Certificate from "./components/Certificate/Certificate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
    <Header />
    
    <TopContent />
    <TopContainer />
    <SkillContain/>
    <Certificate/>
    <Contact />
    <Footer />
    
    </div>
  )
}

export default App