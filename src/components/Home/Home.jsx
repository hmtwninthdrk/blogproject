import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import rbg from '../../img/reactbg.jpg'
import { Badge, Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12}>
            <h1>
              What is <Badge bg="secondary">React</Badge>
            </h1>

            <Card>
              <Card.Body>
                React is a declarative JavaScript library for creating user
                interfaces. It allows you to assemble a complex UI from small
                isolated pieces of code called "components". React provides two
                syntaxes for creating components: class and functional. Class is
                rarely used, since the syntax of classes is often superfluous to
                describe components. Poet The React code looks easier and more
                concise than the solution in pure JS. We don't describe how to
                redraw the interface. Instead, we specify what needs to be
                displayed in place of the component, and use a syntax similar to
                HTML for this. This approach makes it relatively easy to solve
                more complex tasks. For example, redraw the cart page layout and
                display the order page interface in its place. React uses
                Virtual DOM for its redraws. This allows you to update only the
                changed nodes of the DOM tree, and not redraw the entire page.
                Thanks to this, applications do not consume unnecessary
                resources. React solves the problems of frontenders when
                developing interfaces for dynamic websites and SPA applications.
                When using the classic combination of JavaScript and HTML,
                redrawing the interface becomes much more complicated. React
                does not limit the developer's capabilities, unlike any
                frameworks.
              </Card.Body>
            </Card>

          
            
          </Col>
          <Col xs={12}>
            <h1>
              What is <Badge bg="secondary">React</Badge>
            </h1>

            <Card>
              <Card.Body>
                React is a declarative JavaScript library for creating user
                interfaces. It allows you to assemble a complex UI from small
                isolated pieces of code called "components". React provides two
                syntaxes for creating components: class and functional. Class is
                rarely used, since the syntax of classes is often superfluous to
                describe components. Poet The React code looks easier and more
                concise than the solution in pure JS. We don't describe how to
                redraw the interface. Instead, we specify what needs to be
                displayed in place of the component, and use a syntax similar to
                HTML for this. This approach makes it relatively easy to solve
                more complex tasks. For example, redraw the cart page layout and
                display the order page interface in its place. React uses
                Virtual DOM for its redraws. This allows you to update only the
                changed nodes of the DOM tree, and not redraw the entire page.
                Thanks to this, applications do not consume unnecessary
                resources. React solves the problems of frontenders when
                developing interfaces for dynamic websites and SPA applications.
                When using the classic combination of JavaScript and HTML,
                redrawing the interface becomes much more complicated. React
                does not limit the developer's capabilities, unlike any
                frameworks.
              </Card.Body>
            </Card>

            
          </Col>
        </Row>

      </Container>
      <Footer />
    </>
  );
};

export default Home;
