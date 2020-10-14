import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import SideBar from "./components/SideBar";
import {Provider} from "react-redux";
import {store} from "./store";
import FlightListContainer from "./containers/FlightListContainer";

function App() {
    return (
        <Provider store={store}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Flight Search</Navbar.Brand>
            </Navbar>
            <Container fluid className="mt-5">
                <Row>
                    <Col lg="3">
                        <SideBar/>
                    </Col>
                    <Col lg="9">
                        <FlightListContainer/>
                    </Col>
                </Row>
            </Container>
        </Provider>
    );
}

export default App;
