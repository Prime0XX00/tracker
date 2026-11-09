import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useSession } from "@/providers/session-provider"
import { useState } from "react"

function LoginView() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useSession()

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
    login(email, password)
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
                <FieldDescription>
                  Choose a unique username for your account.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
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
          <Button type="submit" className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginView
