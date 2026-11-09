import { loginService } from "@/services/auth/loginService"
import { getSessionService } from "@/services/auth/sessionService"
import type { Session } from "@supabase/supabase-js"
import { createContext, useContext, useEffect, useState } from "react"

type SessionProviderState = {
  session: Session | undefined
  login(email: string, password: string): void
}

const SessionProviderContext = createContext<SessionProviderState | undefined>(
  undefined
)

type SessionProviderProps = {
  children: React.ReactNode
}

export function SessionProvider({ ...props }: SessionProviderProps) {
  const [session, setSession] = useState<Session>()

  async function applySession() {
    const newSession = await getSessionService()

    if (newSession.data.session) {
      setSession(newSession.data.session)
    }
  }

  async function login(email: string, password: string) {
    if (email == "" || password == "")
      throw new Error("Email and password must not be empty.")

    const res = await loginService(email, password)

    if (res.error) {
      throw new Error("Error while loggin in: " + res.error.message)
    }

    if (res.data.session) {
      setSession(res.data.session)
    }
  }

  useEffect(() => {
    applySession()
  }, [])

  return (
    <SessionProviderContext value={{ session, login }}>
      {props.children}
    </SessionProviderContext>
  )
}

export function useSession() {
  const context = useContext(SessionProviderContext)

  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider")
  }

  return context
}
