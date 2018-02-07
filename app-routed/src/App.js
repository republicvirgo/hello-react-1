import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Things from "./pages/Things"

import Header from "./components/Header"

import "bootstrap/dist/css/bootstrap.min.css"

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>

          <Row>
            <Col>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link active to="/">
                    Home
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="/about">About</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to="/things">Things</Link>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/things" component={Things} />
        </Container>
      </Router>
    )
  }
}
