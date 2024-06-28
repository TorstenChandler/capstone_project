/** @type {import('houdini').ConfigFile} */
const config = {
    include: "src/**/*.{svelte,graphql,gql,ts,js}",
    "plugins": {
        "houdini-svelte": {}
    },
    watchSchema: {
        url: 'http://localhost:8080/v1/graphql',
        headers: {
            //@TODO: MOVE TO ENV FILE
            "x-hasura-admin-secret": "myadminsecret"
        }
    },
    scalars: {
        /*
        json: {                  // <- The GraphQL Scalar
            type: Object,
            unmarshal(val) {
                return JSON.parse(val)
            },
            marshal(val) {
                return JSON.stringify(val)
            }

        },
        uuid: {
            type: String,
        },
        timestamptz: {                  // <- The GraphQL Scalar
            type: String  // <-  The TypeScript type
        },
        vector: {                  // <- The GraphQL Scalar
            type: Array,
            unmarshal(val) {
                return JSON.parse(val)
            },
            marshal(val) {
                return JSON.stringify(val)
            }
        },
        float8: {                  // <- The GraphQL Scalar
            type: Number  // <-  The TypeScript type
        }
             */
    }
}

export default config