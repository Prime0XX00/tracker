import { supabase } from "@/lib/supabaseClient"

export async function loginService(email: string, password: string) {
  return await supabase.auth.signInWithPassword({ email, password })
}
