import { useWindowSize } from "@reactuses/core";

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};

const useWindowResize = () => {
  const { width = 0 } = useWindowSize();

  return {
    isMobile: width < BREAKPOINTS.mobile,
    isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
    isDesktop: width >= BREAKPOINTS.tablet,
  };
};

export { useWindowResize };
