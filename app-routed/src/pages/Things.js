import React from "react"
import { Route } from "react-router-dom"

import ListOfThings from "../components/ListOfThings"
import Thing from "../components/Thing"

const Things = ({ match }) => (
  <div>
    <Route exact path={match.url} component={ListOfThings} />
    <Route path={`${match.url}/:thing_id`} component={Thing} />
  </div>
)

export default Things
