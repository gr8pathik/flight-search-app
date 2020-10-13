import React, {useState} from "react";
import {Tabs, Tab} from "react-bootstrap";

const SideBar = () => {
    const [key, setKey] = useState('oneway');

    return (
        <Tabs
            id="flight-form-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="oneway" title="One Way">
                Some Content
            </Tab>
            <Tab eventKey="return" title="Return">
                SOme Content
            </Tab>
        </Tabs>
    );
}
export default SideBar;