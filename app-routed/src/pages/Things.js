import React from "react"
import { Route, Link } from "react-router-dom"

import Thing from "./Thing"

const Things = ({ match }) => (
  <div>
    <h2>Things</h2>
    <ul>
      <li>
        <Link to={`${match.url}/one`}>Thing One</Link>
      </li>
      <li>
        <Link to={`${match.url}/two`}>Thing Two</Link>
      </li>
      <li>
        <Link to={`${match.url}/three`}>Thing Three</Link>
      </li>
    </ul>

    <hr />

    <Route path={`${match.url}/:thing_id`} component={Thing} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a thing</h3>}
    />
  </div>
)

export default Things
