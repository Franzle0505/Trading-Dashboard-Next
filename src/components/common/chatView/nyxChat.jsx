import React, { useEffect, useState } from "react";
import TextAnimation from "./textAnimation";
import { diffTimeStamp } from "../../../utils/timeHelper";
import { commaNumber, formatShorterNumber } from "../../../utils/numberHelper";

const NyxChat = ({ text }) => {
  const [chatData, setChatData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define the requestOptions for fetching
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    // Function to fetch data
    const fetchData = () => {
      setIsLoading(true); // Start loading
      fetch(`https://nyxcipher.ai/api/v1/website/${text}`, requestOptions)
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
          setChatData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    };

    // Calling the fetchData function when the component mounts or when 'text' changes
    fetchData();
  }, [text]); // Dependency array to trigger the effect when 'text' changes

  return (
    <div>
      {!isLoading && (chatData && Object.keys(chatData).length > 0) ? (
        <div>
          <TextAnimation detail={{ text: 'Most recent Youtube Channels promoting [' }} />
          <TextAnimation detail={{ text: `${text}`, style: '#06FBC6' }} />
          <TextAnimation detail={{ text: ']:' }} /> <br />
          {
            chatData?.recent_partners && (
              chatData?.recent_partners.map((partner, idx) => {
                return (
                  <a href={`https://youtube.com/channel/${partner?.channelId}`} rel="noopener noreferrer" target="_blank" className="flex items-center">
                    <TextAnimation detail={{ text: '[' }} />
                    <img src={partner?.thumbnail} width={20} height={20} className="rounded-full mr-1 fade-in" />
                    <TextAnimation detail={{ text: `${partner?.title?.substring(0, 30)}`, style: '#06FBC6' }} className="" />
                    <TextAnimation detail={{ text: '] [' }} />
                    <TextAnimation detail={{ text: `${diffTimeStamp(partner?.final_datetime)}`, style: '#06FBC6' }} />
                    <TextAnimation detail={{ text: '] ago [' }} />
                    <TextAnimation detail={{ text: `${formatShorterNumber(partner?.subscriberCount)}`, style: '#06FBC6' }} />
                    <TextAnimation detail={{ text: '] subscriber' }} />
                  </a>
                )
              })
            )
          }
          <TextAnimation detail={{ text: 'Since [' }} />
          <TextAnimation detail={{ text: `${chatData?.first_datetime?.substring(0, 10)}`, style: '#06FBC6' }} />
          <TextAnimation detail={{ text: '] [' }} />
          <TextAnimation detail={{ text: `${text}`, style: '#06FBC6' }} />
          <TextAnimation detail={{ text: '] is trusted by [' }} />
          <TextAnimation detail={{ text: `${commaNumber(chatData?.youtube_channels)}`, style: '#06FBC6' }} />
          <TextAnimation detail={{ text: '] Youtube Channels with a total of [' }} />
          <TextAnimation detail={{ text: `${formatShorterNumber(chatData?.followers)}`, style: '#06FBC6' }} />
          <TextAnimation detail={{ text: '] subscriber.' }} /> <br />
          <TextAnimation detail={{ text: 'It has been shared in [' }} />
          <TextAnimation detail={{ text: `${commaNumber(chatData?.youtube_videos)}`, style: '#06FBC6' }} />
          <TextAnimation detail={{ text: '] Videos gaining over [' }} />
          <TextAnimation detail={{ text: `${formatShorterNumber(chatData?.viewCounts)}`, style: '#06FBC6' }} />
          <TextAnimation detail={{ text: '] views.' }} /> <br />
          {
            chatData?.top_videos && (
              <div>
                <TextAnimation detail={{ text: 'The most viewed video promoting [' }} />
                <TextAnimation detail={{ text: `${text}`, style: '#06FBC6' }} />
                <TextAnimation detail={{ text: '] is [' }} />
                <a href={`https://youtube.com/watch?v=${chatData?.top_videos[0]?.videoId}`} rel="noopener noreferrer" target="_blank" className="flex items-center">
                  <TextAnimation detail={{ text: `${chatData?.top_videos[0]?.title}`, style: '#06FBC6' }} />
                </a>
                <TextAnimation detail={{ text: '].' }} /> <br />
              </div>
            )
          }
          {
            chatData?.recent_videos && (
              <div>
                <TextAnimation detail={{ text: 'The most recent video promoting [' }} />
                <TextAnimation detail={{ text: `${text}`, style: '#06FBC6' }} />
                <TextAnimation detail={{ text: '] is [' }} />
                <a href={`https://youtube.com/watch?v=${chatData?.recent_videos[0]?.videoId}`} rel="noopener noreferrer" target="_blank" className="flex items-center">
                  <TextAnimation detail={{ text: `${chatData?.recent_videos[0]?.title}`, style: '#06FBC6' }} />
                </a>
                <TextAnimation detail={{ text: '].' }} /> <br />
              </div>
            )
          }
          <TextAnimation detail={{ text: '---', style: '#06FBC6' }} /> <br />
          <TextAnimation detail={{ text: 'Please send me any other website to analyze [...]' }} />
        </div>
      ):(
        <div>
          <TextAnimation detail={{ text: `No Data for [` }} />
          <TextAnimation detail={{ text: `${text}`, style: '#06FBC6' }} />
          <TextAnimation detail={{ text: '], Please send me any other website to analyze [...]' }} /> <br />
        </div>
      )
      }
    </div>
  );
}

export default NyxChat;
