import { useContext, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "./button.css";
const ConnectWallet = () => {
    return (
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
                      <button className="my-auto clipButton font-[Nippo] h-[40px] text-[15px]" onClick={openConnectModal} type="button">
                        Connect Wallet
                      </button>
                    );
                  }
  
                  if (chain.unsupported) {
                    return (
                      <button className="my-auto clipButton font-[Nippo] h-[40px] text-[15px]" onClick={openChainModal} type="button">
                        Wrong network
                      </button>
                    );
                  }
  
                  return (
                    <div className="flex gap-5">
                      <button className="text-gray-300 items-center gap-2 hidden lg:flex"
                        onClick={openChainModal}
                        type="button"
                      >
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 38,
                              height: 38,
                              borderRadius: 999,
                              overflow: "hidden",
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? "Chain icon"}
                                src={chain.iconUrl}
                                style={{ width: 38, height: 38 }}
                              />
                            )}
                          </div>
                        )}
                        <div className="flex flex-col justify-between items-start">
                            <span className="text-[15px]">{chain.name}</span>
                            <span className="text-[15px] font-extrabold text-gray-100">{account.displayBalance
                          ? ` ${account.displayBalance}`
                          : ""}</span>
                        </div>
                      </button>
  
                      <div className="hidden lg:flex gap-2 items-center text-gray-100 font-bold" >
                      
                        <svg height="38" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="currency-purchase-with-card">
                            <rect width="497" height="307" x="7.5" y="150.113" fill="#19ac66" rx="30"></rect><path fill="#fff" d="M234.83333,419.6123H52.5a7.5,7.5,0,0,1,0-15H234.83333a7.5,7.5,0,0,1,0,15Z"></path><path fill="#17a454" d="M474.5,150.11249h-45a30,30,0,0,1,30,30v247a30,30,0,0,1-30,30h45a30,30,0,0,0,30-30v-247A30,30,0,0,0,474.5,150.11249Z"></path><rect width="70" height="51" x="52.5" y="195.113" fill="#f69531" rx="10"></rect><path fill="#f48a31" d="M112.5,195.11249h-15a10,10,0,0,1,10,10v31a10,10,0,0,1-10,10h15a10,10,0,0,0,10-10v-31A10,10,0,0,0,112.5,195.11249Z"></path><path fill="#fff" d="M122.5 326.60986h-70a7.5 7.5 0 0 1 0-15h70a7.5 7.5 0 0 1 0 15zM167.5 388.6123H52.5a7.5 7.5 0 0 1 0-15h115a7.5 7.5 0 0 1 0 15zM459.5 326.60986h-70a7.5 7.5 0 0 1 0-15h70a7.5 7.5 0 0 1 0 15zM347.1665 326.60986h-70a7.5 7.5 0 0 1 0-15h70a7.5 7.5 0 1 1 0 15zM234.8335 326.60986h-70a7.5 7.5 0 1 1 0-15h70a7.5 7.5 0 0 1 0 15z"></path><path fill="#f69531" d="M436.5,366.11253a22.90274,22.90274,0,0,0-15,5.57245,23,23,0,1,0,0,34.8551,22.99747,22.99747,0,1,0,15-40.42755Z"></path><path fill="#f48a31" d="M436.5,366.11249a22.88331,22.88331,0,0,0-7.4743,1.26623,22.99976,22.99976,0,0,1,0,43.46753A22.99255,22.99255,0,1,0,436.5,366.11249Z"></path><circle cx="390.556" cy="168.831" r="113.944" fill="#f69531"></circle><path fill="#f48a31" d="M390.55609,54.88745a114.03352,114.03352,0,0,0-22.5,2.2356,113.95369,113.95369,0,0,1,0,223.41668,113.94753,113.94753,0,1,0,22.5-225.65228Z"></path><path fill="#fed947" d="M390.55615,290.27539A121.44385,121.44385,0,1,1,512,168.83154,121.58141,121.58141,0,0,1,390.55615,290.27539Zm0-227.88769A106.44385,106.44385,0,1,0,497,168.83154,106.56437,106.56437,0,0,0,390.55615,62.3877Z"></path><path fill="#fff" d="M408.93994,232.05664h-44.248a7.50006,7.50006,0,0,1-7.5-7.5v-55.7251a7.50006,7.50006,0,0,1,7.5-7.5h44.248a27.53112,27.53112,0,0,1,27.5,27.5v15.7251A27.53112,27.53112,0,0,1,408.93994,232.05664Zm-36.748-15h36.748a12.51408,12.51408,0,0,0,12.5-12.5v-15.7251a12.51408,12.51408,0,0,0-12.5-12.5h-36.748Z"></path><path fill="#fff" d="M408.93994,176.33154h-44.248a7.50006,7.50006,0,0,1-7.5-7.5V113.106a7.50006,7.50006,0,0,1,7.5-7.5h44.248a27.53111,27.53111,0,0,1,27.5,27.5v15.72558A27.53111,27.53111,0,0,1,408.93994,176.33154Zm-36.748-15h36.748a12.51408,12.51408,0,0,0,12.5-12.5V133.106a12.51408,12.51408,0,0,0-12.5-12.5h-36.748Z"></path><path fill="#fff" d="M378.78516 120.606a7.50006 7.50006 0 0 1-7.5-7.5V96.71631a7.5 7.5 0 0 1 15 0V113.106A7.50006 7.50006 0 0 1 378.78516 120.606zM407.03564 120.606a7.50006 7.50006 0 0 1-7.5-7.5V96.71631a7.5 7.5 0 1 1 15 0V113.106A7.50006 7.50006 0 0 1 407.03564 120.606zM378.78516 248.44678a7.50006 7.50006 0 0 1-7.5-7.5V224.55664a7.5 7.5 0 0 1 15 0v16.39014A7.50006 7.50006 0 0 1 378.78516 248.44678zM407.03564 248.44678a7.50006 7.50006 0 0 1-7.5-7.5V224.55664a7.5 7.5 0 1 1 15 0v16.39014A7.50006 7.50006 0 0 1 407.03564 248.44678z"></path><path fill="#fff" d="M374.52588 232.05664H352.17236a7.5 7.5 0 0 1 0-15h22.35352a7.5 7.5 0 0 1 0 15zM374.52588 120.606H352.17236a7.5 7.5 0 0 1 0-15h22.35352a7.5 7.5 0 0 1 0 15z"></path>
                        </svg>
                        {account.displayName}
                      </div>
                      <button className="my-auto clipButton font-[Nippo] h-[40px] text-[15px]" onClick={openAccountModal} type="button">Disconnect</button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
    );
  };
  
  export default ConnectWallet;