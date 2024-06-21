import { HoudiniClient } from '$houdini';
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { createClient } from 'graphql-ws';
import { subscription } from '$houdini/plugins'

function _createClient(config) {
    // instantiate the transport client
    const client = new SubscriptionClient(config.url, {
        connectionParams: config.connectionParams(),
        reconnect: true,
    })

    // wrap the client in something houdini can use
    return {
        subscribe(payload, handlers) {
            // send the request
            const { unsubscribe } = client.request(payload).subscribe(handlers)

            // return the function to unsubscribe
            return unsubscribe
        },
    }
}


export default new HoudiniClient({
    url: 'http://localhost:8080/v1/graphql',
    fetchParams({ session }) {
        return { headers: get_headers(session) }
    },
    plugins: [

        subscription(({ session }) => createClient({
            url: 'ws://localhost:8080/v1/graphql',
            connectionParams: () => {
                return { headers: get_headers(session) }
            }
        }))
    ]
})

function get_headers(session) {
    let id = session?.user?.id ? session.user.id : 0
    return {
        //@TODO: MOVE SECRET TO ENV FILE
        "x-hasura-admin-secret": "myadminsecret",
        "x-hasura-role": "user",
        "x-hasura-user-id": id.toString()
    }
}