import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Modal from "./modal";
import { useReadContract } from 'wagmi'
import tokenStakingPoolABI from "../../assets/abi/tokenstakingpool.json";

const tokenStakingPoolContracts = [
  "0x6d7e4b2ed0C2903E476641b21755E2CB318CE79B",
  "0xA092ac34f2B80c9e944ca41d076a302bcb5d8640",
  "0x1ADe120dcB36D9113B4A55f51c2a4D6C77703C93"
];

function HistoryView() {

  const [amountStakedToken, setAmountStakedToken] = useState(0);
  const { data: amountToken, isError, isLoading, isFetched, status } = useReadContract({
    abi: tokenStakingPoolABI,
    address: tokenStakingPoolContracts[0],
    functionName: 'amountStaked',
    args: ["0x8Db2Ec88263267d025dED29Db1049D13B9D221b7"],
    watch: true
  });

  // const result = useReadContract({
  //   abi: tokenStakingPoolABI,
  //   address: tokenStakingPoolContracts[0],
  //   functionName: 'amountStaked',
  //   watch: true
  // })

  if (!isLoading && !isError) {
    console.log("The counter value is ", (amountToken).toString())
  }

  useEffect(() => {
    console.log(isFetched, isLoading, status);
    if (isFetched) {
      console.log(amountToken);
    }
  }, [isFetched])

  useEffect(() => {
    setAmountStakedToken(amountToken);
  }, [amountToken]);

  const [modalState, setModalState] = useState(false);
  return (
    <div className="font-[RobotoMono] flex flex-col gap-5">
      <div>
        <h1 className="lg:text-[23px] text-lg font-extrabold   bg-gradient-to-r from-[#5AB0FF] to-[#01FFC2] inline-block text-transparent bg-clip-text">
          My Stakes & Rewards {amountStakedToken}
        </h1>
      </div>
      <div className="w-full border border-slate-500 rounded-xl lg:px-6 px-3 py-5 relative bg-black bg-opacity-75 flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center w-full h-full py-10 gap-3">
          <img
            src="./assets/images/icon/crypto_wallet.png"
            alt="None"
            className="md:h-24 h-16 w-auto"
          />
          <h1 className="text-center text-xl font-semibold text-gray-100">
            <ConnectButton.Custom>
              {({
                account,
                chain,
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
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

                return (
                  <div>
                    {(() => {
                      if (!connected) {
                        return "Connect your wallet";
                      }

                      return "You have no staked $NXCP";
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </h1>
          <ConnectButton.Custom>
            {({
              account,
              chain,
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
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div>
                  {(() => {
                    if (!connected) {
                      return (
                        <button
                          className="w-[170px] clipButton font-[Nippo] h-[40px] text-[15px]"
                          onClick={openConnectModal}
                          type="button"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    return (
                      <button className="w-[170px] clipButton font-[Nippo] h-[40px] text-[15px]" onClick={() => setModalState(true)}>
                        Stake Now
                      </button>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
      </div>
      {modalState && <Modal setModalState={setModalState} />}
    </div>
  );
}

export default HistoryView;
