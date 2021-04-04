import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
    BrowserRouter,
    Route,
    Switch,
    Link,
    useLocation,
} from "react-router-dom";
import { RecoilRoot, useRecoilState } from "recoil";
import { useState, useEffect } from "react";

import "react-confirm-alert/src/react-confirm-alert.css";
import "./styles/App.css";
import "./styles/global.css";
import "./styles/profile.css";
import ProfilePage from "./Pages/ProfilePage";
import PackageListPage from "./Pages/PackageListPage";
import QueryResultsPage from "./Pages/QueryResultsPage";
import { tabIndexData } from "./states/tabIndexData";

function App() {
    const [tabIndex, setTabIndex] = useState(0);
    /* {window.location.pathname === "/" && setTabIndex(0)};
    console.log(`tab index is ${tabIndex}`);
    console.log(`current location is ${window.location.pathname}`); */
    return (
        <div className="App">
            <RecoilRoot>
                <BrowserRouter>
                    <Tabs
                        className="tabs"
                        selectedIndex={tabIndex}
                        onSelect={(index) => setTabIndex(index)}
                    >
                        <TabList>
                            <Tab
                                data-selected={
                                    window.location.pathname === "/profile" || window.location.pathname === "/"
                                }
                            >
                                <Link to="/profile">
                                    <FontAwesomeIcon
                                        icon={faUserCircle}
                                        fontSize="xxx-large"
                                        className="fa fa-profile"
                                    />
                                </Link>
                            </Tab>
                            <Tab
                                data-selected={
                                    window.location.pathname === "/packagelist"
                                }
                            >
                                <Link to="/packagelist">
                                    <FontAwesomeIcon
                                        icon={faTruck}
                                        fontSize="xxx-large"
                                        className="fa fa-tracking"
                                    />
                                </Link>
                            </Tab>
                        </TabList>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
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
