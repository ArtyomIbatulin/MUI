import "./App.css";
import MuiGroupedAutocomp from "./components/autoComplete/MuiGroupedAutocomp";
// import MuiAnInputs from './components/MuiAnInputs'
// import MuiAutocmpl from "./components/autoComplete/MuiAutocmpl";
import MuiSelContries from "./components/autoComplete/MuiSelContries";
// import MuiInpAdornments from './components/MuiInpAdornments'
// import { MuiTextField } from './components/MuiTextField'
// import { MuiButton } from './components/MuiButton'
// import { MuiTypography } from './components/MuiTypography'

function App() {
  return (
    <div className="App">
      {/* <MuiTypography></MuiTypography> */}
      {/* <MuiButton></MuiButton> */}
      {/* <MuiTextField></MuiTextField> */}
      {/* <MuiInpAdornments></MuiInpAdornments> */}
      {/* <MuiAnInputs></MuiAnInputs> */}
      {/* <MuiAutocmpl></MuiAutocmpl> */}
      <MuiSelContries></MuiSelContries>
      <MuiGroupedAutocomp></MuiGroupedAutocomp>
    </div>
  );
}

export default App;
