import React from "react";
import CourseHero from "./components/ui/hero-contact/hero-contact";
import CompanyInfo from "./components/ui/info/info";
import Highlight from "./components/ui/highlight/highlight";
import Results from "./components/ui/results/results";
import CourseList from "./components/courses/courses";
import LocationPage from "./components/ui/locations/locations";
import Footer from "./components/ui/footer/footer";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <CourseHero />
      <CompanyInfo />
      <Highlight />
      <Results />
      <CourseHero />
      <CourseList />
      <LocationPage />
    </>
  );
};

export default HomePage;
