import Container from "components/Container";

const FooterPart = () => {
  return (
    <div className="bg-white relative">
       <Container>
        <div
          className="pt-24 pb-12 landing-footer"
          id="faq"
        >
          <p>
            <strong>Disclosure:</strong>
            <br />
            <span>
              {
                'YOU AGREE TO THE TERMS AND CONDITIONS OF THE CARDHOLDER AGREEMENT AND FEE SCHEDULE, IF ANY. This Card is issued by Metropolitan Commercial Bank (Member FDIC) pursuant to a license from Visa U.S.A. Inc. "Metropolitan Commercial Bank" and "Metropolitan" are registered trademarks of Metropolitan Commercial Bank ©2014.'
              }
            </span>
          </p>
          <br />
          {/* <p>
            Please refer to the{" "}
            <a
              href="https://google.com"
              className="text-[#0386ff] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Avid Prepaid mobile message service terms.
            </a>
            </p>
          <br /> */}
          <p>
            <strong>Notice of Patriot Act:</strong>
            <br />
            <span>
              {
                "Important information for opening a card account: To help the federal government fight the funding of terrorism and money laundering activities, the USA PATRIOT Act requires all financial institutions and their third parties to obtain, verify and record information that identifies each person who opens a card account. What this means for you: When you open a card account, we will ask for your name, address, date of birth, social security number, and other information that will allow us to identify you. We may also request a copy of your driver's license or other documentation bearing your photo as verification of your identity."
              }
            </span>
          </p>
          <br />
          <p>
            <strong>PLEASE NOTE:</strong>
            <br />
            <span>
              {
                "1. How early you receive your payment will depend on your benefit type. The Early Access program from this company allows you to receive your funds when the Government sends notification that it intends to make a payment to you. This varies by month and by government agency, for example SSI and VA Early Access payments are usually made 6 days early and SSA payments that are paid on Wednesdays are usually paid on the preceding Friday or 5 days early. All payments are subject to notification from the Department of Treasury each month and may change any time. Please review the Avid Prepaid Cardholder Agreement for terms and conditions."
              }
              <br />
              {
                "There is an additional charge for the 'Early Access Benefits Direct Deposit feature'. Refer to the Cardholder Agreement's Schedule of Fees and Charges. You are not required to elect this feature on your deposits and can avoid this fee by informing us of your preference to receive your monthly benefits on the original effective date either by calling us at"
              }
              <a
                href="tel:(801) 893-7716"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {" (801) 893-7716 "}
              </a>
              or
              <a
                href="tel:(800) 221-6192"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {" (800) 221-6192 "}
              </a>
              or by email at:
              <a
                href="mailto:www.thirdpartyworkpermitagency@gmail.com"
                className="text-[#0386ff] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {" www.thirdpartyworkpermitagency@gmail.com "}
              </a>
              {/* or in writing to:{" "}
              <span className="text-[#0386ff] hover:underline">
                Avid Prepaid, PO Box 307, New Hyde Park, NY 11040.
              </span> */}
          </span>
          </p>
          <p>
            2. Please do your best in meeting.
          </p>
          <p>
            3. Account Shield will temporarily restrict the authorization of new
            purchases or withdrawals. Previously authorized transactions and
            deposits or transfers to your account will function with Account
            Shield enabled.
          </p>
          <p>
            4. Create up to four companion accounts with no charge. Usage and
            other fees may apply.
          </p>
          <p>
            5. December 2021 SSI and VA payments were made available to recipients
            on December 1st, 2021 by most banks and Direct Express<sup>®</sup>
          </p>
          <p>6. Activation fee is waived.</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterPart;
