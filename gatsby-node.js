const graphqlRequest = require("graphql-request")
const { request, gql } = graphqlRequest

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const query = gql`
    query {
        monsters (limit: 500) {
            name
            desc
            challenge_rating
            hit_points
            actions {
            name
            attack_bonus
            attacks {
              damage {
                damage_dice
                damage_type {
                  desc
                  name
                }
              }
            }
            damage {
              damage_dice
              damage_type {
                desc
                name
              }
            }
            dc {
              success
              type {
                desc
                name
              }
              value
            }
          }
          reactions {
            desc
          }
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

exports.createPages = () => {

}