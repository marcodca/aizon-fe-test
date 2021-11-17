import React, { useState } from "react"
import PropTypes from "prop-types"
import "styles/components/tabs/index.css"

export const Tabs = ({ defaultTab, children }) => {
  const [activeIndexTab, setActiveIndexTab] = useState(defaultTab);

  const getOnClickTabHandler = (index) => {
    return () => {
      setActiveIndexTab(index);
    }
  }

  const renderContent = () => {
    return children[activeIndexTab]?.props?.children;
  }

  const renderTabNav = (element, index) => {
    const { type: TabNav, props } = element;

    return (
      <TabNav
        {...props}
        active={activeIndexTab === index}
        onClick={getOnClickTabHandler(index)}
      />
    )
  }

  if (!children?.length) return null;

  return (
    <div className='tabs-container'  data-testid='tabs'>
      <div className='tabs-nav' data-testid='tabs-nav'>
        {React.Children.map(children, renderTabNav)}
      </div>
      <div className='content' data-testid='tabs-content'>{renderContent()}</div>
    </div>
  )
}

Tabs.defaultProps = {
  defaultTab: 0
}

Tabs.propTypes = {
  defaultTab: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}