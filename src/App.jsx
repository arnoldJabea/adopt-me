import { createRoot } from "react-dom/client";
// eslint-disable-next-line import/no-unresolved
import SearchParams from "./SearchParams";



function App() {
  return(
  <div>
    <h1>Adopt me!</h1>
    <SearchParams />

  </div>
  );
};
const container = document.getElementById("root");
const root =createRoot(container);
root.render(<App/>);
