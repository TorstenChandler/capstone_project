import { handle as auth } from "./auth"
import { sequence } from "@sveltejs/kit/hooks";
import { setSession } from '$houdini';
const set_houdini_session = async ({ event, resolve }) => {
    const session = await event.locals.auth()
    setSession(event, session);
    return resolve(event);
}
export const handle = sequence(auth, set_houdini_session)