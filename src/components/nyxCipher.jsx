import React, { useEffect, useRef, useState } from 'react';

function NyxCipher() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="nyxCipher nyxBorderTop nyxContainer" id="toolkit">
      <div className="nyxBorderX">
        <div className="relative">
          <div className="2xl:ms-[155px] xl:ms-[120px] lg:ms-[95px] md:ms-[60px] sm:ms-[30px] ms-[6px] xl:pt-[140px] lg:pt-[100px] md:pt-[70px] sm:pt-[42px] pt-[40px] md:pb-[24px] sm:pb-[42px] pb-[42px] md:me-[110px] sm:me-[70px] me-0">
            <p className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text font-regular text-[16px] sm:text-[24px] font-[RobotoMono]">
              Nyx Toolkit
            </p>
            <h1 className="text-white text-[26px] sm:text-[35px] md:text-[57px] font-[VioletSans]">
              AI Research Agent:{" "}
              <font className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
                NYX Cipher
              </font>
            </h1>
            <p className="text-white font-regular md:text-[20px] sm:text-[15px] text-[15px] font-[RobotoMono] font-regular">
              Imagine someone who tirelessly tracks, reads, and analyzes every
              online conversation.
            </p>
          </div>
          <div className="nyxNo absolute bottom-0 right-0 pt-[8px] sm:pt-[11px] md:pt-[15px] lg:pt-[15px] border-b-0 border-e-0">
            <svg className="ms-[15%] lg:ms-[17%] xl:ms-[19%] w-[70%] h-[70%] lg:w-[66px] lg:h-[48px]" viewBox="0 0 66 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM65.9212 47H38.7025V45.3125L53.6087 28.125C54.4837 27.1042 55.4004 26.0208 56.3587 24.875C57.3171 23.7292 58.2025 22.5208 59.015 21.25C59.8067 19.9792 60.4629 18.6667 60.9837 17.3125C61.5046 15.9375 61.765 14.5312 61.765 13.0938C61.765 11.4479 61.4837 9.97917 60.9212 8.6875C60.3796 7.375 59.6192 6.26042 58.64 5.34375C57.64 4.44792 56.4629 3.76042 55.1087 3.28125C53.7546 2.80208 52.2754 2.5625 50.6712 2.5625C48.9837 2.5625 47.4525 2.875 46.0775 3.5C44.7025 4.125 43.5254 4.96875 42.5462 6.03125C41.5462 7.11458 40.765 8.375 40.2025 9.8125C39.64 11.2292 39.3275 12.7396 39.265 14.3438H37.5775C37.64 12.5104 37.9942 10.7812 38.64 9.15625C39.3067 7.51042 40.2129 6.07292 41.3587 4.84375C42.5046 3.63542 43.8587 2.67708 45.4212 1.96875C47.0046 1.23958 48.7546 0.875 50.6712 0.875C52.5254 0.875 54.2337 1.15625 55.7962 1.71875C57.3587 2.26042 58.7129 3.0625 59.8587 4.125C61.0046 5.1875 61.89 6.47917 62.515 8C63.1608 9.5 63.4837 11.1979 63.4837 13.0938C63.4837 14.7188 63.1712 16.2917 62.5462 17.8125C61.9421 19.3333 61.1817 20.8021 60.265 22.2188C59.3483 23.6354 58.3379 24.9896 57.2337 26.2812C56.1504 27.5729 55.1087 28.7917 54.1087 29.9375L40.9212 45.3125H65.9212V47Z" fill="#747474aa" />
            </svg>
          </div>
        </div>

        <div className="nyxBorderTop">
          <div className="lg:pt-[42px] md:pt-[34px] sm:pt-[8px] pt-[8px] xl:pb-[120px] lg:pb-[80px] md:pb-[45px] sm:pb-[27px] pb-[27px]">
            <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px]">
              <div className="grid grid-cols-2 gap-[42px] font-[RobotoMono] ">
                <div className="vibration xl:col-span-1 lg:col-span-2 col-span-2 fadeUpAnimation">
                  <div className="shape-container">
                    <div className="shape-outer customize-outer">
                      <div className="shape-inner customize-inner relative">
                        <div className="px-[50px] pt-[24px] lg:pb-[150px] pb-[105px]">
                          <div className="box">
                            <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                              {" "}
                              Tracking
                            </p>
                          </div>
                          <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                            Nyx, your ultimate AI research assistant, plunges
                            into the dynamic world of cryptocurrency. From
                            monitoring community sentiment to tracking
                            influencer buzz. With Nyx's sharp detection of scams
                            and bots, invest with confidence, knowing you're
                            shielded by the most vigilant guardian in the
                            digital realm.
                          </p>
                        </div>
                        <a
                          className="absolute bottom-[24px] right-[24px]"
                          href=""
                        >
                          <img
                            className="xl:h-[124px] lg:h-[100px] md:h-[80px] h-[80px]"
                            src="./assets/images/icon/tracking.png"
                            alt="Search_Icon"
                          />
                        </a>
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

                <div className="vibration xl:col-span-1 lg:col-span-2 col-span-2 fadeUpAnimation">
                  <div className="shape-container">
                    <div className="shape-outer customize-outer">
                      <div className="shape-inner customize-inner relative">
                        <div className="px-[50px] pt-[24px] lg:pb-[150px] pb-[105px]">
                          <div className="box">
                            <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                              {" "}
                              Daily Reports
                            </p>
                          </div>
                          <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                            Nyx plunges into the digital realm, extracting
                            insights from community chats and influencers.
                            Unlike biased sources, Nyx delivers truthful daily
                            reports, revealing all facets of the cryptocurrency
                            projects you care about. With Nyx, expect
                            transparent insights, free from manipulation or
                            hidden agendas.
                          </p>
                        </div>
                        <a
                          className="absolute bottom-[24px] right-[24px]"
                          href=""
                        >
                          <img
                            className="xl:h-[124px] lg:h-[100px] md:h-[80px] h-[80px]"
                            src="./assets/images/icon/report.png"
                            alt="Report_Icon"
                          />
                        </a>
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

                <div className="vibration col-span-2 xl:hidden fadeUpAnimation">
                  <div className="shape-container">
                    <div className="shape-outer customize-outer">
                      <div className="shape-inner customize-inner relative">
                        <div className="px-[50px] pt-[24px] lg:pb-[150px] pb-[105px]">
                          <div className="box">
                            <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                              Auto Trading Bot
                            </p>
                          </div>
                          <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                            Nyx Cipher, the ultimate crypto strategist, analyzes
                            market sentiment and influencer trends to make
                            profitable trades. Leveraging AI and extensive
                            metrics, Nyx identifies lucrative opportunities,
                            particularly in early projects driven by social
                            media buzz. Join Nyx's journey to maximize your
                            crypto investments with precision and confidence.
                          </p>
                        </div>
                        <a
                          className="absolute bottom-[24px] right-[24px]"
                          href=""
                        >
                          <img
                            className="xl:h-[124px] lg:h-[100px] md:h-[80px] h-[80px]"
                            src="./assets/images/icon/bot.png"
                            alt="Bot_Icon"
                          />
                        </a>
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

                <div className="vibration col-span-2 xl:block hidden fadeUpAnimation">
                  <div className="shape-container_44">
                    <div className="shape-outer_44 customize-outer_44">
                      <div className="shape-inner_44 customize-inner_44">
                        <div className="px-[50px] pt-[24px] lg:pb-[150px] pb-[105px]">
                          <div className="box">
                            <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                              Auto Trading Bot
                            </p>
                          </div>
                          <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                            Nyx Cipher, the ultimate crypto strategist, analyzes
                            market sentiment and influencer trends to make
                            profitable trades. Leveraging AI and extensive
                            metrics, Nyx identifies lucrative opportunities,
                            particularly in early projects driven by social
                            media buzz. Join Nyx's journey to maximize your
                            crypto investments with precision and confidence.
                          </p>
                        </div>
                        <a
                          className="absolute bottom-[24px] right-[24px]"
                          href=""
                        >
                          <img
                            className="xl:h-[124px] lg:h-[100px] md:h-[80px] h-[80px]"
                            src="./assets/images/icon/bot.png"
                            alt="Bot_Icon"
                          />
                        </a>
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

                <div className="vibration xl:col-span-1 lg:col-span-2 col-span-2 fadeUpAnimation">
                  <div className="shape-container">
                    <div className="shape-outer customize-outer">
                      <div className="shape-inner customize-inner relative">
                        <div className="px-[50px] pt-[24px] lg:pb-[150px] pb-[105px]">
                          <div className="box">
                            <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                              {" "}
                              Collecting Data
                            </p>
                          </div>
                          <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                            Visualize a digital oracle parsing through 1,000
                            videos, 10,000 tweets, and 2 million messages each
                            day, separating signal from noise to unveil
                            essential crypto truths. Nyx Cipher commands this
                            remarkable skill, empowering you with indispensable
                            intelligence for conquering the crypto domain.
                          </p>
                        </div>
                        <a
                          className="absolute bottom-[24px] right-[24px]"
                          href=""
                        >
                          <img
                            className="xl:h-[124px] lg:h-[100px] md:h-[80px] h-[80px]"
                            src="./assets/images/icon/folder.png"
                            alt="Folder_Icon"
                          />
                        </a>
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

                <div className="vibration xl:col-span-1 lg:col-span-2 col-span-2 fadeUpAnimation">
                  <div className="shape-container">
                    <div className="shape-outer customize-outer">
                      <div className="shape-inner customize-inner relative">
                        <div className="px-[50px] pt-[24px] lg:pb-[150px] pb-[105px]">
                          <div className="box">
                            <p className="text-white p-[12px] md:p-[15px] font-regular md:font-bold md:text-[25px] sm:text-[17px] text-[15px]">
                              {" "}
                              Influencer Watchdog
                            </p>
                          </div>
                          <p className="text-[#EEEEEE] font-regular md:text-[18px] sm:text-[14px] text-[13px] line leading-normal mt-[18px]">
                            Nyx, the shadow detective of the crypto realm,
                            stalks influencers and bot networks seeking to fill
                            their bags. With his cyber-enhanced senses, he
                            deciphers sentiment and traces price shifts. Nyx
                            evaluates influencer integrity, never overlooking
                            those who shilled FTX and then disappeared.
                          </p>
                        </div>
                        <a
                          className="absolute bottom-[24px] right-[24px]"
                          href=""
                        >
                          <img
                            className="xl:h-[124px] lg:h-[100px] md:h-[80px] h-[80px]"
                            src="./assets/images/icon/eye.png"
                            alt="Eye_Icon"
                          />
                        </a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NyxCipher;
