import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import '../css/Admin.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const Admin = () => {
  // Sample data for the pie chart
  const data = {
    labels: ['Users', 'Orders'], // Categories to display
    datasets: [
      {
        data: [120, 75], // Sample numbers for users and orders
        backgroundColor: ['#36A2EB', '#FFCE56'], // Pie slice colors
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <Container className="admin-container mt-5">
      <Row>
        <Col md="12">
          <h1 className="text-center text-primary mb-4">Welcome, Admin!</h1>
          <p className="text-center text-muted">You have full access to manage the system.</p>
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-success">Manage Users</CardTitle>
              <CardText>
                View and update user accounts. Ensure smooth user management and monitor system users.
              </CardText>
              <Button color="primary" block>
                Go to User Management
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-info">View Statistics</CardTitle>
              <CardText>
                Monitor system usage, activity, and track statistics for better decision-making.
              </CardText>
              {/* Pie chart for users and orders statistics */}
              <div className="chart-container text-center">
                <Pie data={data} />
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col md="4">
          <Card className="shadow-sm mb-4">
            <CardBody>
              <CardTitle tag="h5" className="text-warning">System Settings</CardTitle>
              <CardText>
                Adjust configurations, preferences, and ensure everything is running smoothly.
              </CardText>
              <Button color="danger" block>
                Go to Settings
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
