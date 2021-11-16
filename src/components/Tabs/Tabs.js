import React, { useState } from "react";
import "./Tabs.styles.css";

export const Tabs = ({ defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 0);
  const onClickTabHandler = (index) => {
    setActiveTab(index);
  };
  const tabsNav = [];
  for (var i = 0; i < children.length; i++) {
    const index = i;
    let child = children[i];
    const props = { ...child.props, key: child.props.title };
    props.onClick = () => {
      onClickTabHandler(index);
    };
    if (activeTab === i) props.active = true;
    else props.active = false;
    tabsNav.push(React.cloneElement(child, props));
  }
  const content = tabsNav[activeTab].props.children;
  return (
    <div className="tabs-container">
      <div className="tabs-nav" data-testid="tabs">
        {tabsNav}
      </div>
      <div className="content">{content}</div>
    </div>
  );
};
