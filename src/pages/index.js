import * as React from "react"
import {graphql, Link} from "gatsby"

const Index = ({data}) => {
    const monsters = data.allMonster.nodes
    console.log(monsters)
    return(
        <>
            <h1>Bestiary</h1>
            <ul>
                {monsters.map((monster) => <li><Link to={`/monsters/${monster.id}`}>{monster.name}</Link></li>)}
            </ul>
        </>
    )
}

export const query = graphql`query {
    allMonster {
        nodes {
            challenge_rating
            name
            id
        }
    }
}`

export default Index