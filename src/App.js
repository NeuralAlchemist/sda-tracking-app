import "./styles/App.css";
import "./styles/global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function App() {
    return (
        <div className="App">
            <Tabs className="tabs">
                <TabList>
                    <Tab>
                        <FontAwesomeIcon
                            icon={faTruck}
                            fontSize="xxx-large"
                            className="fa fa-tracking"
                        />
                    </Tab>
                    <Tab>
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            fontSize="xxx-large"
                            className="fa fa-profile"
                        />
                    </Tab>
                </TabList>
                <TabPanel>Tracking</TabPanel>
                <TabPanel>Profile</TabPanel>
            </Tabs>
        </div>
    );
}

export default App;
