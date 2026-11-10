import { LANDING_URL, LOGIN_URL } from "@/magic/urls"
import { loginService } from "@/services/auth/loginService"
import { logoutService } from "@/services/auth/logoutService"
import { getSessionService } from "@/services/auth/sessionService"
import type { Session } from "@supabase/supabase-js"
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"

type SessionProviderState = {
  session: Session | null
  isLoading: boolean
  logIn(email: string, password: string): Promise<void>
  logOut(): Promise<void>
}

export const SessionProviderContext = createContext<
  SessionProviderState | undefined
>(undefined)

type SessionProviderProps = {
  children?: React.ReactNode
}

export function SessionProvider({ ...props }: SessionProviderProps) {
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  async function applySession() {
    const newSession = await getSessionService()

    if (newSession.data.session) {
      setSession(newSession.data.session)
    }
  }

  async function logIn(email: string, password: string) {
    if (email == "" || password == "")
      throw new Error("Email and password must not be empty.")

    setIsLoading(true)
    const res = await loginService(email, password)
    setIsLoading(false)

    if (res.error) {
      throw new Error("Error while loggin in: " + res.error.message)
    }

    if (res.data.session) {
      setSession(res.data.session)
    }
  }

  async function logOut() {
    setIsLoading(true)
    const res = await logoutService()
    setIsLoading(false)

    if (res.error) {
      throw new Error("Error while loggin out: " + res.error.message)
    }

    setSession(null)
  }

  useEffect(() => {
    applySession()
  }, [])

  useEffect(() => {
    if (session) {
      navigate(LANDING_URL)
    } else {
      navigate(LOGIN_URL)
    }
  }, [session])

  return (
    <SessionProviderContext value={{ session, isLoading, logIn, logOut }}>
      {props.children}
    </SessionProviderContext>
  )
}
