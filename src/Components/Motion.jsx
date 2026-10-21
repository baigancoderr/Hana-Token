import { useMemo } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const viewport = { once: true, amount: 0.15 };

function useMotionElement(as) {
  return useMemo(
    () => (typeof as === "string" ? motion[as] || motion.div : motion.create(as)),
    [as],
  );
}

export function Reveal({ as = "div", children, ...props }) {
  const Element = useMotionElement(as);

  return (
    <Element
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={itemVariants}
      {...props}
    >
      {children}
    </Element>
  );
}

export function StaggerGroup({ as = "div", children, ...props }) {
  const Element = useMotionElement(as);

  return (
    <Element
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={groupVariants}
      {...props}
    >
      {children}
    </Element>
  );
}

export function StaggerItem({ as = "div", children, ...props }) {
  const Element = useMotionElement(as);

  return (
    <Element variants={itemVariants} {...props}>
      {children}
    </Element>
  );
}
