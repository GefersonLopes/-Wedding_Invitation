import "./App.css";
import { ContextProvider } from "./context/Context";
import { RouteInPage } from "./routes/routes";

function App() {
    return (
        <>
            <ContextProvider>
                <RouteInPage />
            </ContextProvider>
        </>
    );
}

export default App;
