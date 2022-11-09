import * as React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout"

const Index = ({data}) => {
    const monsters = data.allMonster.nodes
    console.log(monsters)
    return(
        <Layout>
            <h1 className="text-3xl font-bold underline">Bestiary</h1>
            <ul>
                {monsters.map((monster) => <li><Link to={`/monsters/${monster.id}`}>{monster.name}</Link></li>)}
            </ul>
        </Layout>
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