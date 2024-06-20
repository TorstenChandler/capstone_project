import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'http://localhost:8080/v1/graphql',
    fetchParams({session}) {
        return {
            headers: {
                //@TODO: MOVE SECRET TO ENV FILE
                "x-hasura-admin-secret": "myadminsecret",
                "x-hasura-role": "user",
                "x-hasura-user-id": session?.user?.id ? session.user?.id : 0,
            },
        }
    },
})