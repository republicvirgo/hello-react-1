import React from "react"
import { Route, Link } from "react-router-dom"

import Thing from "../components/Thing"

import THINGS from "../data/things"

const Things = ({ match }) => (
  <div>
    <Route path={`${match.url}/:thing_id`} component={Thing} />
    <Route
      exact
      path={match.url}
      render={() => (
        <div>
          <h3>Please select a thing</h3>
          <ul>
            {THINGS.map((THING) => {
              return (
                <li key={THING.id}>
                  <Link to={`${match.url}/${THING.id}`}>
                    {THING.name} with {THING.project}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    />
  </div>
)

export default Things
