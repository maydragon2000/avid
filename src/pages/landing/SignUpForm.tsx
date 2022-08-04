import React, { useContext, useState } from "react";
import InputMask from "react-input-mask";
import axios from "axios";
import PhoneNumberContext from "context/PhoneNumber";
import PhoneCodeContext from "context/PhoneCode";
// import imacPhone from "assets/image/imac-phone.png";
import cardImg from "assets/image/Avid_Card_Slant.png";
import earlyAccessImg from "assets/image/early-access-icon.png";
// import securityImg from "assets/image/security-4x.png";
// import star from "assets/image/star.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import {
  // setChecked,
  // setCheck,
  // setEighthDialog,
  setFifthDialog,
  setFirstDialog,
  // setFourthDialog,
  setSecondDialog,
  // setSeventhDialog,
  setSixthDialog,
  // setThirdDialog,
  // setFirstName,
  // setLastName,
  // setSocialSecurity,
  // setSupplementary,
  // setVeteransCompensation,
  // setVeteransEducation,
  // setVeteransReserve,
  // setVeteransLife,
  // setVeteransVocational,
  // setFederalRetirement,
  // setFederalSurvivor,
  // setRailroadAnnuity,
  // setRailroadSickness,
  // setBeneficiaryFirstName,
  // setBeneficiarytLastName,
  // setBeneficiarytSSN,
  // setCity,
  // setFirstAddress,
  // setSecondAddress,
  // setZip,
  // setConfirmPassword,
  // setPassword,
  // setBeneficiaryCustomFirstName,
  // setBeneficiarytCustomLastName,
  // setBenefitFederalRetirement,
  // setBenefitFederalSurvivor,
  // setBenefitRailroadAnnuity,
  // setBenefitRailroadSickness,
  // setBenefitSocialSecurity,
  // setBenefitSupplementary,
  // setBenefitVeteransCompensation,
  // setBenefitVeteransEducation,
  // setBenefitVeteransLife,
  // setBenefitVeteransReserve,
  // setBenefitVeteransVocational,
} from "../../actions";
import Modal from "react-modal";
Modal.setAppElement("#root");

