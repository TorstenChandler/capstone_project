/** @type {import('houdini').ConfigFile} */
const config = {
    "plugins": {
        "houdini-svelte": {}
    },
    watchSchema: {
        url: 'http://localhost:8080/v1/graphql',
        headers:{
            //@TODO: MOVE TO ENV FILE
            "x-hasura-admin-secret": "myadminsecret"
        }
    }
}

export default config