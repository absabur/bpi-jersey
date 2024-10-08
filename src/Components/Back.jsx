import React from "react";
import num from "./num2.png";
import BackName from "./BackName";
import SubjectLine from "./Subjects";
import BackLines from "./BackLines";
import BackBackShap from "./BackBackShap";

const Back = () => {
  return (
    <div className="front">
      <BackName />
      {/* <SubjectLine /> */}
      <BackLines />
      <BackBackShap />
    </div>
  );
};

export default Back;
