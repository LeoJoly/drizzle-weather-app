import { gsap } from "gsap";

export const openingWindow = (node1, node2, node3) => {
  gsap.to(node3, {
    duration: 0,
    css: {display: "block"},
  });
  gsap.to([node1, node2], {
    duration: 0,
    opacity: 1,
    height: "100%",
  });
  gsap.from([node1, node2], {
    duration: .8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "poxer3.inOut",
    stagger: {
      amount: 0.1,
    }
  });
};

export const closingWindow = (node1, node2, node3) => {
  gsap.to([node1, node2], {
    duration: .8,
    height: 0,
    ease: 'power3.inOut',
    stagger: {
      amount: .07
    }
  });
  gsap.to(node3, {
    duration: 1,
    css: {display: "none"},
  });
}