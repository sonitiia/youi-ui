import MuiTheme from "./MuiTheme";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

const App = () => {
  return (
    <MuiTheme>
      <BrowserRouter> 
        <Router />
      </BrowserRouter>
    </MuiTheme>
  );
}

export default App;