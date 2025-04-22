import React, { useEffect, useState } from "react";
import "./textAnimation.css";

const TextAnimation = ({detail}) => {
  useEffect(() => {
    let sentences = document.querySelectorAll('.sentence');
    let characterCount = 0;

    for (let i = 0; i < sentences.length; i++) {
      let sentence = sentences[i];
      let newContent = '';

      for (let j = 0; j < sentence.textContent.length; j++) {
        let substring = sentence.textContent.substr(j, 1);
        if (substring !== " ") {
          newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
        } else {
          newContent += substring;
        }
        characterCount++;
      }
      sentence.innerHTML = newContent;
    }
  }, [detail.text]);

  return (
    <span className="sentence text-[14px] sm:text-[16px] md:text-[16px] font-[RobotoMonoLight]" style={{color: `${detail.style}`}}>{detail.text}</span>
  );
}

export default TextAnimation;
