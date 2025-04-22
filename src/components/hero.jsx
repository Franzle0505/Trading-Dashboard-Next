import React, { useEffect, useRef, useState } from 'react';
import Button from "../common/buttons/clipButton";
import DefaultMessage from '../common/chatView/defaultMessage';
import NyxChat from '../common/chatView/nyxChat';
import TextAnimation from '../common/chatView/textAnimation';

function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fadeUpAnimation');

    const options = {
      root: null,
      rootMargin: '300px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, options);

    elements.forEach(element => {
      observer.observe(element);
    });

    // Cleanup function
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState(<NyxChat text={"binance.com"} />);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateText();
    }
  };

  const updateText = () => {
    setDisplayText(
      <NyxChat text={inputText} />
    );
  };

  return (
    <div className="hero" id="hero">
      <div className="nyxContainer bg-no-repeat bg-top">
        <div>
          <div className="mt-0 md:mt-[2px]">
            <div className="xl:relative xl:border-[0.5px] border-[#747474aa]">
              <div className="grid grid-cols-1 xl:grid-cols-2 z-[1]">
                <div className="text-white pt-[32px] ps-[6px] sm:ps-[16px]" style={{ zIndex: '1' }}>
                  <p className="font-[Moboto Mono] font-regular bg-gradient-to-r from-[#01FFC2] to-[#5AB0FF] inline-block text-transparent bg-clip-text text-left xl:text-[24px] lg:text-[24px] md:text-[21px] sm:text-[19px] text-[16px]">
                    Nyx Cipher
                  </p>

                  <div className="mt-[10px] xl:text-[55px] lg:text-[55px] md:text-[40px] sm:text-[30px] text-[26px] leading-9 sm:leading-loose md:leading-relaxed lg:leading-normal font-[VioletSans]">
                    <p>Your Fully Autonomous</p>
                    <p className="flex justify-start items-center">
                      <span>AI</span>
                      <span className="py-0 cornered text-center ml-4">
                        Research Agent
                      </span>
                    </p>
                  </div>

                  <p className="font-light text-[#EEEEEE] my-[11px] sm:my-[15px] md:my-[20px] lg:my-[26px] font-[RobotoMonoLight] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[16px] text-[14px] leading-tight tracking-widest pe-[6px]">
                    Experience Nyx Cipher's power: detect scams,
                    access real-time project data, and navigate the
                    crypto landscape with knowledge and precision.
                  </p>
                </div>

                <div className="bg-[url('../assets/images/bg_images/responsive/nyxbg.png')] bg-no-repeat bg-top bg-[length:100%] xl:bg-none row-span-2 text-white pt-[90px] xl:pt-0 relative flex" style={{ zIndex: '1' }}>
                  <div className="w-full h-full nyxBorderX xl:border-0">
                    <div className="h-full">

                      <div className="w-full flex flex-col justify-between border-[#747474aa] xl:border-s-[0.5px] text-white" style={{ height: 'calc(100%)' }}>
                        <div className="w-full border-t-[0.5px] xl:border-t-0 border-[#747474aa] items-center">
                          <div className="flex xl:ms-0 h-12 px-[12px] justify-between py-[12px] sm:py-[11px] md:py-[9px] lg:py-[5px] border-[#747474aa] border-b-[0.5px]">
                            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium tracking-widest">
                              Chat
                            </p>
                            <img
                              className="my-auto w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] md:w-[23px] md:h-[23px] lg:w-[26px] lg:h-[26px] z-[3]"
                              src="/assets/images/icon/upload_icon.png"
                              alt="zzz"
                            />
                          </div>
                        </div>
                        <div className="2xl:h-[450px] w-full pb-3">
                          <div className='p-3 min-h-[200px] overflow-auto max-h-[502px]'>
                            <div className="flex">
                              <img src="/assets/images/icon/nxybot.png" className="mr-[10px] w-[20px] h-[12px] sm:w-[24px] sm:h-[12px] md:w-[28px] md:h-[15px] my-auto" />
                              <span className="font-regular text-[14px] sm:text-[16px]md:text-[18px] font-[RobotoMono]">Nyx Cipher</span>
                            </div>
                            <div className="pl-[29px] sm:pl-[34px] md:pl-[37px] text-[#EEEEEE]" id='messageBox'>
                              {displayText}
                            </div>
                          </div>
                        </div>
                        <div className="w-full mt-auto xl:px-0">
                          <div className="border-[#747474aa] border-y-[0.5px] xl:border-b-0 h-12 messageBorderTop px-4 flex justify-between items-center">
                            <input
                              className="focusnone text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-light text-[#C5C5C5] font-[RobotoMono] my-auto bg-transparent border-none w-5/6 outline-none"
                              value={inputText}
                              onChange={handleInputChange}
                              onKeyDown={handleKeyDown}
                              placeholder="Message..."
                            />
                            <button className="my-auto " onClick={updateText}>
                              <img
                                className="w-[17px] h-[17px] sm:w-[20px] sm:h-[20px] md:w-[23px] md:h-[23px] lg:w-[26px] lg:h-[26px]"
                                src="/assets/images/icon/upload_icon1.png"
                                alt="zzz"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-[-2px] top-[88px] xl:hidden z-[2]">
                    <img src="../assets/images/bg_images/chatBox/responsive/top_right.png" alt="" />
                  </div>
                  <div className="absolute bottom-[-2px] left-[-3px] xl:hidden">
                    <img src="../assets/images/bg_images/chatBox/responsive/bottom_left.png" alt="" />
                  </div>
                  <div className="absolute bottom-[-2px] left-[-3px] xl:hidden">
                    <img src="../assets/images/bg_images/chatBox/responsive/bottom.png" alt="" />
                  </div>
                  <div className="absolute px-[3px] xl:hidden" style={{ zIndex: '-1', height: 'calc(100% - 90px)', width: 'calc(100% - 1px)' }}>
                    <div className="backdrop-blur-md bg-opacity-60 w-full h-full bg-[black]" style={{}}>
                    </div>
                  </div>
                </div>

                <div className="text-white px-[10px] pb-[5px]" style={{ zIndex: '1' }}>
                  <div className="flex justify-center lg:justify-start gap-[24px] pt-[24px] xl:pt-0">
                    <Button
                      detail={{ value: "Whitepaper", icon: true }}
                    />
                    <Button detail={{ value: "Buy $NYX" }} />
                  </div>
                  <p className="pt-[14px] xl:pt-[85px] pb-[46px] leading-tight tracking-widest text-[#EEEEEE] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-light font-[RobotoMonoLight]">
                    Let Nyx be your guide, deciphering community
                    insights to lead your crypto journey with clarity.
                  </p>
                </div>
              </div>


              <div className="absolute hidden xl:block top-[-3px] right-[55%] z-[1]">
                <img src="../assets/images/bg_images/chatBox/top.png" alt="" />
              </div>
              <div className="absolute hidden xl:block right-[-3px] top-[-3px] z-[1]">
                <img src="../assets/images/bg_images/chatBox/top_right_top.png" alt="" />
              </div>
              <div className="absolute hidden xl:block right-[-3px] top-[-3px] z-[1]">
                <img src="../assets/images/bg_images/chatBox/top_right_right.png" alt="" />
              </div>
              <div className="absolute hidden xl:block left-[-3px] bottom-[-3px] z-[1]">
                <img src="../assets/images/bg_images/chatBox/bottom_left.png" alt="" />
              </div>
              <div className="absolute hidden xl:block right-[-3px] bottom-[-3px] z-[1]">
                <img src="../assets/images/bg_images/chatBox/bottom_right_right.png" alt="" />
              </div>
              <div className="absolute hidden xl:block right-[-3px] bottom-[-3px] z-[1]">
                <img src="../assets/images/bg_images/chatBox/bottom_right_bottom.png" alt="" />
              </div>
              <div className="absolute hidden xl:block left-[-3px] top-[-3px] z-[1]">
                <img src="../assets/images/bg_images/chatBox/top_left.png" alt="" />
              </div>

              <div className="absolute top-0 hidden xl:block" style={{ zIndex: '0', height: 'calc(100%)', width: 'calc(100%)' }}>
                <div className="backdrop-blur-md bg-opacity-60 w-full h-full bg-[black]">
                </div>
              </div>

            </div>
          </div>

          <div className="w-full xl:bg-[url('../assets/images/bg_images/bottom.png')] bg-no-repeat bg-bottom">
            <div className="nyxNo border-b-0 pt-[8px] sm:pt-[11px] md:pt-[15px] lg:pt-[15px]">
              <svg
                className="ms-[15%] lg:ms-[17%] xl:ms-[19%] w-[70%] h-[70%] lg:w-[66px] lg:h-[48px]"
                viewBox="0 0 66 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2188 27.9375C28.2188 30.1667 27.9792 32.4062 27.5 34.6562C27.0208 36.9062 26.25 38.9688 25.1875 40.8438C24.125 42.6562 22.7083 44.1562 20.9375 45.3438C19.1667 46.5312 16.9688 47.125 14.3438 47.125C12.6146 47.125 11.0625 46.8646 9.6875 46.3438C8.3125 45.8021 7.125 45.0521 6.125 44.0938C4.02083 42.1146 2.53125 39.6667 1.65625 36.75C0.802083 33.8333 0.375 30.8958 0.375 27.9375V19.5625C0.375 17.3542 0.625 15.0833 1.125 12.75C1.625 10.3958 2.42708 8.30208 3.53125 6.46875C4.63542 4.63542 6.0625 3.15625 7.8125 2.03125C9.5625 0.90625 11.7188 0.34375 14.2812 0.34375C16.0312 0.34375 17.6146 0.635417 19.0312 1.21875C20.4479 1.78125 21.6458 2.52083 22.625 3.4375C24.6042 5.29167 26.0208 7.70833 26.875 10.6875C27.7292 13.6667 28.1771 16.625 28.2188 19.5625V27.9375ZM2.8125 34.5L25.4688 11.6562C25.0938 10.3438 24.5938 9.10417 23.9688 7.9375C23.3438 6.77083 22.5833 5.75 21.6875 4.875C20.7708 4 19.6979 3.3125 18.4688 2.8125C17.2604 2.29167 15.8646 2.03125 14.2812 2.03125C11.9271 2.03125 10.0104 2.53125 8.53125 3.53125C7.07292 4.53125 5.8125 5.89583 4.75 7.625C3.8125 9.14583 3.125 11.0208 2.6875 13.25C2.27083 15.4792 2.0625 17.5833 2.0625 19.5625V27.875C2.0625 28.9583 2.11458 30.0625 2.21875 31.1875C2.34375 32.2917 2.54167 33.3958 2.8125 34.5ZM26.5312 27.875V19.5625C26.5104 18.5625 26.4479 17.5521 26.3438 16.5312C26.2604 15.4896 26.1146 14.4583 25.9062 13.4375L3.28125 36.25C3.67708 37.5 4.1875 38.6875 4.8125 39.8125C5.4375 40.9167 6.19792 41.8854 7.09375 42.7188C7.98958 43.5521 9.03125 44.2188 10.2188 44.7188C11.4271 45.1979 12.8021 45.4375 14.3438 45.4375C16.6979 45.4375 18.6667 44.8854 20.25 43.7812C21.8542 42.6771 23.0938 41.2604 23.9688 39.5312C24.9062 37.8438 25.5625 35.9688 25.9375 33.9062C26.3125 31.8229 26.5104 29.8125 26.5312 27.875ZM56.2962 46.5H54.5775V3.1875L41.265 9.40625V7.53125L55.7025 1H56.2962V46.5Z"
                  fill="#747474aa"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="nyxBorderTop">
        <div className="nyxContainer">
          <div className="nyxBorderX">
            <div className="grid grid-cols-10 border-collapse font-[RobotoMono]">
              <div className="xl:col-span-6 lg:col-span-10 col-span-10 grid grid-cols-2 nyxBorderBottom xl:border-0 lg:border border">
                <div className="col-span-1 nyxBorderRight grid place-items-center xl:py-[24px] lg:py-[20px] md:py-[16px] sm:py-[10px] py-[10px]">
                  <a href="" className="flex">
                    <img
                      className="my-auto me-[20px] xl:w-[62px] xl:h-[42px] lg:w-[48px] lg:h-[32.5px] md:w-[35px] md:h-[23.7px] sm:w-[35.53px] sm:h-[24.07px] w-[35.53px] h-[24.07px]"
                      src="./assets/images/icon/youtube.png"
                      alt="Youtube Icon"
                    />
                    <span className="xl:text-[70px] lg:text-[55px] md:text-[40px] sm:text-[30px] text-[24px] text-white leading-none">
                      20K+
                    </span>
                  </a>
                  <p className="text-white text-[12px] font-light md:text-[18px] md:font-regular mt-[3px] md:mt-[8px]">
                    YouTube channels
                  </p>
                </div>
                <div className="col-span-1 nyxBorderRight xl:border-[1px] lg:border-[0px] border-[0px] grid place-items-center xl:py-[24px] lg:py-[20px] md:py-[16px] sm:py-[10px] py-[10px]">
                  <a href="" className="flex">
                    <img
                      className="my-auto me-[20px] xl:w-[62px] xl:h-[42px] lg:w-[48px] lg:h-[32.5px] md:w-[35px] md:h-[23.7px] sm:w-[35.53px] sm:h-[24.07px] w-[35.53px] h-[24.07px]"
                      src="./assets/images/icon/discord.png"
                      alt="Discord Icon"
                    />
                    <span className="xl:text-[70px] lg:text-[55px] md:text-[40px] sm:text-[30px] text-[24px] text-white leading-none">
                      10K+
                    </span>
                  </a>
                  <p className="text-white text-[12px] font-light md:text-[18px] md:font-regular mt-[3px] md:mt-[8px]">
                    Discord servers
                  </p>
                </div>
              </div>

              <div className="xl:col-span-3 lg:col-span-7 col-span-7 nyxBorderRight grid place-items-center xl:py-[24px] lg:py-[20px] md:py-[16px] sm:py-[10px] py-[10px]">
                <a href="" className="flex">
                  <img
                    className="my-auto me-[20px] xl:w-[62px] xl:h-[42px] lg:w-[48px] lg:h-[32.5px] md:w-[35px] md:h-[23.7px] sm:w-[35.53px] sm:h-[24.07px] w-[35.53px] h-[24.07px]"
                    src="./assets/images/icon/telegram.png"
                    alt="Telegram Icon"
                  />
                  <span className="xl:text-[70px] lg:text-[55px] md:text-[40px] sm:text-[30px] text-[24px] text-white leading-none">
                    30K+
                  </span>
                </a>
                <p className="text-white text-[12px] font-light md:text-[18px] md:font-regular mt-[3px] md:mt-[8px]">
                  Telegram channels
                </p>
              </div>
              <div className="xl:col-span-1 lg:col-span-3 col-span-3 nyxBorder text-center">
                <img
                  className="mx-auto mt-[15px] md:mt-[21.75px] xl:w-[76px] xl:h-[71px] lg:w-[58.8px] lg:h-[57px] md:w-[41.68px] md:h-[41px] sm:w-[26.2px] sm:h-[24.52px] w-[26.2px] h-[24.52px]"
                  src="./assets/images/icon/twitter.png"
                  alt="Twitter Icon"
                />
                <span className="text-[#747474aa] font-light xl:text-[37px] lg:text-[29px] md:text-[21px] sm:text-[12px] text-[12px]">
                  Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
