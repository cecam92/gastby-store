import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa" />

      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
        <p>Te esperamos de vuelta, no pares de aprender</p>
        <span rol="img" aria-label="emoji">
          HAPPY
        </span>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
