import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "react-confirm-alert/src/react-confirm-alert.css";
import "./styles/App.css";
import "./styles/global.css";
import "./styles/profile.css";
import ProfilePage from "./Pages/ProfilePage";
import PackageListPage from "./Pages/PackageListPage";
import QueryResultsPage from "./Pages/QueryResultsPage";
import FetchData from "./components/FetchData";
import PackageInfo from "./components/PackageInfo"
import TabLocal from "./components/TabLocal";

function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <FetchData/>
                <BrowserRouter>
                <h1>Yellow Postal</h1>
                <TabLocal/>
                    <Switch>
                        <Route path="/" exact component={ProfilePage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route
                            path="/packagelist" exact
                            component={PackageListPage}
                        />
                        <Route path="/packagelist/:id" component={PackageInfo}/>
                        <Route path="/results" component={QueryResultsPage} />
                    </Switch>
                </BrowserRouter>
            </RecoilRoot>
        </div>
    );
}

export default App;
