import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo from './Demo.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <Demo/>
//     <App />
//   </StrictMode>,
// )
const user = "betty cooper";

// jsx syntax to create HTML like element
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'Click me to visit google',
  user,
)

createRoot(document.getElementById('root')).render(
  anotherElement
)
