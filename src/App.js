import { Provider } from "react-redux";
import "./App.css";
import CounterComponent from "./reduxcomponents/CounterComponent";
import store from "./redux/store";
import ChangeBackgroundComponent from "./reduxcomponents/ChangeBackgroundComponent";
import FetchApiData from "./reduxcomponents/FetchApiData";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h4 className="gradient-text" style={{ height: "50px" }}>
          REDUX EXAMPLE COMPONENTS WITH COMBINED REDUCERS
        </h4>
        <h3>Increment/Decrement </h3> <br />
        <CounterComponent />
        <h3>Change BackgroundColor </h3>
        <ChangeBackgroundComponent />
        <h3>Fetch Api Data Based on User Id </h3>
        <FetchApiData />
      </Provider>
    </div>
  );
}

export default App;
