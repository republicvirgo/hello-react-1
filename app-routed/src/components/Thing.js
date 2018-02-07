import React from "react"

import THINGS from "../data/things"

const Thing = ({ match }) => {
  const id = match.params.thing_id
  const thing = THINGS.filter((THING) => {
    return THING.id === Number(id)
  })

  const name = thing[0].name
  const project = thing[0].project

  return (
    <div>
      <h3>This is the thing:</h3>
      <h4>
        {name} with his project {project}
      </h4>
    </div>
  )
}

export default Thing
