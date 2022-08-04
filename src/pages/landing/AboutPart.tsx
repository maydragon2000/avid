import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import Container from "components/Container";
import aboutImg from "assets/image/ppl-phone-img.png";
import supportImg from "assets/image/service-img.png";

const AboutPart = () => {
  return (
    <div className="bg-blue-100 relative" id="about">
      <div className="text-center">
        <h1 className="text-blue-500 font-bold md:text-4xl text-2xl leading-6">
                Success stories
        </h1>
      </div>
      <Container>
        <ScrollAnimation animateOnce={false} animateIn="animate__animated animate__fadeInLeft" animatePreScroll={true}>
          <div className="w-full pt-6">
            <div className="text-center">
            
            {/* <p className="mb-14 py-1 text-left border-l-4 border-blue-500 pl-8 text-base text-gray-600 font-medium leading-8">
              Avid Prepaid Visa Debit card allows you to get your federal benefits
              up to 6 days early and all other direct deposits up to 2 days early.
              <sup>1</sup> It's digital banking at its best! With no overdraft
              fees or minimum balance requirement,<sup>2</sup> you always have
              control over your account. Getting started is easy, just enter your
              mobile number and click "Let's Get Started" to sign up today!
            </p> */}
            </div>
          </div>
        </ScrollAnimation>
      </Container>
      <Container>
      <ScrollAnimation animateOnce={false} animateIn="animate__animated animate__fadeInRight">
          <div className="landing-about grid grid-cols-1 md:grid-cols-2 shadow-xl bg-white rounded-3xl overflow-hidden">
            <div className="relative">
              <div className="w-full h-full p-8">
                <img
                  src={aboutImg}
                  style={{ filter: "grayscale(25%) brightness(110%)" }}
                  className="relative w-full h-full inline-block object-cover rounded-2xl"
                  alt="aboutImg"
                />
              </div>
            </div>
            <div className="py-8 pt-0 md:pt-8 pl-8 md:pl-0 pr-10">
              
              <h3 className="text-yellow-600 mt-2 mb-5 font-medium md:text-3xl text-2xl">
                DHL Delivered a Security Solution 3x Faster with High-Quality Talent
              </h3>
              <p className="text-base text-gray-600 leading-8 mb-5 m-0">
                DHL's APEC commercial team needed a bench of web development specialists who can design and build data solutions to optimize their slow warehouse operation process urgently. Instead of working with a traditional agency that is slow and averaged a 40% upcharge, the company saved money by sourcing talent skilled in C/C++/C#, Java, JavaScript and React JS directly through Works. DHL successfully completed the project 3x faster as the onboarding process took less than 48 hours as compared to 2-3 weeks before.
              </p>
              {/* <a href="#faq" className="btn btn-large bg-blue-500 text-white">
                Learn More
              </a> */}
            </div>
          </div>
        </ScrollAnimation>
        
      <ScrollAnimation animateOnce={false} animateIn="animate__animated animate__fadeInLeft">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden mt-[10px]">
            <div className="relative">
              <div className="w-full h-full max-h-[600px] p-8 pl-5 md:pl-8 lg:pl-0">
                <img
                  src={supportImg}
                  style={{ filter: "grayscale(25%) brightness(110%)" }}
                  className="relative w-full h-full inline-block object-cover rounded-2xl ml-4"
                  alt="aboutImg"
                />
              </div>
            </div>
            <div className="py-5 sm:py-8 pt-0 md:pt-8 pl-5 sm:pl-8 md:pl-0 pr-5 sm:pr-10 md:pr-0">
              <h3 className="text-red-600 mt-2 mb-5 font-medium md:text-3xl text-2xl">
                Panasonic Lowers Hiring Risk with Works' Top 3% Talent
              </h3>
              <p className="text-base text-gray-600 leading-8 mb-5 m-0">
                Panasonic's risk management team urgently needed to hire Python developers proficient in data science and machine learning to help them improve their multidimensional risk models. The uneven talent pool of traditional institutions increases Panasonic's hiring risks. With rigorous testing and vetting, Works only accepted the top 3% of talents. At the same time, Works' experts and artificial intelligence technology helped Panasonic recruit professional data scientists from around the world within 48 hours, reducing the risk of a wrong hire and improving Panasonic's productivity.
              </p>
              <a href="#faq" className="btn btn-large bg-blue-500 text-white">
                Learn More
              </a>
            </div>
          </div>
        </Container>
      </ScrollAnimation>
      </Container>
      <div className="w-full block bg-white mt-6 md:mt-16">
        <div
          className="w-full h-1 relative bg-blue-100 -mb-[2px]"
        >

        </div>
        <svg
          className="w-full relative"
          style={{ transform: "rotate(180deg)", transition: "0.3s" }}
          viewBox="0 0 1440 170"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgb(219 234 254 / 1)" offset="0%"></stop>
              <stop stopColor="rgb(219 234 254 / 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-2)"
            d="M0,0L48,5.7C96,11,192,23,288,25.5C384,28,480,23,576,19.8C672,17,768,17,864,39.7C960,62,1056,108,1152,110.5C1248,113,1344,74,1440,56.7C1536,40,1632,45,1728,53.8C1824,62,1920,74,2016,65.2C2112,57,2208,28,2304,28.3C2400,28,2496,57,2592,70.8C2688,85,2784,85,2880,79.3C2976,74,3072,62,3168,59.5C3264,57,3360,62,3456,53.8C3552,45,3648,23,3744,11.3C3840,0,3936,0,4032,11.3C4128,23,4224,45,4320,51C4416,57,4512,45,4608,36.8C4704,28,4800,23,4896,31.2C4992,40,5088,62,5184,76.5C5280,91,5376,96,5472,99.2C5568,102,5664,102,5760,110.5C5856,119,5952,136,6048,130.3C6144,125,6240,96,6336,87.8C6432,79,6528,91,6624,79.3C6720,68,6816,34,6864,17L6912,0L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutPart;
