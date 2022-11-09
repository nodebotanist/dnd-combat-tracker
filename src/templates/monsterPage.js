import * as React from "react"
import { Link } from "gatsby"

const MonsterPage = ({ pageContext }) => {
    return (
        <>
            <Link to="/">Back to Bestiary</Link>
            <h2>{pageContext.name}</h2>
            <p>Challenge Rating: {pageContext.challenge_rating}</p>
        </>
    )
}

export default MonsterPage