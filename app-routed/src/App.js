import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import { Jumbotron, Button } from "reactstrap"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">Hello, React Router!</h1>
              <p className="lead">Simple way to use routing in React</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>About</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>Hello World. Welcome to this app.</Col>
        </Row>
      </Container>
    )
  }
}
