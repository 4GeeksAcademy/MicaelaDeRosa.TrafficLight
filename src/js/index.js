
import React from "react";
import ReactDOM from 'react-dom/client';
// include your styles into the webpack bundle
import "../styles/index.css";
import "bootstrap";
//import your own components
import { Home } from "./component/home";
//render your react application


let numbers, a, b;

numbers = [10, 20];
a = numbers[0]
b = numbers[1]
console.log(a, b);

ReactDOM.createRoot(document.getElementById('app')).render(<Home />);
