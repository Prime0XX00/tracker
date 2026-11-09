import LoginView from "@/views/login-view"
import { useSession } from "./providers/session-provider"
import { Button } from "./components/ui/button"
import { Loader2Icon } from "lucide-react"

export function App() {
  const { session, isLoading, logOut } = useSession()

  return (
    <>
      {session ? (
        <>
          logged in{" "}
          <Button onClick={logOut} disabled={isLoading}>
            {isLoading ? <Loader2Icon className="animate-spin" /> : "Log Out"}
          </Button>
        </>
      ) : (
        <LoginView />
      )}
    </>
  )
}

export default App
