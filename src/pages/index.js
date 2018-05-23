import React from "react"
import Link from 'gatsby-link'

export default () => 
  <div style={{ color: `tomato` }}>
    <p>Hello Gatsby!</p>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
        <Link to="/page-2/">page 2</Link>
        <Link to="/counter/"> Counter!</Link>
    </div>
  </div>;
