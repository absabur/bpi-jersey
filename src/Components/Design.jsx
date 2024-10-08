import React, { useRef } from "react";
import Front from "./Front";
import domtoimage from "dom-to-image-more";
import Back from "./Back";
import num from "../num.png";

const JerseyDesign = () => {
  const elementRef = useRef(null); // Create a ref for the jersey design element

  const saveAsSvg = () => {
    const node = elementRef.current; // Get the current referenced element
    domtoimage
      .toSvg(node)
      .then(function (dataUrl) {
        const link = document.createElement("a"); // Create an anchor element
        link.download = "website-part.svg"; // Set the file name for download
        link.href = dataUrl; // Set the URL to the generated SVG
        link.click(); // Trigger the download
      })
      .catch(function (error) {
        console.error("Error generating SVG:", error); // Handle any errors
      });
  };

  return (
    <>
      <div ref={elementRef} className="jersey">
        <Front />
        <Back />
      </div>
      {/* <button onClick={saveAsSvg}>Save as SVG</button> */}
    </>
  );
};

export default JerseyDesign;
