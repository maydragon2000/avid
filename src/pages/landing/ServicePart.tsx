import React from "react";

import serviceImg1 from "assets/image/phone-4x.png";
import serviceImg2 from "assets/image/customerservice-4x.png";
import serviceImg3 from "assets/image/security-4x.png";
import serviceImg4 from "assets/image/credit-4x.png";
import Container from "components/Container";
import ScrollAnimation from 'react-animate-on-scroll';

const ServiceCard = (props: any) => {
  return (
    <div className="rounded-3xl w-full max-w-[395px] md:mb-5 py-8">
      <div className="relative">
        <div className="w-full flex items-center relative bg-blue-100 rounded-3xl h-44 mb-5">
          <img
            src={props.img}
            alt="Service"
            className="m-auto lg:object-scale-down py-4 px-8 h-full"
          />
        </div>
        <h1 className="mb-2 text-lg font-bold leading-2 -tracking-[1px] text-gray-800">
          {props.title}
        </h1>
        <div className="leading-7 text-base text-gray-600">
          {props.children}
        </div>
      </div>
    </div>
  );
};

const ServicePart = () => {
  return (
    <div className="relative bg-white">
    <ScrollAnimation animateOnce={true} animateIn="animate__animated animate__fadeInLeft">
      <Container>
        <div className="md:py-16 py-3 w-full m-auto md:px-[15px]">
          <div className="text-center" id="services">
            <p className="font-bold text-5xl">How to hire Developers through works</p>
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 mt-[42px] sm:gap-6 justify-center">
            <ServiceCard img={serviceImg2} title="Speak to Our Hiring Expert">
              <ul className="service-card-list list-disc pl-5">
                <li>introduce about yourself such as experience and skills</li>
                <li>answer technical questions</li>
                <li>discuss about budget and payment method</li>
              </ul>
            </ServiceCard>
            <ServiceCard
              img={serviceImg1}
              title="Work with the Hand-Picked Talent"
            >
              <ul className="service-card-list list-disc pl-5">
                <li>Within 48 hours, we will connect you to the most qualified talent perfectly fit for your project.</li>
              </ul>
            </ServiceCard>
            <ServiceCard img={serviceImg3} title="Work Quality, Guaranteed">
              <ul className="service-card-list list-disc pl-5">
                <li>if you are completely satisfied with their work quality, assuring you a 100% risk-free hiring.</li>
              </ul>
            </ServiceCard>
            <ServiceCard img={serviceImg4} title="Payment">
              <ul className="service-card-list list-disc pl-5">
                <li>
                  Work with your new team member and only pay 
                </li>
              </ul>
            </ServiceCard>
          </div>
        </div>
      </Container>
    </ScrollAnimation>
  </div>
  );
};

export default ServicePart;
