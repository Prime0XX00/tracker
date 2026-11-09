import { supabase } from "@/lib/supabaseClient"

export async function getSessionService() {
  return await supabase.auth.getSession()
}
