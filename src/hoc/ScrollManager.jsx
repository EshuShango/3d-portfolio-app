import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const ScrollManager = (props) => {
  const { section, onSectionChange } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, data.el[section]);

  // This code is using the useFrame hook to perform some operations related to scrolling.

  // The variable scrollData is assigned the value of the current scroll position.

  // The variable lastCurScroll is assigned the value of lastScroll.current, and at the same time, lastScroll.current is updated with the value of scrollData.

  // There is a conditional statement using the isAnimating.current variable. If it is true, the value of lastCurScroll is returned, otherwise, an arrow function that returns nothing is defined but not executed.

  // Another conditional statement checks if the scrollData is greater than the last scroll position and if the current section is the first section (curSection === 0). If both conditions are true, the onSectionChange function is called with the argument 1. Otherwise, an arrow function that returns nothing is defined but not executed.

  // Finally, there is a comparison between scrollData and a fraction (1 / (data.pages - 1)). If scrollData is less than both the last scroll position and the fraction, nothing happens.

  useFrame(() => {
    const scrollData = data.scroll.current;
    const lastCurScroll = (lastScroll.current = scrollData);

    (isAnimating.current)
      ? lastCurScroll
      : () => {
          return;
        };
    const curSection = Math.floor(data.scroll.current * data.pages);
    (scrollData < lastScroll.current && curSection === 0)
    ? onSectionChange(1)
    : () => {
        return;
      };

    (scrollData > lastScroll.current && curSection === 0)
      ? onSectionChange(1)
      : () => {
          return;
        };
    scrollData < lastScroll.current && scrollData < 1 / (data.pages - 1);
  });

  return null;
};
