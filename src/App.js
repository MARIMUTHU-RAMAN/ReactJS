import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// import Logo from "@components/Logo/Logo";
// import Banner from "@components/Banner/Banner";
// import LoginForm from "@components/LoginForm/LoginForm";
// import RegistrationForm from "@components/RegistrationForm/RegistrationForm";
// import Dashboard from "@components/Dashboard/Dashboard";
// import MyTickets from "@components/MyTickets/MyTickets";
// import Duepayment from "@components/DuePayment/duepayment";
// import ViewReceipts from "@components/ViewReceipts/ViewReceipts";

import Logo from "./components/Logo/Logo";
import Banner from "./components/Banner/Banner";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Dashboard from "./components/Dashboard/Dashboard";
import MyTickets from "./components/MyTickets/MyTickets";
import Duepayment from "./components/DuePayment/duepayment";
import ViewReceipts from "./components/ViewReceipts/ViewReceipts";

// import {Component, useState} from "react";
// Above 16.8
function App() {
  //initializing state
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRegister, setIsRegister] = useState(false);
  const [isSubmit, setIsSubmit] = useState(true);

  function handleChange(newValue) {
    setIsRegister(newValue);
  }

  // updating state
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);

  const handleSubmit = (value) => {
    setIsSubmit(value);
  };

  return (
    <>
      {!isSubmit ? (
        <>
          <div className="container">
            <header className="App">
              <div>
                <Logo />
              </div>
              <div>
                <h1 className="Multicolortext">Customer Portal</h1>
              </div>
              <div className="timer">
                <span>{currentTime.toLocaleTimeString()}</span>
              </div>
            </header>
          </div>
          <section>
            <div className={"Form-header"}>
              <Banner />
              {!isRegister ? (
                <LoginForm
                  registerStatus={handleChange}
                  submitStatus={handleSubmit}
                />
              ) : (
                <RegistrationForm />
              )}
            </div>
          </section>
        </>
      ) : (
        <>
          <MyTickets />
          {/* <Routes>
            <Route path={"/dashboard"} element={<Dashboard />}></Route>
            <Route path={"/login"} element={<LoginForm />}></Route>
            <Route path={"/mytickets"} element={<MyTickets />}></Route>
            <Route path={"/duepayments"} element={<Duepayment />}></Route>
            <Route path={"/viewreceipts"} element={<ViewReceipts />}></Route>
            <Route path={"/"} element={<App />}></Route>
          </Routes> */}
        </>
      )}
    </>
  );
}

export default App;

// export class App extends Component{
// constructor() {
//     super()
//     this.state={
//         currenttime : new Date()
//     }
// }
//
// timerEvent=()=>{
//     this.setState({
//         currenttime: new Date()
//     })
// }
//
// componentDidMount() {
//     setInterval(this.timerEvent,1000)
// }
//     render(){
//       return(
//           <div className="App">
//               <header>
//                  <h1>Customer Portal</h1>
//                   {this.state.currenttime.toLocaleTimeString()}
//               </header>
//
//           </div>
//       )
//   }
// }
