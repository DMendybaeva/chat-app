import { Container, Row, Col } from 'react-bootstrap';

export const UnauthorizedLayout = ({ children }) => (
  <Container fluid className="flex-grow-1">
    <Row className="row justify-content-center align-content-center h-100">
      <Col md={8} xxl={6}>
        {children}
      </Col>
    </Row>
  </Container>
);
