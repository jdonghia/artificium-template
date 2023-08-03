const fadeAnimation = {
  initial: { opacity: 0, x: -25 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export { fadeAnimation };
