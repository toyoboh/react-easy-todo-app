import './css/App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./Header";
import TodoPage from "./TodoPage";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    {/* login page */}
                    <Route exact path="/login">
                        login
                    </Route>

                    {/* todoApp page */}
                    <Route exact path="/todoApp">
                        <Header />
                        <div className="app__mainContainer">
                            <TodoPage />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
