import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Route/AppRoute";
import RefundPolicy from "./components/RefundPolicy/RefundPolicy";
import CourseDetails from "./components/CourseDetails/CourseDetails"

function App() {
  return (
    <div className="App">

  

      <BrowserRouter>
      <AppRoute></AppRoute>
      </BrowserRouter>   

    </div>
  );
}

export default App;
