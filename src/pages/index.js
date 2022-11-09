import * as React from "react"
import {graphql} from "gatsby"

const Index = ({data}) => {
    return(
        <>
            <h1>Hello, World!</h1>
            {console.log(data)}
        </>
    )
}

export const query = graphql`query {
    allMonster {
        nodes {
            challenge_rating
            name
        }
    }
}`

export default Index