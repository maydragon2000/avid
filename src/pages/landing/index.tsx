import React from 'react';
import ScrollTop from "components/ScrollTop";
import AboutPart from "./AboutPart";
import BenefitPart from "./BenefitPart";
import ContactInfoPart from "./ContactInfoPart";
import FooterPart from "./FooterPart";
import GetStartedPart from "./GetStartedPart";

import IntroPart from "./IntroPart";
import ServicePart from "./ServicePart";

const LandingPage = () => {
  
  return (
    <div>
      <IntroPart />
      <AboutPart />
      <ServicePart />
      <BenefitPart />
      <GetStartedPart />
      <ContactInfoPart />
      <FooterPart />
      <ScrollTop />
    </div>
  );
};

export default LandingPage;
