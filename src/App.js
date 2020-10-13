import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Row, Col, Container, Navbar} from "react-bootstrap";
import SideBar from "./components/SideBar";
import FlightList from "./components/FlightList";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Flight Search</Navbar.Brand>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col lg="3">
                        <SideBar />
                    </Col>
                    <Col lg="9">
                        <FlightList />
                    </Col>
                </Row>
            </Container>
        </Provider>
    );
}

export default App;
