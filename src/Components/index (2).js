import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import Counter from "./Components/counter";
// import AssignTwo from "./Components/AssignTwo";
// import Search from "./Components/Search";
// import Todo from "./Components/Todo";
// import Login from "./Components/Login";

// import ReverseString from "./Components/ReverseString";
import AddForm from "./Components/AddForm";
// import App from "./Sirtodo";

ReactDOM.render(<AddForm />, document.getElementById("root"));

// import ReverseString from "./Components/ReverseString";
// // import AddForm from "./Components/AddForm";
// // import App from "./Sirtodo";

// ReactDOM.render(<ReverseString />, document.getElementById("root"));

import AdminLogin from "./Components/AdminLogin";
// import App from "./Sirtodo";

ReactDOM.render(<AdminLogin />, document.getElementById("root"));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
