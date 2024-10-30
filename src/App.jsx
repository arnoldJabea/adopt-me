
import { createRoot } from "react-dom/client";
import Pet from "./pet.jsx";

const App = () => {
    <div>
        <h1>Adopt me!</h1>
        <Pet animal="Dog" name="Max" breed="Golden Retriever"/>
        <Pet animal="Cat" name="Poppy" breed="German Shepherd"/>
        <Pet animal="Bird" name="Winnie" breed="Golden Eagle"/>
    </div>
};
const container = document.getElementById("root");
const root =createRoot(container);
root.render(<App/>);
