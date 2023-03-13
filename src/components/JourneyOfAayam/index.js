import React from "react"
import { Chrono } from "react-chrono";

  const JourneyOfAayam = () => {
    const items = [{
      title: "2022",
      cardTitle: "Foundation year of AAYAM",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    //   media: {
    //     type: "IMAGE",
    //     source: {
    //       url:"https://www.aayamcareerinstitute.com/assets/images/aayam-logo-1.png"
          
    //     }
    //   }
    },
    {
    title: "2021",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },
   {
    title: "2020",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },
   {
    title: "2019",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },
   {
    title: "2018",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },
   {
    title: "2017",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },
   {
    title: "2016",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },
   {
    title: "2015",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },
   {
    title: "2014",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },
   {
    title: "2013",
    cardTitle: "Foundation year of AAYAM",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
   },


];

    return (
        <>
        <h1>Journey and Milestones</h1>
        <br/>
        <div style={{ width: '1000px', height: '500px' }}>
        <Chrono items={items} slideShow mode="VERTICAL_ALTERNATING" scrollable enableOutline />
      </div>
      </>
    )
  }
  export default JourneyOfAayam;