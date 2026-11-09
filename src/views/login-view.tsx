import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useSession } from "@/providers/session-provider"
import { useState } from "react"
import { Loader2Icon } from "lucide-react"

function LoginView() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { logIn, isLoading } = useSession()

  function handleEmailChange(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) {
    setPassword(e.target.value)
  }

  async function handleLogin() {
    logIn(email, password)
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email and password to login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login-form">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="mustermann@example.com"
                  onChange={handleEmailChange}
                  value={email}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? <Loader2Icon className="animate-spin" /> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginView
