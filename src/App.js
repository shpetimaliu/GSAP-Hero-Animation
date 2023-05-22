import React, { useEffect, useRef } from "react";
import "./App.scss";
import { TimelineLite, Power3 } from "gsap";

import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";
import arrow from "./images/arrow-right.svg";

function App() {
  const appRef = useRef(null);
  const imagesRef = useRef(null);
  const contentRef = useRef(null);
  const tl = useRef(new TimelineLite({ delay: 0.8 })).current;

  useEffect(() => {
    const girlImage = imagesRef.current.firstElementChild;
    const boyImage = imagesRef.current.lastElementChild;
    const [headlineFirst, headlineSecond, headlineThird] = contentRef.current.children[0].children;
    const contentP = contentRef.current.children[1];
    const contentButton = contentRef.current.children[2];

    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(girlImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
      .from(boyImage, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(boyImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
      .staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      }, 0.15, "Start")
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);

    // Remove initial flash
    tl.set(appRef.current, { css: { visibility: "visible" } });
  }, [tl]);

  return (
    <div className="hero" ref={appRef}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={contentRef}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={imagesRef}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
