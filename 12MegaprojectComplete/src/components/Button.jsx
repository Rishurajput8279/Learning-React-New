import React from 'react'

function Button({childern,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} 
    ${className}`} type={type} {...props}>
        {childern}
    </button>


  )
}

export default Button