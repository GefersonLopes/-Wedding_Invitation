import "./App.css";
import { Salmos } from "./components/message_salmos/salmos";
import { RouteInPage } from "./routes/routes";

function App() {
    return (
        <>
            <RouteInPage />
            <Salmos />
        </>
    );
}

export default App;
