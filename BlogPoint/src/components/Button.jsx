import React from 'react'

function Button({
    Children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <Button
    className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} `} {...props}>
        {Children}
    </Button>
  )
}

export default Button