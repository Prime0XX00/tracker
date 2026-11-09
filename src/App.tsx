import LoginView from "@/views/login-view"
import { useSession } from "./providers/session-provider"
import { Button } from "./components/ui/button"

export function App() {
  const { session, isLoading, logOut } = useSession()

  return (
    <>
      {session ? (
        <>
          logged in{" "}
          <Button onClick={logOut} disabled={isLoading}>
            Log out
          </Button>
        </>
      ) : (
        <LoginView />
      )}
    </>
  )
}

export default App
