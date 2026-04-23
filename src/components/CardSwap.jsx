import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils';

export const Card = ({ children, className }) => {
  return (
    <div className={cn("w-full h-full", className)}>
      {children}
    </div>
  );
};

export const CardSwap = ({
  children,
  width = 400,
  height = 300,
  cardDistance = 20,
  verticalDistance = 10,
  delay = 3000,
  pauseOnHover = true,
  skewAmount = 2,
  easing = "easeInOut",
  className
}) => {
  const cards = React.Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (pauseOnHover && isHovered) return;
    
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, delay);

    return () => clearInterval(timer);
  }, [cards.length, delay, pauseOnHover, isHovered]);

  const getCardStyle = (i) => {
    const total = cards.length;
    const diff = (i - index + total) % total;
    
    // We want the current card (diff === 0) to be on top
    // Cards behind (diff > 0) should be smaller and shifted
    
    const isTop = diff === 0;
    const zIndex = total - diff;
    const scale = 1 - diff * 0.05;
    const opacity = 1 - diff * 0.3;
    const x = diff * cardDistance;
    const y = -diff * verticalDistance;
    const skew = isTop ? 0 : (diff % 2 === 0 ? skewAmount : -skewAmount);

    return {
      zIndex,
      scale,
      opacity,
      x,
      y,
      skewX: skew,
      cursor: isTop ? 'pointer' : 'default',
    };
  };

  return (
    <div 
      className={cn("relative flex items-center justify-center", className)}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="popLayout">
        {cards.map((card, i) => {
          const style = getCardStyle(i);
          return (
            <motion.div
              key={i}
              className="absolute w-full h-full shadow-2xl rounded-2xl overflow-hidden"
              initial={false}
              animate={style}
              transition={{
                type: easing === "elastic" ? "spring" : "tween",
                stiffness: 260,
                damping: 20,
                duration: 0.6
              }}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              {card}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default CardSwap;
