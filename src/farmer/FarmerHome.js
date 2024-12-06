import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const FarmerHome = () => {
  return (
    <Container className="farmer-home mt-5">
      <Row>
        <Col md="12">
          <h1 className="text-center text-primary mb-4">Welcome, Farmer!</h1>
        </Col>
      </Row>

      <Row>
        <Col md="6">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-success">Manage Your Products</CardTitle>
              <CardText>
                This is your dashboard where you can manage your products and view orders.
              </CardText>
              <Button color="primary" block>
                Go to Product Management
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col md="6">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-info">Upcoming Features</CardTitle>
              <CardText>
                Stay tuned for more options coming soon. We are working on additional tools to help you grow your business!
              </CardText>
              <Button color="secondary" block>
                Learn More
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FarmerHome;
