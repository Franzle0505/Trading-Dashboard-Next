import { useEffect, useRef, useState } from "react";

const tabsData = [
  {
    label: "Research",
    content:
      "Before his cybernetic augmentation, Nyx battled through the chaos of crypto research, tirelessly absorbing messages, videos, and social media opinions. Realizing the value of authentic insights, he persisted until his transformation, gaining the ability to process vast amounts of data. Now, Nyx emerges as a guide, empowering others to navigate the crypto world with clarity and purpose.",
  },
  {
    label: "Trade at lightning speed",
    content:
      "Formerly delayed by influencer calls, Nyx now swiftly analyzes Alex Becker's videos, predicting market shifts with precision. Armed with his superpower, Nyx leads the market with decisive actions, staying steps ahead of the competition.",
  },
  {
    label: "Scam Protection",
    content: "After enduring countless crypto scams, Nyx became a trusted leader in the field. Learning from setbacks, Nyx now adeptly identifies deception while emphasizing the importance of community and team integrity. With Nyx's guidance, investors can navigate the crypto world with confidence.",
  },
];

function NyxToolkit() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsRef = useRef([]);

  const cycleTabs = () => {
    const nextIndex = (activeTabIndex + 1) % tabsData.length;
    setActiveTabIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(cycleTabs, 15000); // Interval for cycling tabs (5 seconds)
    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, [activeTabIndex]); // Run effect whenever activeTabIndex changes

  return (
    <div className="nyxToolkit nyxBorderTop nyxContainer" id="usecases">
      <div className="nyxBorderX">
        <div className="relative ">

          <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px] xl:pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] pt-[40px] md:pb-[22px] sm:pb-[16px] pb-[16px] text-center">
            <p className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text font-regular text-[16px] sm:text-[24px] font-[RobotoMono]">
              Possible Usecases
            </p>
            <h1 className=" text-white text-[26px] sm:text-[35px] md:text-[57px] font-[VioletSans]">
              Nyx's Toolkit:{" "}
              <font className="bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
                Endless Possibilities
              </font>
            </h1>
          </div>
          <div className="nyxNo  absolute left-0 bottom-[-62px] xl:visible lg:invisible invisible border-l-0 border-b-0 flex ">
            <span className="m-auto">
              <svg
                width="69"
                height="48"
                viewBox="0 0 68 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM60.7337 32.9062H68.6087V34.5938H60.7337V47H59.0462V34.5938H36.9837V33.6562L58.7025 1.5H60.7337V32.9062ZM39.6087 32.9062H59.0462V3.53125L56.4212 7.84375L39.6087 32.9062Z" fill="#747474aa" />
              </svg>
            </span>
          </div>
          <div className="nyxNo  absolute right-0 top-0 xl:invisible border-t-0 border-e-0">
            <svg
              className="mx-[15%] my-[11%] lg:my-[13%] w-[70%] h-[70%] lg:h-[48px]"
              viewBox="0 0 68 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28.2188 28.4375C28.2188 30.6667 27.9792 32.9062 27.5 35.1562C27.0208 37.4062 26.25 39.4688 25.1875 41.3438C24.125 43.1562 22.7083 44.6562 20.9375 45.8438C19.1667 47.0312 16.9688 47.625 14.3438 47.625C12.6146 47.625 11.0625 47.3646 9.6875 46.8438C8.3125 46.3021 7.125 45.5521 6.125 44.5938C4.02083 42.6146 2.53125 40.1667 1.65625 37.25C0.802083 34.3333 0.375 31.3958 0.375 28.4375V20.0625C0.375 17.8542 0.625 15.5833 1.125 13.25C1.625 10.8958 2.42708 8.80208 3.53125 6.96875C4.63542 5.13542 6.0625 3.65625 7.8125 2.53125C9.5625 1.40625 11.7188 0.84375 14.2812 0.84375C16.0312 0.84375 17.6146 1.13542 19.0312 1.71875C20.4479 2.28125 21.6458 3.02083 22.625 3.9375C24.6042 5.79167 26.0208 8.20833 26.875 11.1875C27.7292 14.1667 28.1771 17.125 28.2188 20.0625V28.4375ZM2.8125 35L25.4688 12.1562C25.0938 10.8438 24.5938 9.60417 23.9688 8.4375C23.3438 7.27083 22.5833 6.25 21.6875 5.375C20.7708 4.5 19.6979 3.8125 18.4688 3.3125C17.2604 2.79167 15.8646 2.53125 14.2812 2.53125C11.9271 2.53125 10.0104 3.03125 8.53125 4.03125C7.07292 5.03125 5.8125 6.39583 4.75 8.125C3.8125 9.64583 3.125 11.5208 2.6875 13.75C2.27083 15.9792 2.0625 18.0833 2.0625 20.0625V28.375C2.0625 29.4583 2.11458 30.5625 2.21875 31.6875C2.34375 32.7917 2.54167 33.8958 2.8125 35ZM26.5312 28.375V20.0625C26.5104 19.0625 26.4479 18.0521 26.3438 17.0312C26.2604 15.9896 26.1146 14.9583 25.9062 13.9375L3.28125 36.75C3.67708 38 4.1875 39.1875 4.8125 40.3125C5.4375 41.4167 6.19792 42.3854 7.09375 43.2188C7.98958 44.0521 9.03125 44.7188 10.2188 45.2188C11.4271 45.6979 12.8021 45.9375 14.3438 45.9375C16.6979 45.9375 18.6667 45.3854 20.25 44.2812C21.8542 43.1771 23.0938 41.7604 23.9688 40.0312C24.9062 38.3438 25.5625 36.4688 25.9375 34.4062C26.3125 32.3229 26.5104 30.3125 26.5312 28.375ZM60.7337 32.9062H68.6087V34.5938H60.7337V47H59.0462V34.5938H36.9837V33.6562L58.7025 1.5H60.7337V32.9062ZM39.6087 32.9062H59.0462V3.53125L56.4212 7.84375L39.6087 32.9062Z" fill="#747474aa" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <div className="flex font-[RobotoMono] space-x-3 xl:text-[25px] lg:text-[20px] md:text-[17px] sm:text-[14px] text-[14px] font-light md:font-regular text-gray-300 justify-center sm:space-x-8">
            {tabsData.map((tab, idx) => {
              return (
                <div className="flex flex-col justify-between" key={idx}>
                  <button
                    ref={(el) => (tabsRef.current[idx] = el)}
                    className={`pt-2 pb-3 my-auto ${activeTabIndex === idx ? "" : ""}`}
                    onClick={() => setActiveTabIndex(idx)}
                  >
                    {tab.label}
                  </button>
                  {activeTabIndex === idx ?
                    <div className="mask h-1 bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2]"></div> : <div className="block h-1"> </div>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="nyxBorderTop bg-[#070C10] bg-no-repeat lg:bg-[url('../assets/images/bg_images/leftLighting.png')] lg:bg-[200px_top] lg:bg-[length:500px_300px] md:bg-right-top md:bg-[url('../assets/images/bg_images/responsive/leftLighting.png')] md:bg-[length:400px_300px] bg-[length:400px_300px] bg-right-top bg-[url('../assets/images/bg_images/responsive/leftLighting.png')]">
          <div className="gridLine md:min-h-[280px] min-h-[115px] flex justify-center items-center">
            <div className="2xl:mx-[155px] xl:mx-[120px] lg:mx-[95px] md:mx-[60px] sm:mx-[30px] mx-[6px]">
              <div className="text-white md:text-center sm:text-left md:text-[18px] sm:text-[12px] text-[12px] font-[RobotoMono]">
                <p className="pt-[16px] pb-[24px]">{tabsData[activeTabIndex].content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NyxToolkit;
