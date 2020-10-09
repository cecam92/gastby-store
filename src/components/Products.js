import React from "react"
import { Link } from "gatsby"
import { StyledProducts } from "../styles/components"
import priceFormat from "../utils/priceFormat"

export default function Products({ products }) {
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({ node }) => {
          const price = priceFormat(node.unit_amount)
          return (
            <article key={node.id}>
              <img src={node.product.metadata.img} alt={node.product.name} />
              <p>{node.product.name}</p>
              <small>USD {price} </small>
              <Link to={`/${node.id}`}>Comprar ahora</Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
