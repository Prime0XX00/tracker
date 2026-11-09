import { supabase } from "@/lib/supabaseClient"

export async function logoutService() {
  return await supabase.auth.signOut()
}
