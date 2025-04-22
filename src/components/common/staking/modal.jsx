import React, { useState, useEffect } from "react";
import "../buttons/button.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWriteContract, useWatchContractEvent } from "wagmi";
import { parseUnits } from "viem";

import tokenABI from "../../assets/abi/nyxcipher.json";
import stakingPoolABI from "../../assets/abi/stakingpool.json";

const tokenAddress = "0x72A009348c3f92E08e9e037069dBf00A6c2dd97c";
const stakingPoolContracts = [
  "0x3783589849b30B7528331ed4C3aB446972a839c9",
  "0xA576c7F4b56b83e564e8Ad358Dd88770D7ac027F",
  "0x0E8d6b47191498aFf39Fd633de66d43B740716e2"
];

const Modal = (props) => {

  const { writeContractAsync } = useWriteContract();
  const handleStake = async (id, amount) => {

    console.log(id);
    // Check if the ID is within the range of staking pools
    if (id < stakingPoolContracts.length) {
      console.log(stakingPoolContracts[id]);
      try {
        await writeContractAsync({
          abi: tokenABI,
          address: tokenAddress,
          functionName: "approve",
          args: [stakingPoolContracts[id], parseUnits(amount, 8)],
        })

        // useWatchContractEvent({
        //   address: tokenAddress,
        //   abi: tokenABI,
        //   eventName: 'Approval',
        //   async listener(log) {
        //     await writeContractAsync({
        //       abi: stakingPoolABI,
        //       address: stakingPoolContracts[id],
        //       functionName: "stake",
        //       args: [parseUnits(log.args.value, 8)],
        //     });
        //   },
        // })

        await writeContractAsync({
          abi: stakingPoolABI,
          address: stakingPoolContracts[id],
          functionName: "stake",
          args: [parseUnits(amount, 8)],
        });
      } catch (error) {
        console.error("Error while staking:", error);
        // Handle error as needed
      }
    } else {
      console.error("Invalid staking pool ID:", id);
      // Handle invalid ID error
    }
  }

  const [inputData, setInputData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  // select staking option
  const buttons = [
    { label: "14 Day Lockup", apr: "3%" },
    { label: "28 Day Lockup", apr: "10%" },
    { label: "56 Day Lockup", apr: "15%" },
  ];

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  useEffect(() => {
    setSelectedButtonIndex(props.value);
  }, []); // Run only once on component mount

  const handleButtonClick = (index) => {
    setSelectedButtonIndex(index);
  };
  // end staking option

  return (
    <>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      <div className="absolute inset-0 flex justify-center items-center z-10 mx-4 mt-4 md:mt-0">
        <div className="bg-gray-900 max-w-[600px] h-7/10 flex flex-col gap-4 rounded-lg border-slate-500 border w-full my-auto p-5">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-white font-bold text-[16px] md:text-[18px] font-[RobotoMono]">
              Select Staking Option
            </h1>
            <div onClick={() => props.setModalState(false)}>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <g clipPath="url(#clip0_90_503)">
                  <path
                    d="M18.75 0.0999756H2.24998C1.81237 0.0999756 1.39268 0.273814 1.08325 0.583249C0.773814 0.892684 0.599976 1.31237 0.599976 1.74998V18.25C0.599976 18.6876 0.773814 19.1073 1.08325 19.4167C1.39268 19.7261 1.81237 19.9 2.24998 19.9H18.75C19.1876 19.9 19.6073 19.7261 19.9167 19.4167C20.2261 19.1073 20.4 18.6876 20.4 18.25V1.74998C20.4 1.31237 20.2261 0.892684 19.9167 0.583249C19.6073 0.273814 19.1876 0.0999756 18.75 0.0999756ZM16.0337 14.3663C16.1103 14.4429 16.1711 14.5339 16.2126 14.6341C16.2541 14.7342 16.2754 14.8416 16.2754 14.95C16.2754 15.0584 16.2541 15.1657 16.2126 15.2659C16.1711 15.366 16.1103 15.457 16.0337 15.5337C15.957 15.6103 15.866 15.6711 15.7659 15.7126C15.6657 15.7541 15.5584 15.7754 15.45 15.7754C15.3416 15.7754 15.2342 15.7541 15.1341 15.7126C15.0339 15.6711 14.9429 15.6103 14.8663 15.5337L10.5 11.1663L6.13366 15.5337C5.97886 15.6885 5.7689 15.7754 5.54998 15.7754C5.33105 15.7754 5.12109 15.6885 4.96629 15.5337C4.81148 15.3789 4.72452 15.1689 4.72452 14.95C4.72452 14.7311 4.81148 14.5211 4.96629 14.3663L9.33363 9.99998L4.96629 5.63366C4.81148 5.47886 4.72452 5.2689 4.72452 5.04998C4.72452 4.83105 4.81148 4.62109 4.96629 4.46629C5.12109 4.31148 5.33105 4.22452 5.54998 4.22452C5.7689 4.22452 5.97886 4.31148 6.13366 4.46629L10.5 8.83363L14.8663 4.46629C15.0211 4.31148 15.2311 4.22452 15.45 4.22452C15.6689 4.22452 15.8789 4.31148 16.0337 4.46629C16.1885 4.62109 16.2754 4.83105 16.2754 5.04998C16.2754 5.2689 16.1885 5.47886 16.0337 5.63366L11.6663 9.99998L16.0337 14.3663Z"
                    fill="rgb(203 213 225)"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_90_503">
                    <rect
                      width="20"
                      height="20"
                      fill="rgb(203 213 225)"
                      transform="translate(0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 justify-between">
            <div className="flex lg:flex-row flex-col lg:items-center item-start gap-5 w-full">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`md:p-5 p-2.5 flex flex-col items-center justify-center w-full rounded-2xl gap-1.5 focus:bg-slate-500 
                  ${selectedButtonIndex === index
                      ? "text-white bg-slate-500"
                      : "text-slate-300 border border-slate-500 focus:text-white"
                    }`}
                  onClick={() => handleButtonClick(index)}
                >
                  <h1 className="text-base font-bold">{button.label}</h1>
                  <h2>
                    <span className="text-xl font-bold">{button.apr}</span>
                    <span className="ml-2 text-sm font-bold">APR</span>
                  </h2>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-[8px]">

            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
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
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <></>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <></>
                        );
                      }

                      return (
                        <div className="flex flex-col gap-4">

                          <div className="relative">
                            <input
                              className="bg-slate-800 w-full rounded text-white text-4 py-[14px] pl-5 pr-24 border-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                              placeholder="Enter Amount"
                              type="number"
                              value={inputData}
                              onChange={handleInputChange}
                            />
                            <button
                              type="button"
                              className="absolute text-center justify-center inset-y-2 right-5 px-5 py-[6px] text-sm font-medium text-white bg-slate-400 rounded"
                              value={account.displayBalance
                                ? `${(account.displayBalance.match(/\d+/g)).flat()}`
                                : ""}
                              onClick={handleInputChange}
                            >
                              Max
                            </button>
                          </div>
                          <div className="flex gap-2 items-center">
                            {chain.hasIcon && (
                              <div>
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? "Chain icon"}
                                    src={chain.iconUrl}
                                    style={{ width: 24, height: 24 }}
                                  />
                                )}
                              </div>
                            )}
                            <h1 className="text-gray-300 text-md">{chain.name} Balance:</h1>
                            <h1 className="text-white text-md">{account.displayBalance
                              ? ` ${account.displayBalance}`
                              : ""}</h1>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>
          <p className="text-md text-gray-300">
            {" "}
            You are staking {inputData ? inputData : "0"} $NXCP tokens.{" "}
          </p>
          <button
            type="button"
            className="clipButton font-[Nippo] h-[38px] cursor-pointer"
            onClick={() => handleStake(selectedButtonIndex, inputData)}
          >
            Stake
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
