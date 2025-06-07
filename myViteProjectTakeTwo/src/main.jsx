import React from "react";
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import MyFunction from "./App.jsx";

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "click me to go to google.com",
// };

const anotherElement = (
    <a href="https://google.com" target='_blank'> Visit google</a>
)

const reactElement = React.createElement( //  createElement => Babble
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement
)

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
