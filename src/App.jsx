import Body from "./components/Body";
import { InputAndClickProvider } from "./context/InputAndClickContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <InputAndClickProvider>
        <Body />
      </InputAndClickProvider>
    </>
  );
}

export default App;