const SignUpForm = (props: any) => {
  const dispatch = useDispatch();
  const dialogs = useSelector((state: any) => state.dialogs);
  const [shortForm, setShortForm] = useState(false);
  const [patriotNotice, setPatriotNotice] = useState(false);
  const { phoneNumber, setPhoneNumber } = useContext<any>(PhoneNumberContext);
  const { phoneCode, setPhoneCode } = useContext<any>(PhoneCodeContext);
  const [code, setCode] = useState("");
  const [inputFlag, setInputFlag] = useState(true);
  const [error, setError] = useState("");
  const [tab, setTab] = useState(3);
  // const [email, setEmail] = useState("");
  const [start, setStart] = useState(true);

  // const saveInfo = (steps: number) => {
  //   const step = [
  //     "mobile-phone",
  //     "email",
  //   ];
  // };

  // const addressRequest = () => {
  //   axios
  //     .post(
  //       `${process.env.REACT_APP_ENDPOINT}/AvidPrepaid/uspsAddressValidation`,
  //       {
  //         address1: addresses.first,
  //         address2: addresses.second,
  //         city: addresses.city,
  //         zipCode: addresses.zip,
  //       }
  //     )
  //     .then((response) =>
  //       response.data.status === "success" ? () => {} : setPhoneCode(false)
  //     )
  //     .catch((err: any) => console.log(err));
  // };

  // const verifyMobileToken = () => {
  //   axios
  //     .post(`/da/mobile-token?phone=${phoneNumber}&code=${code}`)
  //     .then((response) =>
  //       response.data.status === "Success"
  //         ? setNextState()
  //         : alert("wrong code")
  //     )
  //     .catch((err: any) => console.log(err));
  //   //tmp
  //   setNextState();
  // };

  const generateMobileToken = (number: string) => {
    setPhoneNumber(number);
    if (number.length === 10) {
      dispatch(setSecondDialog());
      setStart(false);
      axios
        .get(`/da/mobile-token?phone=${number}`)
        .then((response) =>
          response.data.status === "Success"
            ? () => {
                setPhoneCode(true);
                // saveInfo(1);
              }
            : setPhoneCode(false)
        )
        .catch((err: any) => console.log(err));
      //tmp
      setPhoneCode(true);
      // saveInfo(1);
    }
  };

  const resetScroll = () => {
    document.getElementsByClassName("ReactModal__Content")[0].scrollTop = 0;
  };

  // const selectChange = () => {
  //   setRadio(!radio);
  // };

  // const selectBenefitChange = () => {
  //   setBenefitRadio(!benefitradio);
  // };

  const handleChange = (e: any) => {
    setCode(e.target.value);
    if (isNaN(e.target.value) || e.target.value.length > 6) {
      return;
    }
    if (e.target.value.length < 6 && e.target.value.length > 0) {
      setInputFlag(true);
      setError("Please enter at least 6 characters");
    } else if (e.target.value.length === 0) {
      setInputFlag(true);
      setError("This field is required.");
    } else {
      setInputFlag(false);
      setError("");
    }
  };

  const handleFocus = (e: any) => {
    if (e.target.value.length < 6 && e.target.value.length > 0) {
      setInputFlag(true);
      setError("Please enter at least 6 characters");
    } else if (e.target.value.length === 0) {
      setInputFlag(true);
      setError("This field is required.");
    } else {
      setInputFlag(false);
      setError("");
    }
  };

  const handleResend = () => {
    setInputFlag(false);
    setCode("");
  };

  // const goToBenefit = () => {
  //   setCardInfo(false);
  //   setBenefit(true);
  //   setShowNextState(false);
  //   resetScroll();
  //   dispatch(setFourthDialog());
  // };

  // const ToBenefit = () => {
  //   verifyMobileToken();
  // };

  // const add_beneficiary = () => {
  //   setShow(true);
  // };

  // const CheckedCount = (event: any, key: string) => {
  //   let checked = event.target.checked;
  //   setIsChecked({
  //     ...isChecked,
  //     [key]: checked,
  //   });
  // };

  // const CheckedIsCount = (event: any, key: string) => {
  //   let checked = event.target.checked;
  //   setBenefitIsChecked({
  //     ...isBenefitChecked,
  //     [key]: checked,
  //   });
  // };

  const closeModal = () => {
    props.onClose();
  };

  // const getAvidCard = () => {
  //   setIndex(2);
  // };

  // const credsPreval = () => {
  //   axios
  //     .post(`${process.env.REACT_APP_ENDPOINT}/AvidPrepaid/cresPreval`, {
  //       userName: username,
  //     })
  //     .then((response: any) => {})
  //     .catch((err: any) => console.log(err));
  // };

  // const validateUsername = () => {
  //   axios
  //     .post(`${process.env.REACT_APP_ENDPOINT}/AvidPrepaid/validate-username`, {
  //       username: name.firstName + name.lastName,
  //     })
  //     .then((response) =>
  //       response.data.status === "Success" && response.data.available === "true"
  //         ? goToBenefit()
  //         : ""
  //     );
  //   //tmp
  //   goToBenefit();
  // };

  // const checkNextState = () => {
  //   if (showbenefit) {
  //     setShowNextState(true);
  //     setBenefits(true);
  //   }
  // };

  const previousStep = (index: number) => {
    if (index === 0) {
      setPhoneCode(false);
      setStart(true);
      resetScroll();
      dispatch(setFirstDialog());
    }
    else if (index === 3) {
      resetScroll();
      dispatch(setFifthDialog());
    }
    else if (index === 4) {
      resetScroll();
      dispatch(setSixthDialog());
    }
    else if (index === 5) {
      setPhoneCode(true);
      resetScroll();
      dispatch(setSecondDialog());
    }
  }

  const nextstep = (index : number) => {
    if (index === 1) {
      setPhoneCode(false); 
      resetScroll(); 
      closeModal()
    } 
  }

  return (
    <div className="relative pointer-events-auto w-full max-w-[600px] mt-0 sm:mt-6 h-full sm:h-auto bg-white text-center sm:text-left sm:bg-transparent">
      <Modal
        isOpen={shortForm}
        shouldCloseOnOverlayClick={true}
        onRequestClose={(e) => {
          setShortForm(false);
        }}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgb(0 0 0 / .33)",
            padding: 0,
          },
          content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            maxHeight: "800px",
            maxWidth: "750px",
            background: "white",
            borderRadius: "1.5rem",
          },
        }}
      >
        <div className="text-left p-6 rounded-3xl leading-relaxed">
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th
                    className="description-header visually-hidden"
                    id="description-header-1"
                    scope="col"
                  >
                    Type of fee
                  </th>
                  <th className="payg-header" id="payg-header-1" scope="col">
                    This company GO!
                  </th>
                  <th
                    className="monthly-header"
                    id="monthly-header-1"
                    scope="col"
                  >
                    Select
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="description" id="fee-desc-1" scope="row">
                    <b>Plan fee</b>
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-1 payg-header-1"
                  >
                    $0
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-1 monthly-header-1"
                  >
                    $5.95 per mo.
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-2" scope="row">
                    <b>Per purchase</b>
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-2 payg-header-1"
                  >
                    $1.50*
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-2 monthly-header-1"
                  >
                    $0
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-3" scope="row">
                    <b>ATM withdrawal</b>
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-3 payg-header-1"
                  >
                    $3.00
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-3 monthly-header-1"
                  >
                    $3.00
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-5" scope="row">
                    <b>Cash reload</b>
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-5 payg-header-1"
                  >
                    $2.00
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-5 monthly-header-1"
                  >
                    $2.00
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-6" scope="row">
                    ATM balance inquiry
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-6 payg-header-1"
                  >
                    $0.75
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-6 monthly-header-1"
                  >
                    $0.75
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-8" scope="row">
                    Live customer service (per call)
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-8 payg-header-1"
                  >
                    $0
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-8 monthly-header-1"
                  >
                    $0
                  </td>
                </tr>
                <tr>
                  <th className="description" id="fee-desc-9" scope="row">
                    Inactivity (after 90 days w/ no trans.)
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-9 payg-header-1"
                  >
                    $4.95 per mo.
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-9 monthly-header-1"
                  >
                    $4.95 per mo.
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full text-left mt-6">
              <p>
                <b>
                  <span>We charge 6 other types of fees. </span>
                </b>
                <span>Here is 1 of them:</span>
              </p>
              <tbody>
                <tr>
                  <th className="description" id="fee-desc-10" scope="row">
                    Early Access
                  </th>
                  <td
                    className="payg"
                    data-label="Pay-as-you-go plan"
                    headers="fee-desc-10 payg-header-2"
                  >
                    $3.00
                  </td>
                  <td
                    className="monthly"
                    data-label="Monthly plan"
                    headers="fee-desc-10 monthly-header-2"
                  >
                    $3.00
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="w-full text-sm">
              <p className="footnote">
                * This fee can be lower depending on how and where this card is
                used.
              </p>
              <p>
                <strong>
                  <span>No overdraft/credit feature.</span>
                </strong>
                <br />{" "}
                <span>
                  Your funds are eligible for FDIC insurance and other
                  protections.
                </span>
              </p>
              <p>
                <span>
                  For general information about prepaid accounts, visit
                </span>{" "}
                <a
                  href="http://www.consumerfinance.gov/prepaid/"
                  rel="noreferrer"
                  target="_blank"
                >
                  cfpb.gov/prepaid
                </a>
                .<br />{" "}
                <span>
                  Find details and conditions for all fees and services in the
                  long form disclosure, or call
                </span>
                <a href="tel:8002216192"> 800-221-6192</a> or visit{" "}
                <a
                  href="https://lf.avidprepaid.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  lf.our company.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={patriotNotice}
        shouldCloseOnOverlayClick={true}
        onRequestClose={(e) => {
          setPatriotNotice(false);
        }}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgb(0 0 0 / .33)",
            padding: 0,
          },
          content: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            maxHeight: "250px",
            maxWidth: "750px",
            background: "white",
            borderRadius: "1.5rem",
          },
        }}
      >
        <p>
          To help the federal government fight the funding of terrorism and
          money laundering activities, the USA PATRIOT Act requires all
          financial institutions and their third parties to obtain, verify and
          record information that identifies each person who opens a card
          account. What this means for you: When you open a card account, we
          will ask for your name, address, date of birth, social security
          number, and other information that will allows us to identify you. We
          may also request a copy of your driver's license or other
          documentation bearing your photo as verification of your identity.
        </p>
      </Modal>
      <div className="p-6 sm:p-0 sm:pb-20 sm:mb-0 mb-8">
        <div className="contact-tab-header text-sm sm:text-base bg-white border-b-2 sm:border-b-0 border-blue-100 sm:bg-transparent fixed top-0 sm:relative z-[9999] sm:w-auto flex pt-8 sm:pt-0 pb-2 sm:pb-0">
          <div
            onClick={() => setTab(3)}
            className={`cursor-pointer font-bold sm:bg-white px-4 pl-0 sm:pl-6 sm:px-6 py-4 rounded-tl-3xl ${
              tab === 3 ? "text-blue-500" : "text-gray-600"
            }`}
          >
            <p>New Customers</p>
          </div>
          <div
            onClick={() => setTab(1)}
            className={`cursor-pointer font-bold sm:bg-white px-4 sm:px-6 py-4 sm:pl-0 rounded-tr-3xl ${
              tab === 1 ? "text-blue-500" : "text-gray-600"
            }`}
          >
            <p>Customer Service</p>
          </div>
          <div
            onClick={() => {
              closeModal();
            }}
            className={`cursor-pointer font-bold px-4 sm:px-6 py-4 sm:pl-0`}
          >
            <p className="text-red-400 sm:text-white absolute right-1 sm:right-2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </p>
          </div>
        </div>
        <div className="contact-tab-body text-left relative sm:shadow-2xl pt-24 sm:p-6 bg-white">
          <div
            className={`flex md:flex-row flex-col ${
              tab === 1 ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <div className="flex flex-col md:w-[50%] w-full md:mr-4 md:mb-0 mr-0">
              <p className="flex items-center mb-4">
                <FaPhoneAlt fill="#0386ff" size={20} />
                <span className="ml-3 text-base">
                  <strong>{"Call us at: "}</strong>{" "}
                  <a
                    href="tel:(801) 893-7716"
                    className="text-[#0386ff] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"(801) 893-7716"}
                  </a>
                </span>
              </p>
              <p className="flex items-center mb-4">
                <HiMail fill="#0386ff" size={20} />
                <span className="ml-3 text-base">
                  <a
                    href="tel:(801) 893-7716"
                    className="text-[#0386ff] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {"Email Us"}
                  </a>
                </span>
              </p>
              <p className="flex items-center mb-4">
                <FaMapMarkerAlt fill="#0386ff" size={20} />
                <span className="ml-3 text-base">
                  <strong>{"Address: P.O. Box:"}</strong>
                  {" 307, New Hyde Park, NY 11040"}
                </span>
              </p>
            </div>
            <div className="flex flex-col md:w-[50%] w-full md:mr-4 md:mb-0 mr-0 mb-4">
              <p className="mb-4">
                <strong>{"Business Hours:"}</strong>
                {
                  " Monday - Friday: 7AM to 12AM (EST) Saturday & Sunday: 9AM to 7PM (EST)"
                }
              </p>
              <p className="flex text-[20px]">
                <FaFacebookF fill="#0386ff" />
                <FaInstagram fill="#0386ff" className="ml-4" />
                <FaYoutube fill="#0386ff" className="ml-4" />
              </p>
            </div>
          </div>
          <div
            className={`text-left ${
              tab === 2 ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <p className="mb-[20px] text-base">
              <strong>
                Are you an existing or returning customer and need access to
                your account?
              </strong>{" "}
              <a
                href="https://google.com"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Sign In
              </a>
            </p>
            <p className="text-base">
              <strong>Do you want to learn more? </strong>
              <a href="#fap" className="text-[#0386ff] hover:underline">
                Learn More
              </a>
            </p>
          </div>
          {tab === 3 && (
            <div className="w-full h-full">
              {dialogs.index === 1 && phoneCode && (
                <div className="bg-white">
                  <div className="border-2 border-blue-100 rounded-2xl mb-6 flex flex-col sm:flex-row px-6 py-5 text-center sm:text-left">
                    <svg
                      className="h-[80px] w-[80px] m-auto inline-block bg-blue-50 p-4 rounded-full fill-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
                    </svg>
                    <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold leading-relaxed mt-4 sm:mt-1.5 pt-4 sm:pl-6 relative inline-block flex-grow">
                      Enter your code
                    </h1>
                  </div>
                  <p className="text-base font-semibold leading-relaxed">
                    We sent a code to your mobile device. Please enter it below
                    to start your application process.
                  </p>
                  <div className="">
                    <div className="text-left w-full max-w-sm mt-6 mx-auto">
                      <p className="pl-3 pb-2 text-gray-700">Text Code *</p>
                      <input
                        type="text"
                        onFocus={handleFocus}
                        value={code}
                        className={`border h-[50px] border-gray-500 rounded-full text-[1.3em] text-[#555] w-full border-[#aaa] p-2 outline-none border-[1px] focus:shadow-md ${
                          inputFlag
                            ? "focus:shadow-red-200 focus:border-red-200"
                            : "focus:shadow-blue-200 focus:border-[#aaa]"
                        }`}
                        onChange={handleChange}
                      />
                      {inputFlag && (
                        <p className="text-red-500 font-bold text-center mt-3">
                          {error}
                        </p>
                      )}
                      <div
                        className="text-center mt-1 text-blue-500 hover:underline cursor-pointer"
                        onClick={handleResend}
                      >
                        Resend Code
                      </div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <button
                        className="text-gray-500 border-2 border-gray-400 rounded-full py-3 px-6 box-border text-lg"
                        onClick={() => {
                          previousStep(0);
                          // saveInfo(1);
                        }}
                      >
                        <FaAngleLeft className="mr-2 inline-block" />
                        Back
                      </button>
                      <button
                        className="bg-blue-500 text-white rounded-full py-3 px-6 text-lg"
                        onClick={() => {
                          nextstep(1);
                          // saveInfo(2);
                        }}
                      >
                        Continue
                        <FaAngleRight className="ml-2 inline-block" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <div>
                  <div>
                    {dialogs.index === 0 && start && (
                      <div
                        className={`${
                          tab === 3 ? "opacity-100 block" : "opacity-0 hidden"
                        }`}
                      >
                        <div className="border-2 border-blue-100 rounded-2xl mb-6 flex flex-col sm:flex-row px-6 py-5 text-center sm:text-left">
                          <img
                            src={cardImg}
                            alt="cardImg"
                            className="h-[80px] m-auto"
                          />
                          <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold leading-relaxed mt-4 sm:mt-1.5 pt-4 sm:pl-6 relative inline-block flex-grow">
                            Verify phone number
                          </h1>
                        </div>
                        <div className="flex flex-row gap-5 text-sm border-b-2 border-blue-100 pb-6 mb-6">
                          <img
                            src={earlyAccessImg}
                            alt="cardImg"
                            className="h-[100px] m-auto"
                          />
                          <div>
                            <ul>
                              <li className="pb-2">
                                Get your federal benefits up to 6 days early
                              </li>
                              <li>
                                Receive your payroll and all other direct
                                deposits up to 2 days early
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-base leading-8 m-0 pb-0">
                          Simply enter your phone number in the field below to
                          receive a text code to start the process.
                        </p>
                        <br />
                        <InputMask
                          value={phoneNumber}
                          placeholder="Enter Mobile Number"
                          onChange={(e) =>
                            generateMobileToken(
                              String(e.target.value).replace(/[^0-9]/g, "")
                            )
                          }
                          mask="(999) 999-9999"
                          className="border-2 border-blue-100 w-full lg:mb-0 mb-[15px] outline-none bg-white text-[#777] text-xl py-[10px] px-4 rounded-full"
                        />
                      </div>
                    )}
                    {/* {(dialogs.index === 2 || cardInfo) && (
                      <div className="w-full">
                        <div className="border-2 border-blue-100 rounded-2xl mb-6 flex flex-col sm:flex-row px-6 py-5 text-center sm:text-left">
                          <svg
                            className="h-[80px] w-[80px] m-auto inline-block bg-blue-50 p-4 rounded-full fill-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                          </svg>
                          <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold leading-relaxed mt-4 sm:mt-1.5 pt-4 sm:pl-6 relative inline-block flex-grow">
                            Who are you?
                          </h1>
                        </div>
                        <a
                          href="#form"
                          className="cursor-pointer font-semibold text-blue-500 float-right"
                          onClick={() => setShortForm(true)}
                        >
                          <i className="mr-3">ℹ</i>
                          Short form
                        </a>
                        <div className="flex flex-row w-full gap-5 text-sm border-b-2 border-blue-100 pb-6 pt-4 mb-6">
                          <img
                            src={securityImg}
                            alt="cardImg"
                            className="h-[100px] m-auto"
                          />
                          <div className="flex-grow">
                            <ul>
                              <li className="pb-2">
                                Visa Zero Liability Protection
                              </li>
                              <li className="pb-2">FDIC Insured</li>
                              <li className="pb-2">
                                Peace of mind with Account Shield3
                              </li>
                              <li className="pb-2">Security Biometrics</li>
                            </ul>
                          </div>
                        </div>
                        <div className="text-left pb-6">
                          <h1 className="font-black">
                            Are you receiving benefits for yourself or are you
                            the representative payee for someone else
                            <span style={{ fontFamily: "sans-serif" }}>?</span>
                          </h1>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="flex">
                            <input
                              type="checkbox"
                              checked={select.value === 1}
                              className="mt-1.5 border-gray-500 border"
                              onChange={() => {
                                dispatch(setChecked(1));
                                setBenefits(false);
                              }}
                            />
                            <h1 className="ml-2 font-black">Myself</h1>
                          </div>
                          <div className="flex">
                            <input
                              type="checkbox"
                              checked={select.value === 2}
                              className="mt-1.5 border-gray-500 border"
                              onChange={() => {
                                dispatch(setChecked(2));
                                setBenefits(true);
                              }}
                            />
                            <h1 className="ml-2 font-black">Someone Else</h1>
                          </div>
                          <div className="flex">
                            <input
                              type="checkbox"
                              checked={select.value === 3}
                              className="mt-1.5 border-gray-500 border"
                              onChange={() => {
                                dispatch(setChecked(3));
                                setBenefits(true);
                              }}
                            />
                            <h1 className="ml-2 font-black">Both</h1>
                          </div>
                        </div>
                        {(select.value === 2 || select.value === 3) && (
                          <div className="w-full">
                            <div className="w-full pt-6">
                              <h1 className="font-black">
                                Please tell us a little about the beneficiary:
                              </h1>
                            </div>
                            <div className="flex flex-col pt-6">
                              <div className="flex">
                                <h1>Beneficiary First Name</h1>
                                <img
                                  src={star}
                                  alt="star"
                                  className="w-2 h-2 mt-1.5 ml-1"
                                />
                              </div>
                              <input
                                type="text"
                                placeholder="First Name"
                                value={name.beneficiary_firstName}
                                onChange={(e) => {
                                  dispatch(
                                    setBeneficiaryFirstName(e.target.value)
                                  );
                                }}
                                className="border-2 border-blue-100 rounded-full py-2 px-4"
                              />
                            </div>
                            <div className="flex flex-col">
                              <div className="flex mt-5">
                                <h1>Beneficiary Last Name</h1>
                                <img
                                  src={star}
                                  alt="star"
                                  className="w-2 h-2 mt-1.5 ml-1"
                                />
                              </div>
                              <input
                                type="text"
                                placeholder="Last Name"
                                value={name.beneficiary_lastName}
                                onChange={(e) => {
                                  dispatch(
                                    setBeneficiarytLastName(e.target.value)
                                  );
                                }}
                                className="border-2 border-blue-100 rounded-full py-2 px-4"
                              />
                            </div>
                          </div>
                        )}
                        <hr className="border-t-2 bg-transparent border-blue-100 mt-6" />
                        <div className="w-full pt-6">
                          <h1 className="font-black">
                            Please tell us a little about yourself below:
                          </h1>
                        </div>
                        <div className="flex flex-col pt-6">
                          <div className="flex flex-col">
                            <div className="flex flex-col">
                              <div className="flex">
                                <h1>Your First Name</h1>
                                <img
                                  src={star}
                                  alt="star"
                                  className="w-2 h-2 mt-1.5 ml-1"
                                />
                              </div>
                              <input
                                type="text"
                                placeholder="First Name"
                                value={name.firstName}
                                onChange={(e) =>
                                  dispatch(setFirstName(e.target.value))
                                }
                                className="border-2 border-blue-100 rounded-full py-2 px-4"
                              />
                            </div>
                            <div className="flex flex-col">
                              <div className="flex mt-5">
                                <h1>Your Last Name</h1>
                                <img
                                  src={star}
                                  alt="star"
                                  className="w-2 h-2 mt-1.5 ml-1"
                                />
                              </div>
                              <input
                                type="text"
                                placeholder="Last Name"
                                value={name.lastName}
                                onChange={(e) =>
                                  dispatch(setLastName(e.target.value))
                                }
                                className="border-2 border-blue-100 rounded-full py-2 px-4"
                              />
                            </div>
                          </div>

                          <div className="flex justify-between w-full pt-6">
                            <button
                              className="bg-gray-300 text-white rounded-full py-3 px-6 text-lg"
                              onClick={() => {
                                previousStep(5);
                                saveInfo(2);
                              }}
                            >
                              <FaAngleLeft className="mr-2 inline-block" />
                              Back
                            </button>
                            <button
                              className="bg-blue-500 text-white rounded-full py-3 px-6 text-lg"
                              onClick={() => {
                                saveInfo(3);
                                validateUsername();
                                checkNextState();
                              }}
                            >
                              Continue
                              <FaAngleRight className="ml-2 inline-block" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {showbenefit &&
                      (counts === 0 || counts > 3) &&
                      nextState && (
                        <h1 className="text-red-600 text-center border text-sm rounded-xl py-2 mb-5 border-red-400">
                          Please select between one and three benefits
                        </h1>
                      )}
                    {showbenefit && nextState && (
                      <div className="w-full">
                        <p className="font-black">
                          Please select the type of benefit that your beneficiary receives
                        </p>
                        <p className="">check all that apply up to 3</p>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitsocialSecurity"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitsocialSecurity");
                              dispatch(
                                setBenefitSocialSecurity(e.target.value)
                              );
                            }}
                            id="op-ss"
                          />
                          <label
                            htmlFor="op-ss"
                            className="ml-2 font-black mt-4"
                          >
                            Social Security
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitsupplementary"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitsupplementary");
                              dispatch(setBenefitSupplementary(e.target.value));
                            }}
                            id="op-ssi"
                          />
                          <label
                            htmlFor="op-ssi"
                            className="ml-2 font-black mt-4"
                          >
                            Supplemental Security Income
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitincome"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitincome");
                              dispatch(
                                setBenefitVeteransCompensation(e.target.value)
                              );
                            }}
                            id="op-pension"
                          />
                          <label
                            htmlFor="op-pension"
                            className="ml-2 font-black mt-4"
                          >
                            Veterans Compensation & Pension
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitMGIB"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitMGIB");
                              setBenefitVeteransEducation(e.target.value);
                            }}
                            id="op-mgib"
                          />
                          <label
                            htmlFor="op-mgib"
                            className="ml-2 font-black mt-4"
                          >
                            Veterans Education MGIB
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefiteducation"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefiteducation");
                              setBenefitVeteransReserve(e.target.value);
                            }}
                            id="op-education"
                          />
                          <label
                            htmlFor="op-education"
                            className="ml-2 font-black mt-4"
                          >
                            Veterans Education/Selected Reserve
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitinsurance"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitinsurance");
                              setBenefitVeteransLife(e.target.value);
                            }}
                            id="op-insurance"
                          />
                          <label
                            htmlFor="op-insurance"
                            className="ml-2 font-black mt-4"
                          >
                            Veterans Life Insurance
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitemployment"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitemployment");
                              setBenefitVeteransVocational(e.target.value);
                            }}
                            id="op-vet"
                          />
                          <label
                            htmlFor="op-vet"
                            className="ml-2 font-black mt-4"
                          >
                            Veterans Vocational Rehabilitation & Employment
                            Benefits
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitretirement"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitretirement");
                              setBenefitFederalRetirement(e.target.value);
                            }}
                            id="op-retire"
                          />
                          <label
                            htmlFor="op-retire"
                            className="ml-2 font-black mt-4"
                          >
                            Federal Civil Service Retirement/Annuity
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitsurvivor"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitsurvivor");
                              setBenefitFederalSurvivor(e.target.value);
                            }}
                            id="op-surv"
                          />
                          <label
                            htmlFor="op-surv"
                            className="ml-2 font-black mt-4"
                          >
                            Federal Civil Service Survivor/Annuity
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitrailroad"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitrailroad");
                              setBenefitRailroadAnnuity(e.target.value);
                            }}
                            id="op-railroad"
                          />
                          <label
                            htmlFor="op-railroad"
                            className="ml-2 font-black mt-4"
                          >
                            Railroad Retirement/Annuity Benefits
                          </label>
                        </div>
                        <div className="flex">
                          <input
                            type="checkbox"
                            className="mt-5 border-gray-500 border"
                            checked={isBenefitChecked["benefitrailroadsick"]}
                            onChange={(e) => {
                              CheckedIsCount(e, "benefitrailroadsick");
                              setBenefitRailroadSickness(e.target.value);
                            }}
                            id="op-railroad-sick"
                          />
                          <label
                            htmlFor="op-railroad-sick"
                            className="ml-2 font-black mt-4"
                          >
                            Railroad Retirement Unemployment/Sickness Benefits
                          </label>
                        </div>
                        <h1 className="font-black mt-6">
                          Would you like to receive your benefit up to 6 days
                          early?
                        </h1>
                        <div className="flex">
                          <input
                            type="radio"
                            className="mt-3 border-gray-500 border"
                            checked={benefitradio}
                            onChange={selectBenefitChange}
                          />
                          <h2 className="ml-2 mt-2">Yes</h2>
                        </div>
                        <div className="flex">
                          <input
                            type="radio"
                            className="mt-3 border-gray-500 border"
                            checked={!benefitradio}
                            onChange={selectBenefitChange}
                          />
                          <h2 className="ml-2 mt-2">No</h2>
                        </div>
                        <div className="flex justify-between w-full pt-6">
                          <button
                            className="bg-gray-300 text-white rounded-full py-3 px-6 text-lg"
                            onClick={() => {
                              saveInfo(2);
                              previousStep(1);
                            }}
                          >
                            <FaAngleLeft className="mr-2 inline-block" />
                            Back
                          </button>
                          <button
                            className="bg-blue-500 text-white rounded-full py-3 px-6 text-lg"
                            onClick={() => {
                              saveInfo(3);
                              validateUsername();
                            }}
                          >
                            Continue
                            <FaAngleRight className="ml-2 inline-block" />
                          </button>
                        </div>
                      </div>
                    )}
                    {(dialogs.index === 3 || benefit) && !nextState && (
                      <>
                        <div className="border-2 border-blue-100 rounded-2xl mb-6 flex flex-col sm:flex-row px-6 py-5 text-center sm:text-left">
                          <svg
                            className="h-[80px] w-[80px] m-auto inline-block bg-blue-50 p-4 rounded-full fill-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M14 9.5h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm0 7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1zm5 4.5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zM7 11h3c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm0-4h3v3H7V7zm0 11h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm0-4h3v3H7v-3z" />
                          </svg>
                          <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold leading-relaxed mt-4 sm:mt-1.5 pt-4 sm:pl-6 relative inline-block flex-grow">
                            Select your benifits
                          </h1>
                        </div>
                        {flag && (count === 0 || count > 3) && (
                          <h1 className="text-red-600 text-center border text-sm rounded-xl py-2 mb-5 border-red-400">
                            Please select between one and three benefits
                          </h1>
                        )}
                        <div className="leading-relaxed mt-3">
                          <div className="w-full">
                            <p className="font-black">
                              Please select the type of benefit that you receive
                            </p>
                            <p className="">check all that apply up to 3</p>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["socialSecurity"]}
                                onChange={(e) => {
                                  CheckedCount(e, "socialSecurity");
                                  dispatch(setSocialSecurity(e.target.value));
                                }}
                                id="op-ss"
                              />
                              <label
                                htmlFor="op-ss"
                                className="ml-2 font-black mt-4"
                              >
                                Social Security
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["supplementary"]}
                                onChange={(e) => {
                                  CheckedCount(e, "supplementary");
                                  dispatch(setSupplementary(e.target.value));
                                }}
                                id="op-ssi"
                              />
                              <label
                                htmlFor="op-ssi"
                                className="ml-2 font-black mt-4"
                              >
                                Supplemental Security Income
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["income"]}
                                onChange={(e) => {
                                  CheckedCount(e, "income");
                                  dispatch(
                                    setVeteransCompensation(e.target.value)
                                  );
                                }}
                                id="op-pension"
                              />
                              <label
                                htmlFor="op-pension"
                                className="ml-2 font-black mt-4"
                              >
                                Veterans Compensation & Pension
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["MGIB"]}
                                onChange={(e) => {
                                  CheckedCount(e, "MGIB");
                                  setVeteransEducation(e.target.value);
                                }}
                                id="op-mgib"
                              />
                              <label
                                htmlFor="op-mgib"
                                className="ml-2 font-black mt-4"
                              >
                                Veterans Education MGIB
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["education"]}
                                onChange={(e) => {
                                  CheckedCount(e, "education");
                                  setVeteransReserve(e.target.value);
                                }}
                                id="op-education"
                              />
                              <label
                                htmlFor="op-education"
                                className="ml-2 font-black mt-4"
                              >
                                Veterans Education/Selected Reserve
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["insurance"]}
                                onChange={(e) => {
                                  CheckedCount(e, "insurance");
                                  setVeteransLife(e.target.value);
                                }}
                                id="op-insurance"
                              />
                              <label
                                htmlFor="op-insurance"
                                className="ml-2 font-black mt-4"
                              >
                                Veterans Life Insurance
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["employment"]}
                                onChange={(e) => {
                                  CheckedCount(e, "employment");
                                  setVeteransVocational(e.target.value);
                                }}
                                id="op-vet"
                              />
                              <label
                                htmlFor="op-vet"
                                className="ml-2 font-black mt-4"
                              >
                                Veterans Vocational Rehabilitation & Employment
                                Benefits
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["retirement"]}
                                onChange={(e) => {
                                  CheckedCount(e, "retirement");
                                  setFederalRetirement(e.target.value);
                                }}
                                id="op-retire"
                              />
                              <label
                                htmlFor="op-retire"
                                className="ml-2 font-black mt-4"
                              >
                                Federal Civil Service Retirement/Annuity
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["survivor"]}
                                onChange={(e) => {
                                  CheckedCount(e, "survivor");
                                  setFederalSurvivor(e.target.value);
                                }}
                                id="op-surv"
                              />
                              <label
                                htmlFor="op-surv"
                                className="ml-2 font-black mt-4"
                              >
                                Federal Civil Service Survivor/Annuity
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["railroad"]}
                                onChange={(e) => {
                                  CheckedCount(e, "railroad");
                                  setRailroadAnnuity(e.target.value);
                                }}
                                id="op-railroad"
                              />
                              <label
                                htmlFor="op-railroad"
                                className="ml-2 font-black mt-4"
                              >
                                Railroad Retirement/Annuity Benefits
                              </label>
                            </div>
                            <div className="flex">
                              <input
                                type="checkbox"
                                className="mt-5 border-gray-500 border"
                                checked={isChecked["railroadsick"]}
                                onChange={(e) => {
                                  CheckedCount(e, "railroadsick");
                                  setRailroadSickness(e.target.value);
                                }}
                                id="op-railroad-sick"
                              />
                              <label
                                htmlFor="op-railroad-sick"
                                className="ml-2 font-black mt-4"
                              >
                                Railroad Retirement Unemployment/Sickness
                                Benefits
                              </label>
                            </div>
                          </div>
                          <div className="w-full">
                            <hr className="h-[3px] bg-blue-100 mt-6" />
                            <h1 className="font-black mt-6">
                              Would you like to receive your benefit up to 6
                              days early?
                            </h1>
                            <div className="flex">
                              <input
                                type="radio"
                                className="mt-3 border-gray-500 border"
                                checked={radio}
                                onChange={selectChange}
                              />
                              <h2 className="ml-2 mt-2">Yes</h2>
                            </div>
                            <div className="flex">
                              <input
                                type="radio"
                                className="mt-3 border-gray-500 border"
                                checked={!radio}
                                onChange={selectChange}
                              />
                              <h2 className="ml-2 mt-2">No</h2>
                            </div>
                            <hr className="h-[3px] bg-blue-100 mt-6" />
                            <h1 className="mt-5 font-black">
                              Click below to add a beneficiary
                            </h1>
                            <button
                              className="mt-5 rounded-full px-6 py-2 border-sky-500 border text-blue-500 font-normal"
                              onClick={add_beneficiary}
                            >
                              + Add Beneficiary
                            </button>
                            {show && (
                              <div className="w-full p-6 rounded-2xl border-2 border-blue-100 mt-8">
                                <h4 className="font-bold mb-4 text-blue-500">
                                  Your beneficiary:
                                </h4>
                                <div className="w-full">
                                  <div className="flex">
                                    <h1 className="font-bold">
                                      Beneficiary First Name
                                    </h1>
                                    <img
                                      src={star}
                                      alt="star"
                                      className="ml-2 w-1.5 h-1.5 mt-1.5"
                                    />
                                  </div>
                                  <input
                                    type="text"
                                    className="rounded-full border border-gray-400 py-1.5 px-4 mt-2"
                                    value={name.beneficiary_customfirstName}
                                    onChange={(e) =>
                                      dispatch(
                                        setBeneficiaryCustomFirstName(
                                          e.target.value
                                        )
                                      )
                                    }
                                  />
                                  <div className="flex mt-5">
                                    <h1 className="font-bold">
                                      Beneficiary Last Name
                                    </h1>
                                    <img
                                      src={star}
                                      alt="star"
                                      className="ml-2 w-1.5 h-1.5 mt-1.5"
                                    />
                                  </div>
                                  <input
                                    type="text"
                                    className="rounded-full border border-gray-400 py-1.5 px-4 mt-2"
                                    value={name.beneficiary_customlastName}
                                    onChange={(e) =>
                                      dispatch(
                                        setBeneficiarytCustomLastName(
                                          e.target.value
                                        )
                                      )
                                    }
                                  />
                                  <div className="flex mt-5">
                                    <h1 className="font-bold">
                                      Beneficiary SSN
                                    </h1>
                                    <img
                                      src={star}
                                      alt="star"
                                      className="ml-2 h-1.5 w-1.5 mt-1.5"
                                    />
                                  </div>
                                  <InputMask
                                    mask="999-99-9999"
                                    className="border border-gray-400 outline-none bg-white rounded-full py-1.5 px-4 mt-2"
                                    value={name.beneficiary_ssn}
                                    onChange={(e) =>
                                      dispatch(
                                        setBeneficiarytSSN(e.target.value)
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-between mt-10">
                          <button
                            className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                            onClick={() => {
                              saveInfo(3);
                              previousStep(2);
                            }}
                          >
                            <FaAngleLeft className="mr-2 inline-block" />
                            Back
                          </button>
                          <button
                            className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                            onClick={() => {
                              saveInfo(4);
                              nextstep(2);
                            }}
                          >
                            Continue
                            <FaAngleRight className="ml-2 inline-block" />
                          </button>
                        </div>
                      </>
                    )}
                    {(dialogs.index === 4 || address) && (
                      <>
                        <div className="border-2 border-blue-100 rounded-2xl mb-6 flex flex-col sm:flex-row px-6 py-5 text-center sm:text-left">
                          <svg
                            className="h-[80px] w-[80px] m-auto inline-block bg-blue-50 p-4 rounded-full fill-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <rect fill="none" height="24" width="24" />
                            <path d="M22,12c0-0.55-0.45-1-1-1h-2.07c-0.49-3.39-3.4-6-6.93-6s-6.44,2.61-6.93,6H3c-0.55,0-1,0.45-1,1s0.45,1,1,1h2.07 c0.49,3.39,3.4,6,6.93,6s6.44-2.61,6.93-6H21C21.55,13,22,12.55,22,12z M15,14.5c0,0.55-0.45,1-1,1h-4c-0.55,0-1-0.45-1-1v-3 c0-0.55,0.45-1,1-1v-1c0-1.21,1.08-2.18,2.34-1.97C13.32,7.69,14,8.61,14,9.61v0.89c0.55,0,1,0.45,1,1V14.5z M12.75,13 c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75c0-0.41,0.34-0.75,0.75-0.75S12.75,12.59,12.75,13z M13,9.5v1h-2v-1 c0-0.55,0.45-1,1-1S13,8.95,13,9.5z" />
                          </svg>
                          <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold leading-relaxed mt-4 sm:mt-1.5 pt-4 sm:pl-6 relative inline-block flex-grow">
                            Congratulations!
                          </h1>
                        </div>
                        <div className="text-center text-green-500 font-semibold">
                          <h4 className="pt-6">
                            Your benefit type is eligible for Early Access on
                            Avid Prepaid!
                          </h4>
                        </div>
                        <div className="flex w-full mt-10">
                          <div className="border-2 border-blue-100 rounded-2xl w-full p-6">
                            <div className="flex">
                              <h1 className="font-bold">Address 1</h1>
                              <img
                                src={star}
                                alt="star"
                                className="w-1.5 h-1.5 mt-1 ml-2"
                              />
                              <h1 className="ml-2 text-gray-400">
                                Note: P.O Box is not accepted
                              </h1>
                            </div>
                            <input
                              placeholder="Address 1"
                              className="rounded-3xl mt-3 border w-full border-gray-500 py-1.5 px-4"
                              value={addresses.first}
                              onChange={(e) =>
                                dispatch(setFirstAddress(e.target.value))
                              }
                            />
                            <h1 className="mt-3 font-bold">Address 2:</h1>
                            <input
                              placeholder="Address 2"
                              className="rounded-3xl mt-3 w-full border-gray-500 border py-1.5 px-4"
                              value={addresses.second}
                              onChange={(e) =>
                                dispatch(setSecondAddress(e.target.value))
                              }
                            />
                            <div className="flex mt-3">
                              <h1 className="font-bold">City</h1>
                              <img
                                src={star}
                                alt="star"
                                className="w-1.5 h-1.5 mt-1.5 ml-2"
                              />
                            </div>
                            <input
                              placeholder="City"
                              className="rounded-3xl mt-3 border w-full border-gray-500 py-1.5 px-4"
                              value={addresses.city}
                              onChange={(e) =>
                                dispatch(setCity(e.target.value))
                              }
                            />
                            <div className="mt-3">
                              <div className="flex">
                                <h1 className="font-bold">State</h1>
                                <img
                                  src={star}
                                  alt="star"
                                  className="w-1.5 h-1.5 mt-1.5 ml-2"
                                />
                              </div>
                              <select
                                name="state"
                                id="state"
                                className="rounded-3xl mt-3 border-gray-500 border py-2 px-4 w-full bg-white"
                              >
                                <option value="state">State</option>
                              </select>
                            </div>
                            <div className="w-full mt-3">
                              <div className="flex">
                                <h1 className="font-bold">ZIP</h1>
                                <img
                                  src={star}
                                  alt="star"
                                  className="w-1.5 h-1.5 mt-1.5 ml-2"
                                />
                              </div>
                              <input
                                type="text"
                                className="rounded-3xl mt-3 w-full border-gray-500 border py-1.5 px-4"
                                value={addresses.zip}
                                onChange={(e) =>
                                  dispatch(setZip(e.target.value))
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between mt-10">
                          <button
                            className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                            onClick={() => {
                              ToBenefit();
                              saveInfo(4);
                            }}
                          >
                            <FaAngleLeft className="mr-2 inline-block" />
                            Back
                          </button>
                          <button
                            className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                            onClick={() => {
                              addressRequest();
                              saveInfo(5);
                              nextstep(3);
                            }}
                          >
                            Continue
                            <FaAngleRight className="ml-2 inline-block" />
                          </button>
                        </div>
                      </>
                    )}
                    {(dialogs.index === 5 || security) && (
                      <>
                        <div className="border-2 border-blue-100 rounded-2xl mb-6 flex flex-col sm:flex-row px-6 py-5 text-center sm:text-left">
                          <svg
                            className="h-[80px] w-[80px] m-auto inline-block bg-blue-50 p-4 pr-1 pb-2.5 rounded-full fill-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 30 30"
                            height="24px"
                            viewBox="0 0 30 30"
                            width="24px"
                            fill="#000000"
                          >
                            <g>
                              <rect fill="none" height="24" width="24" y="0" />
                            </g>
                            <g>
                              <path d="M20,7h-5V4c0-1.1-0.9-2-2-2h-2C9.9,2,9,2.9,9,4v3H4C2.9,7,2,7.9,2,9v11c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9 C22,7.9,21.1,7,20,7z M9,12c0.83,0,1.5,0.67,1.5,1.5c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5C7.5,12.67,8.17,12,9,12z M12,18H6 v-0.43c0-0.6,0.36-1.15,0.92-1.39C7.56,15.9,8.26,15.75,9,15.75s1.44,0.15,2.08,0.43c0.55,0.24,0.92,0.78,0.92,1.39V18z M13,9h-2V4 h2V9z M17.25,16.5h-2.5c-0.41,0-0.75-0.34-0.75-0.75v0c0-0.41,0.34-0.75,0.75-0.75h2.5c0.41,0,0.75,0.34,0.75,0.75v0 C18,16.16,17.66,16.5,17.25,16.5z M17.25,13.5h-2.5c-0.41,0-0.75-0.34-0.75-0.75v0c0-0.41,0.34-0.75,0.75-0.75h2.5 c0.41,0,0.75,0.34,0.75,0.75v0C18,13.16,17.66,13.5,17.25,13.5z" />
                            </g>
                          </svg>
                          <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold leading-relaxed mt-4 sm:mt-1.5 pt-4 sm:pl-6 relative inline-block flex-grow">
                            ID verification
                          </h1>
                        </div>

                        <div className="text-center py-4">
                          <h1 className="font-black">
                            The USA PATRIOT Act requires that we collect your
                            SSN to verify your identify. We will never share
                            your personal information and providing it will not
                            affect your credit score.
                          </h1>
                          <p
                            className="text-sky-500 font-semibold underline mt-5 cursor-pointer"
                            onClick={() => {
                              setPatriotNotice(true);
                            }}
                          >
                            Notice of USA PATRIOT Act
                          </p>
                        </div>
                        <div className="flex border-2 border-blue-100 rounded-2xl p-6 mb-4 mt-4">
                          <div className="mt-5">
                            <div className="flex">
                              <h1>Social Security Number</h1>
                              <img
                                src={star}
                                alt="star"
                                className="ml-2 w-1.5 h-1.5 mt-1.5"
                              />
                            </div>
                            <input
                              type="number"
                              className="rounded-3xl pl-3 w-full py-1.5 mt-5 border-gray-500 border"
                              placeholder="123-45-6789"
                            />
                            <div className="flex flex-col mt-5">
                              <h1>Date of Birth</h1>
                              <img
                                src={star}
                                alt="star"
                                className="ml-1 w-1.5 h-1.5 mt-1.5"
                              />
                              <p className="ml-5 text-gray-400">
                                Note: Must be 18 years or older
                              </p>
                            </div>
                            <input
                              type="date"
                              id="birthday"
                              name="birthday"
                              className="rounded-3xl mt-5 px-3 py-1.5 w-full border-gray-500 border"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between mt-5">
                          <button
                            className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                            onClick={() => {
                              saveInfo(5);
                              previousStep(3)
                            }}
                          >
                            <FaAngleLeft className="mr-2 inline-block" />
                            Back
                          </button>
                          <button
                            className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                            onClick={() => {
                              saveInfo(6);
                              nextstep(4)
                            }}
                          >
                            Continue
                            <FaAngleRight className="ml-2 inline-block" />
                          </button>
                        </div>
                      </>
                    )}
                    {(dialogs.index === 6 || info) && (
                      <>
                        <div className="border-2 border-blue-100 rounded-2xl mb-6 flex flex-col sm:flex-row px-6 py-5 text-center sm:text-left">
                          <svg
                            className="h-[80px] w-[80px] m-auto inline-block bg-blue-50 p-4 rounded-full fill-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                          >
                            <g>
                              <rect fill="none" height="24" width="24" />
                              <path d="M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M13.5,13 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5S13.5,12.17,13.5,13z M12,9c-2.73,0-5.06,1.66-6,4 c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9z M12,15.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 c1.38,0,2.5,1.12,2.5,2.5C14.5,14.38,13.38,15.5,12,15.5z" />
                            </g>
                          </svg>
                          <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold leading-relaxed mt-4 sm:mt-1.5 pt-4 sm:pl-6 relative inline-block flex-grow">
                            Review your application
                          </h1>
                        </div>
                        <h1 className="font-black text-center">
                          Almost done. Please review your information.
                        </h1>
                        <div className="bg-gray-100">
                          <div className="flex p-5 mt-10">
                            <div>
                              <div className="flex">
                                <h1 className="font-black text-sm">Name</h1>
                                <p className="text-slate-400 text-sm">
                                  : {name.firstName} {name.lastName}
                                </p>
                              </div>
                              <div className="flex mt-5">
                                <h1 className="font-black text-sm">SSN</h1>
                                <p className="text-slate-400 text-sm">
                                  : ***-***-6546
                                </p>
                              </div>
                              <div className="flex mt-5">
                                <h1 className="font-black text-sm">
                                  Recipient
                                </h1>
                                <p className="text-slate-400 text-sm">
                                  : Primary
                                </p>
                              </div>
                            </div>
                            <div className="flex ml-5">
                              <div>
                                <div className="flex">
                                  <h1 className="font-black text-sm">
                                    Early Access
                                  </h1>
                                  <p className="text-slate-400 text-sm">: Y</p>
                                </div>
                                <div className="flex mt-5">
                                  <h1 className="font-black text-sm">
                                    Selected Benefits
                                  </h1>
                                  <p className="text-slate-400 text-sm">
                                    : Social Security
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-full h-1 bg-gray-200 bottom-5" />
                        </div>
                        <div className="flex md:flex flex-col">
                          <div className="mt-10">
                            <h1 className="font-bold">
                              For confirmation provide your email address
                            </h1>
                            <h1 className="mt-5">Email Address</h1>
                            <input
                              type="text"
                              className="w-full h-[35px] rounded-3xl pl-2 mt-5 border border-gray-500 md:w-[30%]"
                              placeholder="Email Address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="flex mt-5">
                              <input
                                type="checkbox"
                                className="mt-2 border-gray-500 border"
                              />
                              <div className="ml-2">
                                <p>Receive important account alerts via SMS</p>
                                <p className="text-sm">
                                  Carrier rates may apply
                                </p>
                              </div>
                            </div>
                            <div className="flex mt-5">
                              <input
                                type="checkbox"
                                className="mt-2 border-gray-500 border"
                              />
                              <div className="ml-2">
                                <p>Opt-in for SMS Marketing</p>
                                <p className="text-sm">
                                  Carrier rates may apply
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex mt-5">
                              <h1 className="font-bold">
                                How do you currently receive your benefits?
                              </h1>
                              <img
                                src={star}
                                alt="star"
                                className="ml-1 w-1.5 h-1.5 mt-1.5"
                              />
                            </div>
                            <div className="flex mt-5">
                              <input
                                type="checkbox"
                                checked={select.value === 1}
                                className="mt-1.5 border-gray-500 border"
                                onChange={() => dispatch(setCheck(1))}
                              />
                              <div className="ml-2">
                                <p>Bank</p>
                              </div>
                            </div>
                            <div className="flex mt-5">
                              <input
                                type="checkbox"
                                checked={select.value === 2}
                                className="mt-1.5 border-gray-500 border"
                                onChange={() => dispatch(setCheck(2))}
                              />
                              <div className="ml-2">
                                <p>Debit Card / Direct Express</p>
                              </div>
                            </div>
                            <div className="flex mt-5">
                              <input
                                type="checkbox"
                                checked={select.value === 3}
                                className="mt-1.5 border-gray-500 border"
                                onChange={() => dispatch(setCheck(3))}
                              />
                              <div className="ml-2">
                                <p>Paper Check</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-12">
                          <p className="text-xs">
                            Avid Prepaid Visa Debit Card is issued by
                            Metropolitan Commercial Bank (Member FDIC) pursuant
                            to a license from Visa U.S.A Inc and is not
                            affiliated with Direct Express
                          </p>
                        </div>
                        <div className="flex justify-between mt-5">
                          <button
                            className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                            onClick={() => {
                              previousStep(4);
                              saveInfo(6);
                            }}
                          >
                            <FaAngleLeft className="mr-2 inline-block" />
                            Back
                          </button>
                          <button
                            className="bg-blue-500 w-[150px] text-white rounded-full py-3 text-[1.2em]"
                            onClick={() => {
                              nextstep(5)
                              saveInfo(7);
                              getAvidCard();
                              credsPreval();
                            }}
                          >
                            Finish
                            <FaAngleRight className="ml-2 inline-block" />
                          </button>
                        </div>
                      </>
                    )}
                    {(dialogs.index === 7 || final) && (
                      <>
                        <div className="text-center">
                          <div className="border-2 border-blue-100 rounded-2xl mb-6 flex flex-col sm:flex-row px-6 py-5 text-center sm:text-left">
                            <img
                              src={cardImg}
                              alt="cardImg"
                              className="h-[80px] m-auto"
                            />
                            <h1 className="text-blue-500 text-2xl sm:text-3xl font-bold leading-relaxed mt-4 sm:mt-1.5 pt-4 sm:pl-6 relative inline-block flex-grow">
                              Application submitted!
                            </h1>
                          </div>
                          <div className="flex flex-col">
                            <div className="text-center">
                              <img
                                src={imacPhone}
                                alt="imacPhone"
                                className="mt-8 inline-block max-w-sm w-full p-10"
                              />
                              <h1 className="mt-5">
                                Download our mobile app today and setup your
                                profile. You can also setup your profile later
                                using the confirmation number above in the
                                mobile app.
                              </h1>
                            </div>
                            <div className="mt-10 text-center">
                              <div className="inline-block mb-5">
                                <h1>Your confirmation number is:</h1>
                                <h1 className="font-black bg-green-500 text-white rounded md px-4 py-1 ml-2">
                                  NK72364349
                                </h1>
                              </div>
                              <h1 className="mt-5">
                                You will receive your Avid Prepaid Visa card in
                                5-7 days by USPS mail. We may contact you if
                                additional information is required.
                              </h1>
                              <h1>
                                If you have any questions, please contact us at
                                <h1 className="text-blue-500 ml-1">
                                  (801) 893-7716
                                </h1>
                              </h1>
                              <div className="flex mt-10">
                                <h1>Username</h1>
                                <img
                                  src={star}
                                  alt="star"
                                  className="w-1.5 h-1.5 ml-2 mt-2"
                                />
                                <h1 className="text-gray-400 ml-1">
                                  Note: Username must be a minimum of 8
                                  characters
                                </h1>
                              </div>
                              <input
                                type="text"
                                className="rounded-3xl mt-8 w-full py-1.5 border-gray-500 border"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                              <div className="mt-5">
                                <div className="flex mt-5">
                                  <h1>Enter Password</h1>
                                  <img
                                    src={star}
                                    alt="star"
                                    className="w-1.5 h-1.5 ml-2 mt-1"
                                  />
                                </div>
                                <input
                                  type="text"
                                  className="rounded-full border-gray-500 border w-full py-1.5 mt-5"
                                  value={password.first}
                                  onChange={(e) =>
                                    dispatch(setPassword(e.target.value))
                                  }
                                />{" "}
                              </div>
                              <div className="mt-5">
                                <div className="flex mt-5">
                                  <h1>Re-Enter Password</h1>
                                  <img
                                    src={star}
                                    alt="star"
                                    className="w-1.5 h-1.5 ml-2 mt-1"
                                  />
                                </div>
                                <input
                                  type="text"
                                  className="rounded-full border-gray-500 border w-full py-1.5 mt-5"
                                  value={password.confirm}
                                  onChange={(e) =>
                                    dispatch(setConfirmPassword(e.target.value))
                                  }
                                />
                              </div>
                              <div className="text-center">
                                <button
                                  className="rounded-3xl bg-blue-500 h-[50px] text-white w-full mt-10"
                                  onClick={() => saveInfo(8)}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
