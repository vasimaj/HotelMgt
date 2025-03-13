
import React, { useState } from 'react'
import PageHeader from '@/components/shared/pageHeader/PageHeader'
import PageHeaderDate from '@/components/shared/pageHeader/PageHeaderDate'
import EmailOverview from '@/components/EmailOverview'
import Browser from '@/components/widgetsList/Browser'
import Remainders from '@/components/widgetsTables/Remainders'
import GoalMiscellaneous from '@/components/widgetsMiscellaneous/GoalMiscellaneous'
import SiteOverviewChart from '@/components/widgetsCharts/SiteOverviewChart'
import VisitorsOverviewChart from '@/components/widgetsCharts/VisitorsOverviewChart'
import SocialMediaStatisticsChart from '@/components/widgetsCharts/SocialMediaStatisticsChart'
import MarketingChart from '@/components/widgetsCharts/MarketingChart'
import Footer from '@/components/shared/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Table, Row, Col } from "react-bootstrap";
import axios from 'axios'

const CountryMaster = () => {
    const [CountryCode, setCountryCode] = useState("");
    const [CountryName, setCountryName] = useState("");
    const [StatusCode, setStatusCode] = useState(0);
    const [CountryId, setCountryId] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        // axios.post('http://localhost:8080/api/mihms/add_country', {
        //     CountryCode: CountryCode,
        //     CountryName: CountryName,
        //     StatusCode: StatusCode
        // })
        //     .then(result => {
        //         console.log(result);
        //         alert("Country Added Successfully");
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });

        const dataObj = {
            CountryCode: CountryCode,
            CountryName: CountryName,
            StatusCode: StatusCode,
            CreatedById: 1,
            CreatedDate: new Date()

        }
        if (CountryId == '') {
            axios.post('http://localhost:8080/api/mihms/add_country', dataObj)
                .then(result => {
                    console.log(result);
                    alert("Country Added Successfully");
                    window.location.reload();

                })
                .catch(err => {
                    console.log(err);
                });
        }


    }


    return (
        // <div>CountryMaster</div>
        <>
            <PageHeader>
                <PageHeaderDate />
            </PageHeader>
            <Container className="mt-4">
                {/* <h3 className="text-center">Country Master</h3> */}
                <Form>
                    <Row className="align-items-center">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Country Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Code"
                                    name='CountryCode'
                                    onChange={(e) => setCountryCode(e.target.value)}
                                // value={countryCode}
                                // onChange={(e) => setCountryCode(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Country Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Country Name"
                                    name='CountryName'
                                    onChange={(e) => setCountryName(e.target.value)}
                                // value={countryName}
                                // onChange={(e) => setCountryName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Select Status</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    value={StatusCode}
                                    onChange={(e) => setStatusCode(Number(e.target.value))}
                                >
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>


                    </Row><br />
                    <Row>
                        <Col md={3} className="d-flex align-items-end">
                            <Button variant="primary" onClick={handleSubmit} >
                                Add Country
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container><br />

            <Footer />
        </>
    )
}

export default CountryMaster