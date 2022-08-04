import Container from "components/Container";
import ScrollAnimation from "react-animate-on-scroll";

const GetStartedPart = () => {
  
  function eventFire (el: any){

    var clickEvent = new MouseEvent("click", {
      "view": window,
      "bubbles": true,
      "cancelable": false
    });

    el.dispatchEvent(clickEvent);
  }
  const clickNavTrigger = () => {
    const trigger = document.getElementById('getStarted');
    eventFire(trigger);
  };

  return (
    <>
      <div id="funnel" className="relative bg-blue-100">
        <div className="relative bg-white">
          <svg
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 110"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-6" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgb(219 234 254 / 1)" offset="0%"></stop>
                <stop stopColor="rgb(219 234 254 / 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              fill="url(#sw-gradient-6)"
              d="M0,44L40,49.5C80,55,160,66,240,62.3C320,59,400,40,480,44C560,48,640,73,720,84.3C800,95,880,92,960,91.7C1040,92,1120,95,1200,93.5C1280,92,1360,84,1440,82.5C1520,81,1600,84,1680,73.3C1760,62,1840,37,1920,29.3C2000,22,2080,33,2160,33C2240,33,2320,22,2400,16.5C2480,11,2560,11,2640,11C2720,11,2800,11,2880,9.2C2960,7,3040,4,3120,16.5C3200,29,3280,59,3360,75.2C3440,92,3520,95,3600,80.7C3680,66,3760,33,3840,33C3920,33,4000,66,4080,71.5C4160,77,4240,55,4320,42.2C4400,29,4480,26,4560,20.2C4640,15,4720,7,4800,20.2C4880,33,4960,66,5040,69.7C5120,73,5200,48,5280,47.7C5360,48,5440,73,5520,77C5600,81,5680,62,5720,53.2L5760,44L5760,110L5720,110C5680,110,5600,110,5520,110C5440,110,5360,110,5280,110C5200,110,5120,110,5040,110C4960,110,4880,110,4800,110C4720,110,4640,110,4560,110C4480,110,4400,110,4320,110C4240,110,4160,110,4080,110C4000,110,3920,110,3840,110C3760,110,3680,110,3600,110C3520,110,3440,110,3360,110C3280,110,3200,110,3120,110C3040,110,2960,110,2880,110C2800,110,2720,110,2640,110C2560,110,2480,110,2400,110C2320,110,2240,110,2160,110C2080,110,2000,110,1920,110C1840,110,1760,110,1680,110C1600,110,1520,110,1440,110C1360,110,1280,110,1200,110C1120,110,1040,110,960,110C880,110,800,110,720,110C640,110,560,110,480,110C400,110,320,110,240,110C160,110,80,110,40,110L0,110Z"
            ></path>
          </svg>
        </div>
        <ScrollAnimation
          animateOnce={true}
          animateIn="animate__animated animate__fadeInRight"
        >
          <Container>
            <div
              className="my-20 mx-auto text-center"
            >
              <h3 className="text-4xl font-semibold text-blue-500">
                Apply now!
              </h3>
              <p className="my-4 mb-5">
                Click the button below and you can apply in a few minutes!
              </p>
              <div onClick={clickNavTrigger} >
                <div className="bg-blue-500 inline-block btn text-white -mt-[4px]">
                  Apply
                </div>
              </div>
            </div>
          </Container>
        </ScrollAnimation>
        <div className="relative bg-white">
          <div className="w-full h-1 relative bg-blue-100 -mb-[2px]"></div>
          <svg
            style={{ transform: "rotate(180deg)", transition: "0.3s" }}
            viewBox="0 0 1440 110"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-7" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgb(219 234 254 / 1)" offset="0%"></stop>
                <stop stopColor="rgb(219 234 254 / 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              fill="url(#sw-gradient-7)"
              d="M0,44L40,49.5C80,55,160,66,240,62.3C320,59,400,40,480,44C560,48,640,73,720,84.3C800,95,880,92,960,91.7C1040,92,1120,95,1200,93.5C1280,92,1360,84,1440,82.5C1520,81,1600,84,1680,73.3C1760,62,1840,37,1920,29.3C2000,22,2080,33,2160,33C2240,33,2320,22,2400,16.5C2480,11,2560,11,2640,11C2720,11,2800,11,2880,9.2C2960,7,3040,4,3120,16.5C3200,29,3280,59,3360,75.2C3440,92,3520,95,3600,80.7C3680,66,3760,33,3840,33C3920,33,4000,66,4080,71.5C4160,77,4240,55,4320,42.2C4400,29,4480,26,4560,20.2C4640,15,4720,7,4800,20.2C4880,33,4960,66,5040,69.7C5120,73,5200,48,5280,47.7C5360,48,5440,73,5520,77C5600,81,5680,62,5720,53.2L5760,44L5760,110L5720,110C5680,110,5600,110,5520,110C5440,110,5360,110,5280,110C5200,110,5120,110,5040,110C4960,110,4880,110,4800,110C4720,110,4640,110,4560,110C4480,110,4400,110,4320,110C4240,110,4160,110,4080,110C4000,110,3920,110,3840,110C3760,110,3680,110,3600,110C3520,110,3440,110,3360,110C3280,110,3200,110,3120,110C3040,110,2960,110,2880,110C2800,110,2720,110,2640,110C2560,110,2480,110,2400,110C2320,110,2240,110,2160,110C2080,110,2000,110,1920,110C1840,110,1760,110,1680,110C1600,110,1520,110,1440,110C1360,110,1280,110,1200,110C1120,110,1040,110,960,110C880,110,800,110,720,110C640,110,560,110,480,110C400,110,320,110,240,110C160,110,80,110,40,110L0,110Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default GetStartedPart;
