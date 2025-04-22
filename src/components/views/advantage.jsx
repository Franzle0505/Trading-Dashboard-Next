import { useState } from "react";

function Advantage() {
  const [count, setCount] = useState(0);

  return (
    <div className="advantage nyxBorderTop nyxContainer" id="features">
      <div className="nyxBorderX">
        <div>
          <div className="w-full relative">
            <div className="nyxNo ms-auto border-t-0 border-e-0 pt-[8px] sm:pt-[11px] md:pt-[15px] lg:pt-[15px]">
              <svg
                className="ms-[15%] lg:ms-[17%] xl:ms-[19%] w-[70%] h-[70%] lg:w-[66px] lg:h-[48px]"
                viewBox="0 0 66 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM47.015 22.9375H50.4837C51.9421 22.9167 53.4004 22.7083 54.8587 22.3125C56.3379 21.8958 57.6608 21.2812 58.8275 20.4688C59.9942 19.6562 60.9421 18.6458 61.6712 17.4375C62.4004 16.2083 62.765 14.7604 62.765 13.0938C62.765 11.4688 62.4837 10.0104 61.9212 8.71875C61.3587 7.40625 60.5775 6.29167 59.5775 5.375C58.5775 4.47917 57.39 3.79167 56.015 3.3125C54.6608 2.8125 53.1921 2.5625 51.6087 2.5625C49.9837 2.5625 48.4629 2.82292 47.0462 3.34375C45.6504 3.86458 44.4317 4.59375 43.39 5.53125C42.3483 6.48958 41.515 7.63542 40.89 8.96875C40.265 10.3021 39.9212 11.7917 39.8587 13.4375H38.1712C38.2337 11.5625 38.6192 9.85417 39.3275 8.3125C40.0358 6.77083 40.9942 5.44792 42.2025 4.34375C43.4108 3.23958 44.8171 2.38542 46.4212 1.78125C48.0254 1.17708 49.7546 0.875 51.6087 0.875C53.4421 0.875 55.14 1.16667 56.7025 1.75C58.265 2.33333 59.6296 3.15625 60.7962 4.21875C61.9421 5.30208 62.8379 6.60417 63.4837 8.125C64.1296 9.64583 64.4525 11.3438 64.4525 13.2188C64.4525 14.6146 64.2129 15.8854 63.7337 17.0312C63.2546 18.1562 62.6192 19.1562 61.8275 20.0312C61.015 20.9062 60.0671 21.6562 58.9837 22.2812C57.9212 22.8854 56.7858 23.375 55.5775 23.75C56.9317 24.0625 58.2025 24.5208 59.39 25.125C60.5983 25.7292 61.6504 26.4896 62.5462 27.4062C63.4421 28.3229 64.1504 29.4062 64.6712 30.6562C65.1921 31.9062 65.4525 33.3333 65.4525 34.9375C65.4525 36.8958 65.0983 38.6562 64.39 40.2188C63.6817 41.7812 62.7233 43.1042 61.515 44.1875C60.2858 45.2917 58.8379 46.1458 57.1712 46.75C55.5254 47.3333 53.765 47.625 51.89 47.625C49.9108 47.625 48.0462 47.3125 46.2962 46.6875C44.5462 46.0625 43.015 45.1667 41.7025 44C40.3692 42.8542 39.2962 41.4688 38.4837 39.8438C37.6921 38.1979 37.265 36.3646 37.2025 34.3438H38.89C38.9525 36.1146 39.3379 37.7188 40.0462 39.1562C40.7754 40.5729 41.7337 41.7812 42.9212 42.7812C44.0879 43.8021 45.4421 44.5833 46.9837 45.125C48.5254 45.6667 50.1608 45.9375 51.89 45.9375C53.5567 45.9375 55.1087 45.6979 56.5462 45.2188C58.0046 44.7396 59.265 44.0312 60.3275 43.0938C61.39 42.1771 62.2233 41.0521 62.8275 39.7188C63.4525 38.3646 63.765 36.8125 63.765 35.0625C63.765 33.1458 63.3796 31.5312 62.6087 30.2188C61.8587 28.9062 60.8692 27.8438 59.64 27.0312C58.39 26.2188 56.9629 25.6354 55.3587 25.2812C53.7754 24.9062 52.1504 24.7083 50.4837 24.6875H47.015V22.9375Z"
                  fill="#747474aa"
                />
              </svg>
            </div>
          </div>

          <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px] xl:mt-[38px] lg:mt-[20px] md:mt-[6px] sm:mt-0 md:mb-[44px] sm:mb-[42px] mb-[42px]">
            <p className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text font-regular text-[16px] sm:text-[24px] font-[RobotoMono]">
              Nyx Features
            </p>
            <h1 className=" text-white text-[26px] sm:text-[35px] md:text-[57px] font-[VioletSans]">
              The Only Crypto Companion You'll Need.
            </h1>
          </div>
        </div>

        <div className="nyxBorderTop  bg-[#070C10] bg-[url('../assets/images/bg_images/rightLighting.png')] bg-no-repeat bg-right-top">
          <div className="gridLine xl:pt-[64px] lg:pt-[40px] md:pt-[24px] sm:pt-[12px] pt-[12px] xl:pb-[64px] lg:pb-[40px] md:pb-[24px] pb-[24px]">
            <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px] font-[RobotoMono] flex flex-col gap-12">
              <div className="vibration col-span-2 xl:hidden fadeUpAnimation">
                <div className="shape-container">
                  <div className="shape-outer customize-outer">
                    <div className="shape-inner customize-inner relative">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Data Aggregation
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          Nyx doesn't just analyze crypto data; he pioneers it,
                          assessing multiple metrics to rate users and
                          influencers. With unmatched bot detection skills and
                          precise data verification, Nyx stands alone in his
                          mastery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-right"
                    src="./assets/images/nyxBorderBox/border-right.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 hidden xl:block fadeUpAnimation">
                <div className="shape-container_44">
                  <div className="shape-outer_44 customize-outer_44">
                    <div className="shape-inner_44 customize-inner_44">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Data Aggregation
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          Nyx doesn't just analyze crypto data; he pioneers it,
                          assessing multiple metrics to rate users and
                          influencers. With unmatched bot detection skills and
                          precise data verification, Nyx stands alone in his
                          mastery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left_44"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right_44"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-top_44"
                    src="./assets/images/nyxBorderBox/border-top.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 xl:hidden fadeUpAnimation">
                <div className="shape-container">
                  <div className="shape-outer customize-outer">
                    <div className="shape-inner customize-inner relative">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Process Data in Real Time
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          Stay ahead of the curve with Nyx, who processes data
                          instantly, detecting negative sentiments and analyzing
                          content in the blink of an eye, even devouring lengthy
                          Alex Becker videos moments after release.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-right"
                    src="./assets/images/nyxBorderBox/border-right.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 hidden xl:block fadeUpAnimation">
                <div className="shape-container_44">
                  <div className="shape-outer_44 customize-outer_44">
                    <div className="shape-inner_44 customize-inner_44">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Process Data in Real Time
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          Stay ahead of the curve with Nyx, who processes data
                          instantly, detecting negative sentiments and analyzing
                          content in the blink of an eye, even devouring lengthy
                          Alex Becker videos moments after release.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left_44"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right_44"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-top_44"
                    src="./assets/images/nyxBorderBox/border-top.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 xl:hidden fadeUpAnimation">
                <div className="shape-container">
                  <div className="shape-outer customize-outer">
                    <div className="shape-inner customize-inner relative">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Simplifies Data
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          Let Nyx be your guide through the labyrinth of crypto
                          complexity. From decrypting encrypted data to
                          simplifying intricate whitepapers and contracts, Nyx's
                          expertise ensures that even the most complex
                          information becomes accessible to all.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-right"
                    src="./assets/images/nyxBorderBox/border-right.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 hidden xl:block fadeUpAnimation">
                <div className="shape-container_44">
                  <div className="shape-outer_44 customize-outer_44">
                    <div className="shape-inner_44 customize-inner_44">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Simplifies Data
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          Let Nyx be your guide through the labyrinth of crypto
                          complexity. From decrypting encrypted data to
                          simplifying intricate whitepapers and contracts, Nyx's
                          expertise ensures that even the most complex
                          information becomes accessible to all.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left_44"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right_44"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-top_44"
                    src="./assets/images/nyxBorderBox/border-top.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 xl:hidden fadeUpAnimation">
                <div className="shape-container">
                  <div className="shape-outer customize-outer">
                    <div className="shape-inner customize-inner relative">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Detect: Trends
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          Nyx serves as your trusted navigator through the
                          ever-shifting landscape of trends, spotting emerging
                          patterns within minutes. With an unparalleled ability
                          to distinguish genuine trends from artificial ones,
                          Nyx empowers you to make decisions with unwavering
                          confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-right"
                    src="./assets/images/nyxBorderBox/border-right.png"
                  />
                </div>
              </div>

              <div className="vibration col-span-2 hidden xl:block fadeUpAnimation">
                <div className="shape-container_44">
                  <div className="shape-outer_44 customize-outer_44">
                    <div className="shape-inner_44 customize-inner_44">
                      <div className="p-[50px]">
                        <div className="box">
                          <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                            Detect: Trends
                          </p>
                        </div>
                        <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                          Nyx serves as your trusted navigator through the
                          ever-shifting landscape of trends, spotting emerging
                          patterns within minutes. With an unparalleled ability
                          to distinguish genuine trends from artificial ones,
                          Nyx empowers you to make decisions with unwavering
                          confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="border-bottom-left_44"
                    src="./assets/images/nyxBorderBox/border-bottom-left.png"
                  />
                  <img
                    className="border-top-right_44"
                    src="./assets/images/nyxBorderBox/border-top-right.png"
                  />
                  <img
                    className="border-top_44"
                    src="./assets/images/nyxBorderBox/border-top.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
