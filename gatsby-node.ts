import type { GatsbyNode } from "gatsby"

import { request, gql } from "graphql-request"

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({ actions, createNode, createNodeId, createContentDigest }) => {
    const query = gql`
    query addMonsters {
        monsters (limit: 500) {
            name
            desc
            challenge_rating
            hit_points
            image
        }
    }`

    let monsters = await request('https://www.dnd5eapi.co/graphql', query)
    monsters = monsters.monsters

    monsters.forEach((monster) => {
        actions.createNode({
            // Data for the node.
            ...monster,
            // Required fields.
            id: createNodeId(monster.name),
            internal: {
                type: `monster`,
                contentDigest: createContentDigest(monster)
            }
        })
    })
}