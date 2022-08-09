import React from 'react'

function CurrentLocation(props) {
    console.log('props',props)
  return (
    <div
    style={{
      display: "flex",
      flexDirection:'column',
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      border: `2px solid red`,
      marginTop: "100px",
    }}
  >
    <h1>Get current Temperature</h1>
    {/* <button onClick={getLocation}>Get Location</button> */}
    <p><b>Latitude:</b> {props.lat}</p>
    <p><b>Longitude</b>: {props.long}</p>
    {/* <p><b>current Temp</b>: {data.main.temp}</p> */}
    <p><b>current Temp</b>: {props.temp}</p>
  </div>
  )
}

export default CurrentLocation