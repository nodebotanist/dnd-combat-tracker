const graphqlRequest = require("graphql-request")
const { request, gql } = graphqlRequest

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const query = gql`
    query {
        monsters {
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

    request('https://www.dnd5eapi.co/graphql', query).then((data) => {
        const monsters = data.monsters

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
    })
}

exports.createPages = () => {

}