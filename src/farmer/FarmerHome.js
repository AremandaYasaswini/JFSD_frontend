import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Farmer = () => {
  const navigate = useNavigate();

  const handleProductManagement = () => {
    navigate('/farmer/new-launches'); // Redirect to Manage Products page
  };

  const handleOrderManagement = () => {
    navigate('/farmer/orders?status=pending'); // Redirect to View Orders page
  };

  const handleDashboard = () => {
    navigate('/farmer/dashboard'); // Redirect to Dashboard page
  };

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
              <Button color="primary" block onClick={handleProductManagement}>
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
              <Button color="warning" block onClick={handleOrderManagement}>
                Go to Order Management
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-info">Dashboard</CardTitle>
              <CardText>
                View your overall performance, analytics, and manage account details.
              </CardText>
              <Button color="info" block onClick={handleDashboard}>
                Go to Dashboard
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Farmer;
