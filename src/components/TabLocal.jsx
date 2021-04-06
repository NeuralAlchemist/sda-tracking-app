import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
export default function TabLocal() {
    const [tabIndex, setTabIndex] = useState(0);
    const location = useLocation();

    function checkPathToProfile() {
        return location.pathname === "/profile" || location.pathname === "/";
    }

    function checkPathToPackageList() {
        return location.pathname === "/packagelist";
    }
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab data-selected={checkPathToProfile()}>
                    <Link to="/profile">
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            fontSize="xxx-large"
                            className="fa fa-profile"
                        />
                    </Link>
                </Tab>
                <Tab data-selected={checkPathToPackageList()}>
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
    );
}
