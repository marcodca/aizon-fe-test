import React from "react"
import PropTypes from "prop-types"
import "styles/components/tabs/tab/index.css"

export const Tab = ({ title, active, onClick }) => {

  const buildClassName = (baseClassName) => {
    let className = baseClassName

    if (active) className += " active"

    return className
  }

  return (
    <div className={buildClassName("tab-wrapper")} onClick={onClick} data-testid="tab">
      <div className={buildClassName("title")}>{title}</div>
    </div>
  )
}

Tab.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

