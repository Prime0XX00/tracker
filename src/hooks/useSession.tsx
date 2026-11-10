import { SessionProviderContext } from "@/providers/session-provider"
import { useContext } from "react"

export function useSession() {
  const context = useContext(SessionProviderContext)

  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider")
  }

  return context
}
