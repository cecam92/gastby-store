import React from "react"
import { StyledJumbo } from "../styles/components"
import { Image } from "./"
export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>{description} </h2>
        <small>Piezas elegantes para los mejores estudiantes.</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}
