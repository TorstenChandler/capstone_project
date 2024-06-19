

/** @type {import('houdini').ConfigFile} */
const config = {
    watchSchema: {
        url: "http://localhost:8080/v1/graphql",
        //@TODO: REPLACE WITH SECRET FROM ENV FILE
        headers: {
			"x-hasura-admin-secret":"myadminsecret"
		}

    },
    "plugins": {
        "houdini-svelte": {}
    },
    scalars:{
        uuid: {              // <- The GraphQL Scalar
            type: "string"  // <-  The TypeScript type
        },
        timestamptz: {                 
            type: "Date",
            // turn the api's response into that type
            unmarshal(val) {
                return val ? new Date(val) : null
            },
            // turn the value into something the API can use
            marshal(date) {
                return date && date.getTime()
            }
        }
    }
}

export default config