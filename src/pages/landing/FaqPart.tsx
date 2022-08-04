import React, { useState } from "react";
import Container from "components/Container";
import { FaChevronRight } from "react-icons/fa";

import ScrollAnimation from "react-animate-on-scroll";

const faqData = [
  {
    title: <>Why Avid <span style={{'fontFamily': 'sans-serif'}}>?</span></>,
    text: "Digital banking at its best! With Avid Prepaid, you get your payments early. By signing up for Early Access, you can receive your government benefits up to 6 days early and receive payroll up to 2 days early.<sup>1</sup> Avid Prepaid has no overdraft fees or minimum balance.<sup>2</sup> You control your account with Avid Prepaid's robust mobile app, security, and alert features such as real time alerts, account shield<sup>3</sup>, and transaction history. Getting started is easy, just enter your mobile number and click \"Let's Get Started\" to sign up today!",
  },
  {
    title: <>Which Avid Prepaid Card is right for me <span style={{'fontFamily': 'sans-serif'}}>?</span></>,
    text: "Avid has two types of debit cards to offer:<br />Avid Go! - This card is a pay as you go card. You do not have to pay any monthly or annual fees, and there are low transaction fees.<sup>2</sup><br/>Avid Select - With Avid select you pay a low monthly fee, but there are no swipe fees associated with point of sale transactions.<sup>2</sup>",
  },
  {
    title: <>What is Early Access <span style={{'fontFamily': 'sans-serif'}}>?</span></>,
    text: "Early Access is exactly what it sounds like. Traditional banks usually hold your paychecks before depositing it into your bank account. When you enroll in Avid Prepaid's Early Access, Avid Prepaid will switch your next payment to be received onto your Avid Prepaid Card Account when we receive notice of your payment up to 6 days early for government benefits and up to 2 days early for payroll or other direct deposits.<sup>1</sup>",
  },
  {
    title: <>What type of government benefits can I receive on my card <span style={{'fontFamily': 'sans-serif'}}>?</span></>,
    text: "Most benefits from the Federal Government are eligible. These are some of the most common benefits:<br/>Social Security payments<br/>Pension and other regular payments<br/>Supplemental Security Income (SSI)<br/>Social Security Disability Insurance (SSDI)<br/>Veterans Administration Compensation and Pension",
  },
  {
    title: <>How do I sign up <span style={{'fontFamily': 'sans-serif'}}>?</span></>,
    text: 'There is no charge to create an account online.<sup>6</sup> Get started today by entering your mobile number and click "Let\'s Get Started"!',
  },
  {
    title: <>Where can I use my Avid Prepaid Visa Debit card account <span style={{'fontFamily': 'sans-serif'}}>?</span></>,
    text: "Your Avid Prepaid card can be used anywhere that Visa debit is accepted. Most retailers, gas stations, pharmacies, as well as eCommerce stores accept the card. You can also access cash at virtually any ATM nationwide or at most bank branches. A digital version of your card, available through the mobile app and site, can be used online and you can add your card to the preferred mobile wallet of your choice including Apple Pay, Google Pay, and Samsung Pay.",
  },
  {
    title: <>Are my funds FDIC insured <span style={{'fontFamily': 'sans-serif'}}>?</span></>,
    text: "Your money is safe with Avid Prepaid. Our top priority is protecting our customers - that starts with keeping your information and money secure. Funds are insured up to $250,000 through our issuing bank, Metropolitan Commercial Bank, Member FDIC",
  },
  {
    title:
      "How Prepaid Cards directly changed the way people received their Government Benefits.",
    text: "How Prepaid Cards directly changed the way people received their Government Benefits.<br/><br/>In 2013, in order to be more efficient, secure, and save American taxpayers money, the government officially made the move away from paper checks. Before the move to electronic payments was made, hundreds of thousands of government benefit checks were reported as lost or stolen, costing millions of dollars to American taxpayers.<br/><br/>Starting in 2013, the Treasury Department required that all new recipients of federal benefits programs, including Social Security, SSI, Veterans benefits, and government retirement plans, needed either a bank account for direct deposit or they were issued a prepaid, government debit card called Direct Express. Although it was mandated in 2013, the move away from paper checks actually began a couple years earlier, in 2011.<br/><br/>This left recipients with 2 options; direct deposit into a bank account or a prepaid, government issued debit card. If they chose the prepaid debit card option, their only choice was to use Direct Express.<br/><br/>That was then. Today, it’s important to note that those who do receive government benefits via a prepaid debit card have more options available. Companies such as Avid Prepaid offer debit cards that give recipients earlier access to their benefits and more reliable customer service.<br/><br/>You may ask, does Direct Express deposit early? The answer is no, Federal benefits are automatically deposited to the prepaid debit card account on the day of the payment.<br/><br/>The Avid Prepaid card is an option that does provide early access. Avid Prepaid processes the deposits as soon as the Government communicates that it’s sending a payment to the customer. This usually occurs several days before the actual payment date. For example, SSI and VA payments are paid on the first of each month. With the Avid Prepaid card, they’re credited to the account up to six days early every month and all other payments are credited up to two days early.<br/><br/>Many things have changed since the government made the move away from paper checks in 2013. Today, there are more options available for government benefit recipients. Those who choose the Direct Express prepaid debit card option can now make a well-educated decision by researching alternate companies to receive their government benefits from. Like Avid Prepaid, who offers award-winning customer service and perks such as receiving their benefits up to six days early.<br/><br/><small>Avid Prepaid Visa Debit Card is issued by Metropolitan Commercial Bank (Member FDIC) pursuant to a license from Visa U.S.A. Inc and is not affiliated with Direct Express<sup>®</sup><small>",
  },
];

