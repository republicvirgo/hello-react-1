import React from "react"

const Thing = ({ match }) => (
  <div>
    <h3>This is the thing: {match.params.thing_id}</h3>
  </div>
)

export default Thing
