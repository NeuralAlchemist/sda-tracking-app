import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList } from "react-tabs";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "react-confirm-alert/src/react-confirm-alert.css";
import "./styles/App.css";
import "./styles/global.css";
import "./styles/profile.css";
import ProfilePage from "./Pages/ProfilePage";
import PackageListPage from "./Pages/PackageListPage";
import QueryResultsPage from "./Pages/QueryResultsPage";

function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <BrowserRouter>
                    <Tabs className="tabs">
                        <TabList>
                            <Tab>
                                <Link to="/profile">
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        fontSize="xxx-large"
                                        className="fa fa-profile"
                                    />
                                </Link>
                            </Tab>
                            <Tab>
                                <Link to="/packagelist">
                                    <FontAwesomeIcon
                                        icon={faTruck}
                                        fontSize="xxx-large"
                                        className="fa fa-tracking"
                                    />
                                </Link>
                            </Tab>
                        </TabList>
                    </Tabs>
                    <Switch>
                        <Route path="/" exact component={ProfilePage} />
                        <Route path="/profile" component={ProfilePage} />
                        <Route
                            path="/packagelist"
                            component={PackageListPage}
                        />
                        <Route path="/results" component={QueryResultsPage} />
                    </Switch>
                </BrowserRouter>
            </RecoilRoot>
        </div>
    );
}

export default App;
