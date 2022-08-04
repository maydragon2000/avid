import React from "react";

import benefitImg from "assets/image/benefit.png";
import ScrollAnimation from 'react-animate-on-scroll';

const BenefitPart = () => {
  return (
    <div className="landing-benefits" id="service">
      <div
        className="w-full relative bg-white"
      >
        <svg style={{ 'transform': 'rotate(0deg)', 'transition': '0.3s' }} viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-4" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(59, 130, 246, 1)" offset="0%"></stop><stop stopColor="#2563EB" offset="100%"></stop></linearGradient></defs><path style={{ 'transform': 'translate(0, 0px)', 'opacity': '1' }} fill="url(#sw-gradient-4)" d="M0,0L60,4.7C120,9,240,19,360,21C480,23,600,19,720,16.3C840,14,960,14,1080,32.7C1200,51,1320,89,1440,91C1560,93,1680,61,1800,46.7C1920,33,2040,37,2160,44.3C2280,51,2400,61,2520,53.7C2640,47,2760,23,2880,23.3C3000,23,3120,47,3240,58.3C3360,70,3480,70,3600,65.3C3720,61,3840,51,3960,49C4080,47,4200,51,4320,44.3C4440,37,4560,19,4680,9.3C4800,0,4920,0,5040,9.3C5160,19,5280,37,5400,42C5520,47,5640,37,5760,30.3C5880,23,6000,19,6120,25.7C6240,33,6360,51,6480,63C6600,75,6720,79,6840,81.7C6960,84,7080,84,7200,91C7320,98,7440,112,7560,107.3C7680,103,7800,79,7920,72.3C8040,65,8160,75,8280,65.3C8400,56,8520,28,8580,14L8640,0L8640,140L8580,140C8520,140,8400,140,8280,140C8160,140,8040,140,7920,140C7800,140,7680,140,7560,140C7440,140,7320,140,7200,140C7080,140,6960,140,6840,140C6720,140,6600,140,6480,140C6360,140,6240,140,6120,140C6000,140,5880,140,5760,140C5640,140,5520,140,5400,140C5280,140,5160,140,5040,140C4920,140,4800,140,4680,140C4560,140,4440,140,4320,140C4200,140,4080,140,3960,140C3840,140,3720,140,3600,140C3480,140,3360,140,3240,140C3120,140,3000,140,2880,140C2760,140,2640,140,2520,140C2400,140,2280,140,2160,140C2040,140,1920,140,1800,140C1680,140,1560,140,1440,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"></path></svg>
      </div>
      <ScrollAnimation animateOnce={true} animateIn="animate__animated animate__fadeInRight">
        <div
          className="mb-6"
        >
          <div
            className="constrain grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-3xl overflow-hidden"
          >
            <div className="relative p-8 md:order-2">
              <div className="w-full relative h-full bg-blue-100 rounded-2xl overflow-hidden pb-32 sm:pb-0">
                <img
                  src={benefitImg}
                  alt="benefitImg"
                  className="p-1 pl-4 sm:p-6 sm:pl-10 absolute m-auto top-0 left-0 right-0 bottom-0 w-full"
                />
                <img
                  src={benefitImg}
                  alt="benefitImg"
                  className="p-6 pl-10 relative m-auto opacity-0 w-full"
                />
                <p className="text-xs w-full px-5 absolute bottom-5">
                  December 2021 SSI and VA payments were made available to recipients
                  on December 1st, 2021 by most banks and Direct Express<sup>®</sup>
                </p>
              </div>
            </div>
            <div className="w-full bg-white py-8 md:pt-8 pl-8 pr-8 md:pr-0 md:order-1">
              <h1 className="text-blue-500 pt-2 font-bold md:text-4xl text-2xl leading-6">
                Your Federal Benefits Made Easy
              </h1>
              <h3
                className="text-gray-600 mt-2 mb-5 md:text-2xl text-xl"
              >
                Get paid fast with Early Access
              </h3>
              <ul className="benefit-card-list pl-5 pb-8 text-base list-disc leading-8">
                <li>
                  This company processes the deposits as soon as the Government
                  sends notice that it intends on making a payment to the customer.
                  This occurs several days before the actual payment date. For
                  example, SSI and VA Payments that are paid on the first of each
                  month are credited to their account up to 6 days
                  early every month and all other payments are credited up to 2 days
                  early.<sup>1</sup>
                </li>
                <li>
                  Federal benefits up to 6 days early and payroll and other deposits
                  up to 2 days early<sup>1</sup>
                </li>
              </ul>
              <a
                href="#faq"
                className="btn btn-large inline-block bg-blue-500 text-white md:float-right"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <div
        className="w-full relative bg-white"
      >
        <div
          className="w-full h-1 relative bg-blue-500 -mb-[2px]"
        >

        </div>
        <svg style={{ 'transform': 'rotate(180deg)', 'transition': '0.3s' }} viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-5" x1="0" x2="0" y1="1" y2="0"><stop stopColor="rgba(59, 130, 246, 1)" offset="0%"></stop><stop stopColor="rgba(59, 130, 246, 1)" offset="100%"></stop></linearGradient></defs><path style={{ 'transform': 'translate(0, 0px)', 'opacity': '1' }} fill="url(#sw-gradient-5)" d="M0,0L60,4.7C120,9,240,19,360,21C480,23,600,19,720,16.3C840,14,960,14,1080,32.7C1200,51,1320,89,1440,91C1560,93,1680,61,1800,46.7C1920,33,2040,37,2160,44.3C2280,51,2400,61,2520,53.7C2640,47,2760,23,2880,23.3C3000,23,3120,47,3240,58.3C3360,70,3480,70,3600,65.3C3720,61,3840,51,3960,49C4080,47,4200,51,4320,44.3C4440,37,4560,19,4680,9.3C4800,0,4920,0,5040,9.3C5160,19,5280,37,5400,42C5520,47,5640,37,5760,30.3C5880,23,6000,19,6120,25.7C6240,33,6360,51,6480,63C6600,75,6720,79,6840,81.7C6960,84,7080,84,7200,91C7320,98,7440,112,7560,107.3C7680,103,7800,79,7920,72.3C8040,65,8160,75,8280,65.3C8400,56,8520,28,8580,14L8640,0L8640,140L8580,140C8520,140,8400,140,8280,140C8160,140,8040,140,7920,140C7800,140,7680,140,7560,140C7440,140,7320,140,7200,140C7080,140,6960,140,6840,140C6720,140,6600,140,6480,140C6360,140,6240,140,6120,140C6000,140,5880,140,5760,140C5640,140,5520,140,5400,140C5280,140,5160,140,5040,140C4920,140,4800,140,4680,140C4560,140,4440,140,4320,140C4200,140,4080,140,3960,140C3840,140,3720,140,3600,140C3480,140,3360,140,3240,140C3120,140,3000,140,2880,140C2760,140,2640,140,2520,140C2400,140,2280,140,2160,140C2040,140,1920,140,1800,140C1680,140,1560,140,1440,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"></path></svg>
      </div>
    </div>
  );
};

export default BenefitPart;
