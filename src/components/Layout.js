import Header from './Header'
import { Container, Row } from 'react-bootstrap'

function Layout(props) {
  return (
    <Container fluid>
      <Row>
        <Header></Header>
        {props.children}
      </Row>
    </Container>
  );
}

export default Layout;
