import React, { useState, useEffect } from 'react'
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import "./button.css";

const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'
const injected = injectedModule()
const infuraKey = '<INFURA_KEY>'
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

init({
  apiKey,
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl
    },
    {
      id: 42161,
      token: 'ARB-ETH',
      label: 'Arbitrum One',
      rpcUrl: 'https://rpc.ankr.com/arbitrum'
    },
    {
      id: '0xa4ba',
      token: 'ARB',
      label: 'Arbitrum Nova',
      rpcUrl: 'https://nova.arbitrum.io/rpc'
    },
    {
      id: '0x2105',
      token: 'ETH',
      label: 'Base',
      rpcUrl: 'https://mainnet.base.org'
    }
  ]
})

function Connect() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [connectedAddresses, setConnectedAddresses] = useState([]);

  useEffect(() => {
    if (wallet && wallet.accounts.length > 0) {
      setConnectedAddresses(wallet.accounts.map(account => account.address));
    } else {
      setConnectedAddresses([]);
    }

    const handleAccountChange = (newAccounts) => {
      setConnectedAddresses(newAccounts);
    };

    if (wallet) {
      wallet.provider.on("accountsChanged", handleAccountChange);
    }

    return () => {
      if (wallet) {
        wallet.provider.off("accountsChanged", handleAccountChange);
      }
    };
  }, [wallet]);

  const handleDisconnect = async () => {
    if (wallet) {
      await disconnect(wallet);
    }
  };

  return (
    <div className='flex gap-5'>
        {connectedAddresses[0] > 0 && (
      <div className='hidden lg:block'>
          <div className='h-[43.5px] flex gap-5'>
                <div className='flex gap-3'>
                  <svg className='my-auto' width="67" height="38" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M26.773 13.159L28.6455 15.4991L21.0001 22.3401L13.3547 15.4991L15.2272 13.159L2.61133 1.45752L20.0653 12.3186L18.1214 15.0191L21.0001 16.7896L23.8788 15.0191L21.9349 12.3186L39.3889 1.45752L26.773 13.159Z"
                        fill="url(#paint0_linear_1_1104)"
                      />
                      <path
                        d="M20.9994 2.08584e-05L20.9994 4.40912L22.1028 2.79883L27.2887 6.17276L24.6774 9.31665L30.1208 5.86604L20.9994 2.08584e-05Z"
                        fill="url(#paint1_linear_1_1104)"
                      />
                      <path
                        d="M21.0006 2.08584e-05L21.0006 4.40912L19.8972 2.79883L14.7113 6.17276L17.3226 9.31665L11.8792 5.86604L21.0006 2.08584e-05Z"
                        fill="url(#paint2_linear_1_1104)"
                      />
                      <path
                        d="M42 12.8055L33.6515 7.7832L31.9965 9.5084L35.0245 13.4108L21 24.0001L42 12.8055Z"
                        fill="url(#paint3_linear_1_1104)"
                      />
                      <path
                        d="M0 12.8055L8.3485 7.7832L10.0035 9.5084L6.97547 13.4108L21 24.0001L0 12.8055Z"
                        fill="url(#paint4_linear_1_1104)"
                      />
                      <path
                        d="M20.9999 15.4122L19.676 14.6181L20.5755 13.3924L20.9999 12.8054L21.4242 13.3924L22.3238 14.6181L20.9999 15.4122Z"
                        fill="url(#paint5_linear_1_1104)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_1104"
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
                          id="paint1_linear_1_1104"
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
                          id="paint2_linear_1_1104"
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
                          id="paint3_linear_1_1104"
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
                          id="paint4_linear_1_1104"
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
                          id="paint5_linear_1_1104"
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
                  <div className='flex flex-col justify-between -leading-3'>
                    <span className='text-[white] text-[14px]'>$NYX Balance</span>
                    <span className='text-[white] font-extrabold text-[15px]'>0 $NYX</span>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <svg height="38" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="currency-purchase-with-card">
                    <rect width="497" height="307" x="7.5" y="150.113" fill="#19ac66" rx="30"></rect><path fill="#fff" d="M234.83333,419.6123H52.5a7.5,7.5,0,0,1,0-15H234.83333a7.5,7.5,0,0,1,0,15Z"></path><path fill="#17a454" d="M474.5,150.11249h-45a30,30,0,0,1,30,30v247a30,30,0,0,1-30,30h45a30,30,0,0,0,30-30v-247A30,30,0,0,0,474.5,150.11249Z"></path><rect width="70" height="51" x="52.5" y="195.113" fill="#f69531" rx="10"></rect><path fill="#f48a31" d="M112.5,195.11249h-15a10,10,0,0,1,10,10v31a10,10,0,0,1-10,10h15a10,10,0,0,0,10-10v-31A10,10,0,0,0,112.5,195.11249Z"></path><path fill="#fff" d="M122.5 326.60986h-70a7.5 7.5 0 0 1 0-15h70a7.5 7.5 0 0 1 0 15zM167.5 388.6123H52.5a7.5 7.5 0 0 1 0-15h115a7.5 7.5 0 0 1 0 15zM459.5 326.60986h-70a7.5 7.5 0 0 1 0-15h70a7.5 7.5 0 0 1 0 15zM347.1665 326.60986h-70a7.5 7.5 0 0 1 0-15h70a7.5 7.5 0 1 1 0 15zM234.8335 326.60986h-70a7.5 7.5 0 1 1 0-15h70a7.5 7.5 0 0 1 0 15z"></path><path fill="#f69531" d="M436.5,366.11253a22.90274,22.90274,0,0,0-15,5.57245,23,23,0,1,0,0,34.8551,22.99747,22.99747,0,1,0,15-40.42755Z"></path><path fill="#f48a31" d="M436.5,366.11249a22.88331,22.88331,0,0,0-7.4743,1.26623,22.99976,22.99976,0,0,1,0,43.46753A22.99255,22.99255,0,1,0,436.5,366.11249Z"></path><circle cx="390.556" cy="168.831" r="113.944" fill="#f69531"></circle><path fill="#f48a31" d="M390.55609,54.88745a114.03352,114.03352,0,0,0-22.5,2.2356,113.95369,113.95369,0,0,1,0,223.41668,113.94753,113.94753,0,1,0,22.5-225.65228Z"></path><path fill="#fed947" d="M390.55615,290.27539A121.44385,121.44385,0,1,1,512,168.83154,121.58141,121.58141,0,0,1,390.55615,290.27539Zm0-227.88769A106.44385,106.44385,0,1,0,497,168.83154,106.56437,106.56437,0,0,0,390.55615,62.3877Z"></path><path fill="#fff" d="M408.93994,232.05664h-44.248a7.50006,7.50006,0,0,1-7.5-7.5v-55.7251a7.50006,7.50006,0,0,1,7.5-7.5h44.248a27.53112,27.53112,0,0,1,27.5,27.5v15.7251A27.53112,27.53112,0,0,1,408.93994,232.05664Zm-36.748-15h36.748a12.51408,12.51408,0,0,0,12.5-12.5v-15.7251a12.51408,12.51408,0,0,0-12.5-12.5h-36.748Z"></path><path fill="#fff" d="M408.93994,176.33154h-44.248a7.50006,7.50006,0,0,1-7.5-7.5V113.106a7.50006,7.50006,0,0,1,7.5-7.5h44.248a27.53111,27.53111,0,0,1,27.5,27.5v15.72558A27.53111,27.53111,0,0,1,408.93994,176.33154Zm-36.748-15h36.748a12.51408,12.51408,0,0,0,12.5-12.5V133.106a12.51408,12.51408,0,0,0-12.5-12.5h-36.748Z"></path><path fill="#fff" d="M378.78516 120.606a7.50006 7.50006 0 0 1-7.5-7.5V96.71631a7.5 7.5 0 0 1 15 0V113.106A7.50006 7.50006 0 0 1 378.78516 120.606zM407.03564 120.606a7.50006 7.50006 0 0 1-7.5-7.5V96.71631a7.5 7.5 0 1 1 15 0V113.106A7.50006 7.50006 0 0 1 407.03564 120.606zM378.78516 248.44678a7.50006 7.50006 0 0 1-7.5-7.5V224.55664a7.5 7.5 0 0 1 15 0v16.39014A7.50006 7.50006 0 0 1 378.78516 248.44678zM407.03564 248.44678a7.50006 7.50006 0 0 1-7.5-7.5V224.55664a7.5 7.5 0 1 1 15 0v16.39014A7.50006 7.50006 0 0 1 407.03564 248.44678z"></path><path fill="#fff" d="M374.52588 232.05664H352.17236a7.5 7.5 0 0 1 0-15h22.35352a7.5 7.5 0 0 1 0 15zM374.52588 120.606H352.17236a7.5 7.5 0 0 1 0-15h22.35352a7.5 7.5 0 0 1 0 15z"></path>
                  </svg>
                  <span className='text-gray-100 font-extrabold my-auto'>{`${connectedAddresses[0].slice(0,6)}...${connectedAddresses[0].slice(-4)}`}</span>
                </div>
          </div>
      </div>
        )}
      <button disabled={connecting} onClick={() => (wallet ? disconnect(wallet) : connect())} className="my-auto clipButton font-[Nippo] h-[40px] text-[15px]">
        {connecting ? 'connecting' : wallet ? 'disconnect' : 'Connect Wallet'}
      </button>
    </div>
  );
}

export default Connect;