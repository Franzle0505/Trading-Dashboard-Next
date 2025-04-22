import React, { useState, useEffect } from "react";

const CipherText = ({ detail }) => {
  const [text, setText] = useState(detail.value);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let interval = null;

  useEffect(() => {
    defaultAnimation();
  }, [])

  const defaultAnimation = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 150);
  };

  const handleMouseOver = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setText(detail.value);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  return (
      <span className="textAnimationButton py-0 xl:py-[20px]" onMouseOver={handleMouseOver}>
        {text}
      </span>
  );
};

export default CipherText;
