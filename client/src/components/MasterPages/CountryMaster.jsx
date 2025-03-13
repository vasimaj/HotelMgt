
import React from 'react'
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

const CountryMaster = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Country Added Successfully")
    }
    return (
        // <div>CountryMaster</div>
        <>
            <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <Container className="mt-4">
                {/* <h3 className="text-center">Country Master</h3> */}
                <Form>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Country Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Code"
                                // value={countryCode}
                                // onChange={(e) => setCountryCode(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Country Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Country Name"
                                // value={countryName}
                                // onChange={(e) => setCountryName(e.target.value)}
                                />
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