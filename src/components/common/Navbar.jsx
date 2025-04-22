import React, { useState, useEffect } from 'react'
import "./buttons/button.css";

import { FiMenu } from "react-icons/fi";
// import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import CipherText from "./buttons/cipherText";
import { ConnectButton } from "@rainbow-me/rainbowkit";


const Navbar = () => {

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  // const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => {
    setOpen(value);
    if (value) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";
  };
  return (
    <div className="w-full flex lg:h-[68px] nav-h-52">
      <nav
        className={`z-10 top-0 flex w-full lg:h-[68px] nav-h-52 border-b-[0.5px] border-b-[#747474aa] justify-between xl:px-[1px] lg:px-[10%] md:px-[56px] nyxContainer fixed  ${open ? "" : ""
          } bg-[#070C10]`}
      >
        <div className="flex items-center nav-y-p justify-center xl:w-[10%] lg:w-[10%] xl:pl-0 lg:pl-0 pl-[20px]">
          <a href="#home" className="flex">
            <div className="app__navbar-p nav-logo-w-h xl:w-[64px] xl:h-[39px] lg:w-[64px] lg:h-[39px] ">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 42 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.773 13.159L28.6455 15.4991L21.0001 22.3401L13.3547 15.4991L15.2272 13.159L2.61133 1.45752L20.0653 12.3186L18.1214 15.0191L21.0001 16.7896L23.8788 15.0191L21.9349 12.3186L39.3889 1.45752L26.773 13.159Z"
                  fill="url(#paint0_linear_0_1105)"
                />
                <path
                  d="M20.9994 2.08584e-05L20.9994 4.40912L22.1028 2.79883L27.2887 6.17276L24.6774 9.31665L30.1208 5.86604L20.9994 2.08584e-05Z"
                  fill="url(#paint1_linear_0_1105)"
                />
                <path
                  d="M21.0006 2.08584e-05L21.0006 4.40912L19.8972 2.79883L14.7113 6.17276L17.3226 9.31665L11.8792 5.86604L21.0006 2.08584e-05Z"
                  fill="url(#paint2_linear_0_1105)"
                />
                <path
                  d="M42 12.8055L33.6515 7.7832L31.9965 9.5084L35.0245 13.4108L21 24.0001L42 12.8055Z"
                  fill="url(#paint3_linear_0_1105)"
                />
                <path
                  d="M0 12.8055L8.3485 7.7832L10.0035 9.5084L6.97547 13.4108L21 24.0001L0 12.8055Z"
                  fill="url(#paint4_linear_0_1105)"
                />
                <path
                  d="M20.9999 15.4122L19.676 14.6181L20.5755 13.3924L20.9999 12.8054L21.4242 13.3924L22.3238 14.6181L20.9999 15.4122Z"
                  fill="url(#paint5_linear_0_1105)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1105"
                    x1="21.0001"
                    y1="-2.29958"
                    x2="13.4831"
                    y2="21.7248"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#01FFC2" />
                    <stop offset="0.995" stopColor="#5AB0FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1105"
                    x1="22.0957"
                    y1="8.64242"
                    x2="29.6975"
                    y2="7.25986"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#01FFC2" />
                    <stop offset="0.995" stopColor="#5AB0FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_1105"
                    x1="19.9043"
                    y1="8.64242"
                    x2="12.3025"
                    y2="7.25986"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#01FFC2" />
                    <stop offset="0.995" stopColor="#5AB0FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_0_1105"
                    x1="23.5241"
                    y1="8.95679"
                    x2="40.6153"
                    y2="13.0682"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#01FFC2" />
                    <stop offset="0.995" stopColor="#5AB0FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_0_1105"
                    x1="18.4759"
                    y1="8.95679"
                    x2="1.38474"
                    y2="13.0682"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#01FFC2" />
                    <stop offset="0.995" stopColor="#5AB0FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_0_1105"
                    x1="20.9999"
                    y1="-0.0752834"
                    x2="9.16714"
                    y2="13.4741"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#01FFC2" />
                    <stop offset="0.995" stopColor="#5AB0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="xl:block hidden">
              <svg
                width="59"
                height="42"
                viewBox="0 0 59 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_0_109)">
                  <path
                    d="M45.0289 19.3745L48.5023 25.9633L48.643 26.2301H48.9446H52.7131H53.5804L53.1458 25.4796L47.5703 15.8504L53.012 6.3832L53.4426 5.63403H52.5785H48.7831H48.4799L48.3397 5.90295L44.9782 12.3528L41.6778 5.90617L41.5385 5.63403H41.2327H37.4508H36.5867L37.0173 6.3832L42.4588 15.8501L36.8703 25.4791L36.4344 26.2301H37.3027H41.125H41.4272L41.5677 25.9627L45.0289 19.3745Z"
                    fill="white"
                    stroke="black"
                  />
                  <path
                    d="M28.3383 14.2574L24.6783 5.9328L24.547 5.63403H24.2206H20.6271H19.8278L20.1775 6.35279L26.2107 18.7529L26.2239 25.7311L26.2249 26.2301H26.7239H29.8868H30.3848L30.3868 25.732L30.4132 18.8477L36.5004 6.35302L36.8507 5.63403H36.0509H32.444H32.1172L31.986 5.93335L28.3383 14.2574Z"
                    fill="white"
                    stroke="black"
                  />
                  <path
                    d="M18.1238 26.2301H18.6238V25.7301V6.13403V5.63403H18.1238H14.8668H14.3678L14.3668 6.13303L14.3443 17.3402L8.96653 5.921L8.83139 5.63403H8.51419H5.23022H4.73022V6.13403V25.7301V26.2301H5.23022H8.50073H9.00023L9.00073 25.7306L9.01196 14.4701L14.4281 25.9436L14.5633 26.2301H14.8802H18.1238Z"
                    fill="white"
                    stroke="black"
                  />
                </g>
                <path
                  d="M51.6363 31.6509C51.8651 31.6509 52.1029 31.6666 52.3496 31.698C52.6009 31.7294 52.7893 31.772 52.9149 31.8258L52.7467 33.0439C52.5044 32.99 52.2734 32.9519 52.0535 32.9295C51.8382 32.9026 51.6116 32.8891 51.3739 32.8891C51.0688 32.8891 50.7929 32.9272 50.5461 33.0035C50.2994 33.0753 50.0841 33.1829 49.9001 33.3265C49.7341 33.4521 49.5883 33.6069 49.4627 33.7908C49.3416 33.9703 49.2406 34.1722 49.1599 34.3965V39.0667H47.9082V31.7855H49.0926L49.1464 32.7612L49.1531 32.9429C49.4492 32.5436 49.8037 32.2296 50.2164 32.0008C50.6336 31.7675 51.1069 31.6509 51.6363 31.6509Z"
                  fill="white"
                />
                <path
                  d="M41.8047 39.2013C41.2932 39.2013 40.8222 39.1138 40.3915 38.9388C39.9653 38.7639 39.5997 38.5194 39.2946 38.2053C38.9895 37.8913 38.7518 37.5189 38.5813 37.0883C38.4108 36.6576 38.3256 36.1888 38.3256 35.6818V35.3992C38.3256 34.8115 38.4198 34.2866 38.6082 33.8245C38.7966 33.3579 39.0479 32.9631 39.3619 32.6401C39.6714 32.3216 40.0236 32.0771 40.4184 31.9066C40.8177 31.7361 41.2259 31.6509 41.6432 31.6509C42.1681 31.6509 42.6257 31.7428 43.016 31.9268C43.4108 32.1062 43.7383 32.3552 43.9985 32.6738C44.2587 32.9968 44.4516 33.3759 44.5772 33.811C44.7073 34.2462 44.7724 34.7173 44.7724 35.2242V35.7827H39.5705V35.8299C39.6019 36.1843 39.6714 36.4961 39.7791 36.7652C39.8913 37.0344 40.0438 37.2722 40.2367 37.4786C40.4341 37.6984 40.6719 37.8711 40.95 37.9967C41.2282 38.1223 41.5355 38.1852 41.872 38.1852C42.3161 38.1852 42.7109 38.0954 43.0563 37.916C43.4018 37.7365 43.6889 37.4988 43.9177 37.2027L44.6781 37.7948C44.4359 38.1627 44.0725 38.4902 43.588 38.7773C43.1079 39.06 42.5135 39.2013 41.8047 39.2013ZM41.6432 32.6738C41.3919 32.6738 41.1542 32.7209 40.9299 32.8151C40.7055 32.9048 40.5037 33.0371 40.3242 33.2121C40.1448 33.3916 39.9922 33.6114 39.8666 33.8716C39.7455 34.1273 39.6602 34.4234 39.6109 34.7599H43.5274V34.6993C43.5274 34.475 43.4848 34.235 43.3995 33.9793C43.3143 33.7191 43.1954 33.4947 43.0429 33.3063C42.8904 33.1179 42.6974 32.9654 42.4642 32.8487C42.2354 32.7321 41.9617 32.6738 41.6432 32.6738Z"
                  fill="white"
                />
                <path
                  d="M31.5557 32.8688C31.6544 32.7208 31.7643 32.5862 31.8855 32.4651C32.0066 32.3394 32.1345 32.2295 32.2691 32.1353C32.4844 31.9783 32.7199 31.8594 32.9756 31.7787C33.2358 31.6979 33.5118 31.6553 33.8034 31.6508C34.1847 31.6508 34.5301 31.7069 34.8397 31.819C35.1537 31.9267 35.4207 32.0972 35.6405 32.3305C35.8603 32.5638 36.0286 32.8599 36.1452 33.2188C36.2663 33.5732 36.3269 33.9949 36.3269 34.4839V39.0666H35.082V34.4704C35.082 34.1833 35.0483 33.9321 34.981 33.7167C34.9137 33.4969 34.815 33.3152 34.6849 33.1716C34.5458 33.0146 34.3709 32.898 34.16 32.8217C33.9492 32.741 33.7069 32.7028 33.4332 32.7073C33.2089 32.7073 32.9958 32.7387 32.7939 32.8015C32.5921 32.8643 32.4059 32.9541 32.2354 33.0707C32.1008 33.1604 31.9752 33.2659 31.8586 33.387C31.7464 33.5036 31.6455 33.6337 31.5557 33.7773V39.0666H30.3108V28.7302H31.5557V32.8688Z"
                  fill="white"
                />
                <path
                  d="M22.0269 41.8662V31.7855H23.1641L23.2247 32.5795C23.3234 32.4539 23.4311 32.3418 23.5477 32.2431C23.6643 32.1399 23.79 32.0524 23.9246 31.9806C24.113 31.873 24.3216 31.7922 24.5504 31.7384C24.7837 31.68 25.0327 31.6509 25.2974 31.6509C25.7639 31.6509 26.1767 31.7428 26.5356 31.9268C26.8945 32.1107 27.1951 32.3664 27.4373 32.6939C27.6796 33.0214 27.8635 33.414 27.9891 33.8716C28.1147 34.3247 28.1776 34.8227 28.1776 35.3655V35.5068C28.1776 36.0273 28.1147 36.514 27.9891 36.9671C27.8635 37.4158 27.6796 37.8061 27.4373 38.138C27.1951 38.47 26.8945 38.7302 26.5356 38.9187C26.1812 39.1071 25.7751 39.2013 25.3175 39.2013C25.0394 39.2013 24.7792 39.1721 24.5369 39.1138C24.2992 39.0555 24.0838 38.9725 23.8909 38.8648C23.7743 38.7975 23.6643 38.7235 23.5612 38.6428C23.458 38.5575 23.3615 38.4655 23.2718 38.3668V41.8662H22.0269ZM26.9326 35.3655C26.9326 35.0111 26.8922 34.6746 26.8115 34.3561C26.7352 34.0331 26.6163 33.7482 26.4548 33.5015C26.2888 33.2592 26.0802 33.0663 25.829 32.9227C25.5778 32.7792 25.2772 32.7074 24.9272 32.7074C24.7343 32.7074 24.5549 32.7298 24.3889 32.7747C24.2274 32.8196 24.0816 32.8846 23.9515 32.9698C23.8079 33.0551 23.6801 33.1605 23.5679 33.2861C23.4557 33.4117 23.357 33.5508 23.2718 33.7034V37.2094C23.3481 37.344 23.4355 37.4696 23.5342 37.5862C23.6329 37.7029 23.7451 37.8016 23.8707 37.8823C24.0143 37.9765 24.1735 38.0506 24.3485 38.1044C24.528 38.1582 24.7254 38.1852 24.9407 38.1852C25.2861 38.1852 25.5845 38.1134 25.8357 37.9698C26.0869 37.8218 26.2933 37.6244 26.4548 37.3776C26.6163 37.1309 26.7352 36.846 26.8115 36.523C26.8922 36.2 26.9326 35.8613 26.9326 35.5068V35.3655Z"
                  fill="white"
                />
                <path
                  d="M13.9515 31.7853H17.6729V37.9898H20.0484V39.0665H13.9515V37.9898H16.428V32.8687H13.9515V31.7853ZM16.2665 29.8741C16.2665 29.7665 16.2822 29.6655 16.3136 29.5713C16.3495 29.4771 16.4033 29.3963 16.4751 29.329C16.5334 29.2707 16.6074 29.2259 16.6971 29.1945C16.7914 29.1586 16.8968 29.1406 17.0134 29.1406C17.1301 29.1406 17.2333 29.1586 17.323 29.1945C17.4127 29.2259 17.4867 29.2707 17.5451 29.329C17.6168 29.3919 17.6707 29.4704 17.7066 29.5646C17.7424 29.6588 17.7604 29.762 17.7604 29.8741C17.7604 30.076 17.6976 30.2443 17.572 30.3788C17.4464 30.5134 17.2602 30.5807 17.0134 30.5807C16.7622 30.5807 16.5738 30.5134 16.4482 30.3788C16.327 30.2443 16.2665 30.076 16.2665 29.8741Z"
                  fill="white"
                />
                <path
                  d="M11.825 36.1192C11.7667 36.5723 11.6501 36.9895 11.4751 37.3709C11.3001 37.7477 11.0736 38.0707 10.7954 38.3399C10.5128 38.6136 10.1786 38.8267 9.79276 38.9792C9.41142 39.1272 8.98522 39.2013 8.51416 39.2013C8.1104 39.2013 7.74252 39.1452 7.41054 39.033C7.08304 38.9164 6.79143 38.7571 6.53571 38.5552C6.27551 38.3533 6.05119 38.1156 5.86277 37.8419C5.67883 37.5682 5.5263 37.2699 5.40517 36.9469C5.27955 36.6239 5.18534 36.2852 5.12253 35.9308C5.06421 35.5763 5.03281 35.2174 5.02832 34.854V33.488C5.03281 33.1246 5.06421 32.7657 5.12253 32.4113C5.18534 32.0568 5.27955 31.7181 5.40517 31.3951C5.5263 31.0721 5.67883 30.7738 5.86277 30.5001C6.05119 30.222 6.27551 29.9819 6.53571 29.7801C6.79143 29.5782 7.08304 29.4212 7.41054 29.309C7.73804 29.1924 8.10591 29.134 8.51416 29.134C9.00317 29.134 9.44058 29.2103 9.8264 29.3628C10.2122 29.5109 10.5442 29.7217 10.8224 29.9954C11.1005 30.2735 11.3226 30.6055 11.4886 30.9914C11.659 31.3772 11.7712 31.8034 11.825 32.2699H10.5801C10.5397 31.9739 10.4702 31.6979 10.3715 31.4422C10.2728 31.1865 10.1404 30.9622 9.97445 30.7693C9.80846 30.5764 9.60433 30.4261 9.36207 30.3184C9.1243 30.2063 8.84166 30.1502 8.51416 30.1502C8.21807 30.1502 7.95562 30.1995 7.72682 30.2982C7.50251 30.3924 7.3096 30.5225 7.14809 30.6885C6.9821 30.8545 6.84302 31.0474 6.73087 31.2673C6.62319 31.4871 6.53571 31.7204 6.46842 31.9671C6.40112 32.2139 6.35177 32.4673 6.32037 32.7275C6.29345 32.9833 6.27999 33.2323 6.27999 33.4745V34.854C6.27999 35.0963 6.29345 35.3475 6.32037 35.6077C6.35177 35.8635 6.40112 36.1147 6.46842 36.3614C6.53571 36.6127 6.62319 36.8482 6.73087 37.068C6.83854 37.2879 6.97537 37.4808 7.14136 37.6468C7.30735 37.8172 7.50251 37.9518 7.72682 38.0505C7.95114 38.1447 8.21358 38.1918 8.51416 38.1918C8.84166 38.1918 9.1243 38.1403 9.36207 38.0371C9.60433 37.9339 9.80846 37.7881 9.97445 37.5997C10.1404 37.4157 10.2728 37.1981 10.3715 36.9469C10.4702 36.6912 10.5397 36.4153 10.5801 36.1192H11.825Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_d_0_109"
                    x="0.230225"
                    y="5.13403"
                    width="58.2174"
                    height="29.5962"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_109"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_109"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </a>
        </div>

        <div className="xl:flex hidden font-[RobotoMono] text-[15px] xl:ml-auto">
          <ul className="app__navbar-links text-white">
            <li className="flex items-center justify-center">
              <a
                href="#toolkit"
                className="h-[67px] flex items-center px-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
              >
                <CipherText detail={{ value: 'Toolkit' }} />
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#features"
                className="h-[67px] flex items-center px-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
              >
                <CipherText detail={{ value: 'Features' }} />
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#usecases"
                className="h-[67px] flex items-center px-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
              >
                <CipherText detail={{ value: 'Use Cases' }} />
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#nyxvspaal"
                className="h-[67px] flex items-center px-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
              >
                <CipherText detail={{ value: 'Nyx vs Paal' }} />
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="#partners"
                className="h-[67px] flex items-center px-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
              >
                <CipherText detail={{ value: 'Partners' }} />
              </a>
            </li>
            <li className="flex items-center justify-center">
              <a
                href="https://docs.nyxcipher.ai"
                rel="noopener noreferrer"
                target="_blank"
                className="h-[67px] flex items-center px-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
              >
                <CipherText detail={{ value: 'Whitepaper' }} />
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-auto items-center justify-center xl:justify-between gap-4">
          <div className="xl:flex lg:flex md:flex hidden h-full items-center justify-center gap-4">
            <a
              href="https://app.nyxcipher.ai"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="clipButton font-[Nippo] w-[130px]">
                Launch App
              </button>
            </a>

            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus || authenticationStatus === "authenticated");

                return (
                  <div
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button className="clipButton font-[Nippo]" onClick={openConnectModal} type='button'>
                            Connect
                          </button>
                        );
                      }

                      return (
                        <button className="clipButton font-[Nippo]" onClick={openAccountModal} type="button">
                          Disconnect
                        </button>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>

        </div>

        <div className="mr-auto ml-4 xl:mx-0 justify-center items-center xl:flex lg:flex md:flex hidden xl:w-[10%]">
          <span className="cornered_icon_hover mr-4">
            <img
              src="./assets/images/icon/twitter_cornered.png"
              className="mx-[47.5px] sm:mx-0"
            />
          </span>
          <span className="cornered_icon_hover">
            <img
              src="./assets/images/icon/telegram_cornered.png"
              className="mx-[47.5px] sm:mx-0"
            />
          </span>
        </div>

        <div
          className={`flex xl:hidden items-center justify-center xl:pr-0 lg:pr-0  ${open ? "" : "pr-[20px]"
            }`}
        >
          {open ? (
            <button
              variant="text"
              color="white"
              className="p-1 mr-5"
              onClick={() => handleOpen(false)}
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.77817 9.19239L0 16.9706L1.41421 18.3848L9.19238 10.6066L16.9706 18.3848L18.3848 16.9706L10.6066 9.19239L18.3848 1.41421L16.9706 0L9.19238 7.77818L1.41422 1.19209e-05L0 1.41423L7.77817 9.19239Z"
                  fill="#D9D9D9"
                />
              </svg>
            </button>
          ) : (
            <button
              className="flex items-center justify-center bg-transparent app__navbar-p"
              onClick={() => handleOpen(true)}
            >
              <FiMenu color="#fff" fontSize={27} />
            </button>
          )}
        </div>
      </nav>
      {open && (
        <div
          className="fixed w-full xl:w-full lg:w-full md:w-full z-[3] nav-x-p"
          style={{ backgroundColor: "rgb(7,12,16)", transitionDuration: "0s" }}
        >
          <div className="pt-[50px] sm:mx-[14px] md:mx-[56px] mx-[14px] h-screen border-[#747474aa] border-l-[0.5px] border-r-[0.5px] overflow-y-scroll">
            <div>
              <ul className="app__navbar-smallscreen_links mt-7 pb-10">
                <li
                  style={{ "--delay": 0 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="animate-slideIn opacity-0 text-xl text-white border-b-[0.5px] border-[#747474aa] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a href="#toolkit">Toolkit</a>
                </li>
                <li
                  style={{ "--delay": 0.1 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="animate-slideIn opacity-0 text-xl text-white border-b-[0.5px] border-[#747474aa] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a href="#features">Features</a>
                </li>
                <li
                  style={{ "--delay": 0.2 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="animate-slideIn opacity-0 text-xl text-white border-b-[0.5px] border-[#747474aa] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a href="#usecases">Use cases</a>
                </li>
                <li
                  style={{ "--delay": 0.3 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="animate-slideIn opacity-0 text-xl text-white border-b-[0.5px] border-[#747474aa] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a href="#nyxvspaal">Nyx vs Paal</a>
                </li>
                <li
                  style={{ "--delay": 0.4 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="animate-slideIn opacity-0 text-xl text-white border-b-[0.5px] border-[#747474aa] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a href="#partners">Partners</a>
                </li>
                <li
                  style={{ "--delay": 0.5 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="animate-slideIn opacity-0 text-xl text-white border-b-[0.5px] border-[#747474aa] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a href="https://docs.nyxcipher.ai"
                    rel="noopener noreferrer"
                    target="_blank">Whitepaper</a>
                </li>
                <li
                  style={{ "--delay": 0.5 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="md:hidden animate-slideIn opacity-0 text-xl text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a
                    href="https://app.nyxcipher.ai"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <button className="clipButton font-[Nippo]">
                      Launch App
                    </button>

                  </a>
                </li>
                <li
                  style={{ "--delay": 0.5 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="md:hidden animate-slideIn opacity-0 text-xl text-white border-b-[0.5px] border-[#747474aa] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openAccountModal,
                      openConnectModal,
                      authenticationStatus,
                      mounted,
                    }) => {
                      // Note: If your app doesn't use authentication, you
                      // can remove all 'authenticationStatus' checks
                      const ready = mounted && authenticationStatus !== "loading";
                      const connected =
                        ready &&
                        account &&
                        chain &&
                        (!authenticationStatus || authenticationStatus === "authenticated");

                      return (
                        <div
                        >
                          {(() => {
                            if (!connected) {
                              return (
                                <button className="clipButton font-[Nippo]" onClick={openConnectModal} type='button'>
                                  Connect
                                </button>
                              );
                            }

                            return (
                              <button className="clipButton font-[Nippo]" onClick={openAccountModal} type="button">
                                Disconnect
                              </button>
                            );
                          })()}
                        </div>
                      );
                    }}
                  </ConnectButton.Custom>
                </li>
                <li
                  style={{ "--delay": 0.6 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="md:hidden animate-slideIn opacity-0 text-xl text-white p-0 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a
                    href="#contact"
                    className="flex items-center justify-center"
                  >
                    <span className="cornered_icon">
                      <img
                        src="./assets/images/icon/twitter_mini.png"
                        className="mx-[47.5px] sm:mx-0"
                      />
                    </span>
                  </a>
                </li>
                <li
                  style={{ "--delay": 0.7 + "s" }}
                  onClick={() => handleOpen(false)}
                  className="md:hidden animate-slideIn opacity-0 text-xl text-white p-0 border-b-[0.5px] border-[#747474aa] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[4px] before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-gradient-to-r before:from-blue-400 before:to-green-500 before:absolute before:left-0 before:bottom-0"
                >
                  <a
                    href="#contact"
                    className="flex items-center justify-center"
                  >
                    <span className="cornered_icon">
                      <img
                        src="./assets/images/icon/telegram_mini.png"
                        className="mx-[47.5px] sm:mx-0"
                      />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
