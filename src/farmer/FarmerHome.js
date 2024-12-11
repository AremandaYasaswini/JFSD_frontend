import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';


const Farmer = () => {
  return (
    <Container className="farmer-container mt-5">
      <Row>
        <Col md="12">
          <h1 className="text-center text-success mb-4">Welcome, Farmer!</h1>
          <p className="text-center text-muted">Manage your products and orders seamlessly.</p>
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-primary">Manage Products</CardTitle>
              <CardText>
                Add, update, and monitor your products to ensure inventory is always accurate.
              </CardText>
              <Button color="primary" block>
                Go to Product Management
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-warning">View Orders</CardTitle>
              <CardText>
                Check and fulfill orders placed by buyers. Stay updated on your transactions.
              </CardText>
              <Button color="warning" block>
                Go to Order Management
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-info">Account Settings</CardTitle>
              <CardText>
                Update your profile, payment details, and preferences.
              </CardText>
              <Button color="info" block>
                Go to Account Settings
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Farmer;
