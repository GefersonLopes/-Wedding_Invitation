import "./App.css";
import { ContextProvider } from "./context/Context";
import { RouteInPage } from "./routes/routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <ContextProvider>
                <RouteInPage />
                <ToastContainer />
            </ContextProvider>
        </>
    );
}

export default App;
