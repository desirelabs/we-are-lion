import * as React from "react";
import { Layout } from "../components/ui/Layout";
import { useState } from "react";
import { Fullpage } from "../components/Fullpage";
import { HomeSlide1 } from "../components/Homepage/HomeSlide1";
import { HomeSlide2 } from "../components/Homepage/HomeSlide2";
import { HomeSlide3 } from "../components/Homepage/HomeSlide3";
import { HomeSlide4 } from "../components/Homepage/HomeSlide4";
import { HomeSlide5 } from "../components/Homepage/HomeSlide5";

export default () => {
  const [index, setIndex] = useState(0);
  const [isClear, setClear] = useState(true);
  const handleUpdateIndex = (i: any) => {
    setIndex(index);
    setClear(i === 0);
  };

  return (
    <Layout isClear={isClear}>
      <Fullpage handleUpdateIndex={handleUpdateIndex}>
        <HomeSlide1 />
        <HomeSlide2 />
        <HomeSlide3 />
        <HomeSlide4 />
        <HomeSlide5 />
      </Fullpage>
    </Layout>
  );
};
