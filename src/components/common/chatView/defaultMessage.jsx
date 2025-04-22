import React, { useEffect, useState } from "react";
import TextAnimation from "./textAnimation";
import jsonData from './chatData.json';

function DefaultMessage() {
  const [chatData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(jsonData.binance);
  }, []);

  return (
    <div className="container">
      <TextAnimation detail={{text:'Nyx Cipher here, let me analyze ['}} />
      <TextAnimation detail={{text:'binance.com' , style: '#48A7FF'}} />
      <TextAnimation detail={{text:'] for you:'}} />
      {chatData &&
        <div>
          <TextAnimation detail={{ text: chatData.short_summary }} /> <br />
          <TextAnimation detail={{ text: `Discord: ${chatData.discords}` }} /> <br />
          <TextAnimation detail={{ text: `Twitter: ${chatData.discords}` }} /> <br />
          <TextAnimation detail={{ text: `Other Socials: 0` }} /> <br />
        </div>
      }
    </div>
  );
}

export default DefaultMessage;
