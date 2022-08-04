// import { useContext } from "react";
// import InputMask from "react-input-mask";
import React, { useState } from "react";
// import logo from "assets/image/logo.png";
import imacPhone from "assets/image/imac-phone.png";
import Container from "components/Container";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SignUpForm from './SignUpForm';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const IntroPart = () => {

  window.onscroll = function() { scrollWatcher() };

  function controlNavVisibility (state: boolean) {

    // Control visibility
    if (!state) {

      document.getElementsByTagName("nav")[0].classList.add('-top-80');
    } else {

      document.getElementsByTagName("nav")[0].classList.remove('-top-80');
    }
  }

  function scrollWatcher () {

    // Control background color
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

      document.getElementsByTagName("nav")[0].classList.add('nav-scroll');
    } else {

      document.getElementsByTagName("nav")[0].classList.remove('nav-scroll');
    }
  }
  
  const [modalState, setModalState] = useState(false);

  function openModal() {

    controlNavVisibility(false);
    document.body.style.overflow = 'hidden';
    setModalState(true);
  }

  function closeModal() {

      controlNavVisibility(true);
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
      setModalState(false);
  }


  return (
    <div className="landing-intro pt-36 md:pt-24 relative">
      <Modal
        isOpen={modalState}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(0 0 0 / .66)',
            padding: 0
          },
          content: {
            position: 'absolute',
            display: 'grid',
            placeItems: 'center',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            width: '100%',
            height: '100%',
            margin: 'auto',
            padding: 0,
            background: 'transparent',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            border: 'none'
          }
        }}
      >
        <SignUpForm
          onClose={() => {

            closeModal();
          }}
        />
      </Modal>
      <nav className="left-0 right-0 fixed top-0 pt-6 sm:pt-9 pb-3 md:pb-7 z-80 block z-[100]">
        <div className="lg:flex-row flex-col flex landing-header mb-4 m-auto constrain">
          <div className="text-center w-full flex sm:block sm:w-auto md:text-left pb-4 sm:pb-2 md:pb-0">
            <img
              src="https://ik.imagekit.io/aazw3gxwf2n/prod/works-logo.svg"
              alt="logo"
              className="inline-block logo-img h-9 mt-1 sm:mt-0 sm:h-10 cursor-pointer"
            />
            <div className="flex-grow text-right">
              <div onClick={openModal} className="block sm:hidden scale-90 origin-right	mt-0.5" >
                <div className="text-blue-500 inline-block btn bg-white -mt-[4px]">
                  Apply job
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow sm:pt-2 lg:pb-0 pb-2.5">
            <ul className="flex flex-row text-right pr-3 sm:pr-0 ml-auto mx-none sm:mx-auto max-w-xs md:max-w-xs font-bold text-white text-base">
              <li className="flex-grow opacity-90 hover:opacity-100">
                <a href="#about">About</a>
              </li>
              <li className="flex-grow opacity-90 hover:opacity-100">
                <a href="#service">Services</a>
              </li>
              <li className="flex-grow opacity-90 hover:opacity-100">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <div onClick={openModal} className="hidden md:block" id="getStarted" >
              <div className="text-blue-500 inline-block btn bg-white -mt-[4px]">
                Apply job
              </div>
            </div>
        </div>
      </div>
      </nav>
      <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start text-white pb-24 md:pb-16 pt-10">
          <ScrollAnimation animateOnce={false} animateIn="animate__animated animate__fadeInLeft" animatePreScroll={true} delay={400}>
            <div>
              <h1 style={{textShadow: '3px 3px 10px rgba(0,0,0,0.2)'}} className="leading-[1.13] mt-[20px] text-[3rem] sm:text-[3.75rem] md:text-[4.5rem] ">
                Find the jobs&nbsp;
                <br />
                <b>of your dreams!</b>
              </h1>
              <div className="max-w-md">
                <div
                  onClick={openModal}
                  className="btn btn-large bg-white text-blue-600 w-full max-w-xs text-center mt-8"
                >
                  Apply job
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={false} animateIn="animate__animated animate__fadeInRight" animatePreScroll={true} delay={500}>
            <div className="hidden lg:flex items-end">
              <img
                src={imacPhone}
                alt="imacPhone"
                style={{ filter: "brightness(105%) saturate(120%)" }}
                className="w-full mt-2"
              />
            </div>
          </ScrollAnimation>
        </div>
      </Container>
      <div className="w-full block">
        <svg
          className="relative w-full"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 170"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgb(219 234 254 / 1)" offset="0%"></stop>
              <stop stopColor="rgb(219 234 254 / 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: "1" }}
            fill="url(#sw-gradient-0)"
            d="M0,0L48,5.7C96,11,192,23,288,25.5C384,28,480,23,576,19.8C672,17,768,17,864,39.7C960,62,1056,108,1152,110.5C1248,113,1344,74,1440,56.7C1536,40,1632,45,1728,53.8C1824,62,1920,74,2016,65.2C2112,57,2208,28,2304,28.3C2400,28,2496,57,2592,70.8C2688,85,2784,85,2880,79.3C2976,74,3072,62,3168,59.5C3264,57,3360,62,3456,53.8C3552,45,3648,23,3744,11.3C3840,0,3936,0,4032,11.3C4128,23,4224,45,4320,51C4416,57,4512,45,4608,36.8C4704,28,4800,23,4896,31.2C4992,40,5088,62,5184,76.5C5280,91,5376,96,5472,99.2C5568,102,5664,102,5760,110.5C5856,119,5952,136,6048,130.3C6144,125,6240,96,6336,87.8C6432,79,6528,91,6624,79.3C6720,68,6816,34,6864,17L6912,0L6912,170L6864,170C6816,170,6720,170,6624,170C6528,170,6432,170,6336,170C6240,170,6144,170,6048,170C5952,170,5856,170,5760,170C5664,170,5568,170,5472,170C5376,170,5280,170,5184,170C5088,170,4992,170,4896,170C4800,170,4704,170,4608,170C4512,170,4416,170,4320,170C4224,170,4128,170,4032,170C3936,170,3840,170,3744,170C3648,170,3552,170,3456,170C3360,170,3264,170,3168,170C3072,170,2976,170,2880,170C2784,170,2688,170,2592,170C2496,170,2400,170,2304,170C2208,170,2112,170,2016,170C1920,170,1824,170,1728,170C1632,170,1536,170,1440,170C1344,170,1248,170,1152,170C1056,170,960,170,864,170C768,170,672,170,576,170C480,170,384,170,288,170C192,170,96,170,48,170L0,170Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default IntroPart;
