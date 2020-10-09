import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function failed() {
  return (
    <div>
      <SEO title="Compra failed" />

      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>PAILA</p>
        <p>Te esperamos de vuelta, no pares de aprender</p>
        <span rol="img" aria-label="emoji">
          SAD
        </span>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
