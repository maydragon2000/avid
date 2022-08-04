/**
 * @import
 */

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

/**
 * @define Main component
 */

const ScrollTop = () => {
  const [enable, setEnable] = useState(false);
  let timeout: any;
  const handleOnScroll = (isMounted: any) => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      isMounted && setEnable(true);
      clearTimeout(timeout);
    } else {
      isMounted && setEnable(false);
    }
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      window.addEventListener("scroll", () => handleOnScroll(isMounted));
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", () => {
        return;
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={`md:block cursor-pointer hidden fixed bottom-0 right-3 scroll-top-btn text-white p-4 ${
        enable ? "opacity-75" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </div>
  );
};
export default ScrollTop;
