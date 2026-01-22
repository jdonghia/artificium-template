import { useMemo } from "react";
import { TargetAndTransition, Transition, Variants } from "framer-motion";
import { Dots, Text } from "./style";
import { Props } from "./types";

export default function LoadingText({
  text,
  dotCount,
  dotDelay,
}: Props): JSX.Element {
  const dotTransition: Transition = useMemo<Transition>(
    () => ({
      delay: dotDelay,
      duration: 0.5,
      repeat: Infinity,
      repeatType: "reverse",
    }),
    [dotDelay]
  );

  const dotVariants: Variants = useMemo<Variants>(
    () => ({
      animate: {
        opacity: 1,
        y: [-2, 2, -2],
      },
      initial: {
        opacity: 0,
        y: 0,
      },
    }),
    []
  );

  const dots: number[] = useMemo<number[]>(
    () => Array.from({ length: dotCount }, (_, index) => index),
    [dotCount]
  );

  const textAnimate: TargetAndTransition = { opacity: 1, y: 0 };
  const textInitial: TargetAndTransition = {
    opacity: 0,
    y: -20,
  };
  const textTransition: Transition = { duration: 0.8 };

  return (
    <Text
      animate={textAnimate as any}
      className="mt-3"
      initial={textInitial as any}
      transition={textTransition}
    >
      {text}
      {dots.map((index: number) => (
        <Dots
          animate="animate"
          className="ms-1"
          initial="initial"
          key={index}
          transition={{ ...dotTransition, delay: index * dotDelay }}
          variants={dotVariants}
        >
          .
        </Dots>
      ))}
    </Text>
  );
}
