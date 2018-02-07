import React from "react"
import { Link } from "react-router-dom"

import THINGS from "../data/things"

const ListOfThings = ({ match }) => (
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
)

export default ListOfThings
