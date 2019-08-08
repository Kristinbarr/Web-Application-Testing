import React from 'react'

const Display = (props) => {
    return (
      <>
        <div>
          <h3>
            BALLS: <span data-testid='balls'>{props.balls}</span>
          </h3>
          <h3>
            STRIKES: <span data-testid='strikes'>{props.strikes}</span>
          </h3>
          <h3>
            FOULS: <span data-testid='fouls'>{props.fouls}</span>
          </h3>
          <h3>
            HITS: <span data-testid='hits'>{props.hits}</span>
          </h3>
        </div>
      </>
    )
}

export default Display

// display the count of balls and strikes for the at-bat.
// should be updated when the user records activity on the Dashboard component.

