// @ts-nocheck
import type { LayoutServerLoad } from "./$types"
import { redirect } from '@sveltejs/kit';
export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
  const session = await event.locals.auth()
  if (!session) {
    //redirect(307, '/signin');
   }
  return {
    session,
  }
}