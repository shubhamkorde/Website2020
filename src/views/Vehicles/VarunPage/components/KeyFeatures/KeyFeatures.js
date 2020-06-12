import React from 'react';
import "./KeyFeatures.css";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

const embedstyle= {
    fontSize: "13px",
    fontWeight: "normal",
    margin: "5px",
    color: "#4A4A4A"
};


function Posts() {
    return (
        <>
            <div className="section landing-section light-light2">

                <Row className="d-flex justify-content-center">
                    <Col md="2"></Col>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2 className="text-center mb-4 heading-ssk">Key Features</h2>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="3"></Col>
                    <Col md="6" className="text-center">
                        <ul classname>
                            <li><h4 className="desc-ssk"><b >Modular design</b> for easy assembly and installation</h4></li>
                            <li><h4 className="desc-ssk">Staging vehicle to carry out experiments</h4></li>
                            <li><h4 className="desc-ssk">Capable of <b>underwater inspection and data collection </b></h4></li>
                            <li><h4 className="desc-ssk">Upto <b>4 hours of continuous operation</b> capability</h4></li>
                            <li><h4 className="desc-ssk">Budget of Rs. <b >7,45,000</b></h4></li>
                        </ul>
                    </Col>
                    <Col md="3"></Col>
                </Row>

            </div>

        </>
    );


}
export default Posts;