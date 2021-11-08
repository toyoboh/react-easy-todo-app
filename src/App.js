import './css/App.css';
import { Router as BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Left from "./Left";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__mainContainer">
                <Main />
                <Left />
            </div>
        </div>
    );
}

export default App;