const FaqCard = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleToggle = (id: number) => {
    const faqElem: any = document.getElementById("faq" + id);
    const faqContentElem: any = document.getElementById("faq-content" + id);
    if (open) {
      faqContentElem.style.height = 0;
      faqContentElem.classList.remove('opacity-0');
    } else {
      faqContentElem.style.height = faqElem.getBoundingClientRect().height + "px";
      faqContentElem.classList.add('opacity-100');
    }
    setOpen((prev) => !prev);
  };
  return (
    <div
      className="border-blue-100 border-b-[3px]"
      style={{ contain: "content" }}
      onClick={() => handleToggle(props.id)}
    >
      <div className="flex cursor-pointer justify-between py-5 text-xl font-semibold items-center">
        <p className="text-gray-600 hover:text-blue-500">{props.title}</p>
        <div className="w-[25px]">
          <FaChevronRight
            size={25}
            fill="#BFDBFE"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0)" }}
          />
        </div>
      </div>
      <div id={"faq-content" + props.id} className="h-0 opacity-0 duration-300">
        <p
          id={"faq" + props.id}
          dangerouslySetInnerHTML={{ __html: props.text }}
          className="text-[1.2em] text-gray-400 pb-5 -tracking-[1px]"
        />
      </div>
    </div>
  );
};

const FaqPart = () => {
  return (
    <div id="faq" className="bg-white relative pb-24">
      <ScrollAnimation animateOnce={true} animateIn="animate__animated animate__fadeInLeft">
        <Container>
          <div className="block relative">
            <h1 className="text-blue-500 text-3xl font-bold leading-[44px] mt-20 relative mb-[32px] inline-block">
              Frequently Asked Questions
            </h1>
            <div className="flex flex-col faq-container">
              {faqData.map((item: any, key: any) => (
                <FaqCard key={key} id={key} title={item.title} text={item.text} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg font-medium pt-4">
              <strong>Have more Questions<span style={{'fontFamily': 'sans-serif'}}>?</span>&nbsp;</strong>
              Find more information by&nbsp;
              <a
                href="https://avidprepaid.com/"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                clicking here
              </a>
            </p>
          </div>
        </Container>
      </ScrollAnimation>
    </div>
  );
};

export default FaqPart;
