import { SessionProvider } from "@/providers/session-provider"
import LoginView from "@/views/login-view"

export function App() {
  return (
    <>
      <SessionProvider>
        <LoginView />
      </SessionProvider>
    </>
  )
}

export default App
