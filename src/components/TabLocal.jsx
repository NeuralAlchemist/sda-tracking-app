import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {Link} from "react-router-dom";
import { useState } from "react";
export default function TabLocal() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
            <Tab
                data-selected={
                    window.location.pathname === "/profile" ||
                    window.location.pathname === "/"
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
            <Tab data-selected={window.location.pathname === "/packagelist"}>
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
    )
}
