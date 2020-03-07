import * as React from "react";
import { useEffect, useLayoutEffect, useState } from "react";

const Index = ({
  children,
  handleUpdateIndex,
  scroll = false
}: {
  children: any;
  handleUpdateIndex: (index: any) => void;
  scroll: boolean;
}) => {
  const [index, setIndex] = useState(0);
  let childrenRefs: { [id: number]: HTMLElement } = {};
  let offsets = {};

  let setChildRef = index => el => {
    childrenRefs[index] = el;
  };

  const handleIndexPosition = () => {
    const scrollPos: number = window.scrollY;
    const element = Object.values(offsets).findIndex(
      entry => entry >= scrollPos
    );
    setIndex(element);
    handleUpdateIndex(element);
  };

  const handleScroll = (e: Event) => {
    if (scroll) {
      e.preventDefault();
    }

    handleIndexPosition();
  };

  const getChildrenBreakpoints = () => {
    offsets = Object.entries(childrenRefs).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]:
          value.getBoundingClientRect().top +
          value.getBoundingClientRect().height
      };
    }, {});
  };

  useEffect(() => {
    getChildrenBreakpoints();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("scroll", e => handleScroll(e));
    return () => window.removeEventListener("scroll", e => handleScroll(e));
  }, []);

  const renderElements = () =>
    React.Children.toArray(children).map((child: any, i) =>
      React.cloneElement(child, { key: i, ref: setChildRef(i) })
    );

  return <>{renderElements()}</>;
};

export default Index;
