import React from "react";
import "./App.css";
import Title from "./Componets/Title/Title";
import Navbar from "./Componets/navbar/navbar";
import Visitecars from "./Componets/visite cards/visitecard";
import Link from "./Componets/links/Link";
import Information from "./Componets/Information/Information";
import Country from "./Componets/country-cards/country";
import Footer from "./Componets/footer/footer"
const arr = [
  {
    log: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    para:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
    isLower: true
  },
  {
    log: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    para: "visit us every month",
    isLower: false
  },
  {
    log: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    para: "booked last month",
    isLower: true
  },
  {
    log: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    para: "trust in our solutions",
    isLower: false
  }
];

const data = [
  {
    paragraph:
      "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
    title: "For patients",
    description:
      "Find a doctor, book a visit and solve any health-related doubt",
    image: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    select: true,
    color: "#00b39b"
  },
  {
    paragraph:
      "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
    title: "For doctors",
    description: "Save time managing visits and cut no-shows by half",
    image: "//www.docplanner.com/img/screen-saas@2x.png",
    select: false,
    color: "#3D83DF"
  }
];

const tab = [
  {
    image: "https://www.docplanner.com/images/warsaw.png",
    title: "warsaw",
    bouton: "see openings"
  },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    title: "barcelona",
    bouton: "see openings"
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    title: "istanbul",
    bouton: "see openings"
  },
  {
    image: "https://www.docplanner.com/images/rome.png",
    title: "rome",
    bouton: "see openings"
  },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    title: "mexico city",
    bouton: "see openings"
  },
  {
    image: "https://www.docplanner.com/images/curitiba.png",
    title: "curitiba",
    bouton: "see openings"
  }
];
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contents">
        <Title />
        <Visitecars data={data} />
      </div>
      <Link />
      <Information data={arr} />
      
        <Country data={tab} />
       
        <Footer />
      
    </div>
  );
}

export default App;
