import { Button } from "@/components/ui/button"
import { useSession } from "@/hooks/useSession"
import { Loader2Icon } from "lucide-react"

function Navbar() {
  const { isLoading, logOut } = useSession()

  return (
    <Button onClick={logOut} disabled={isLoading}>
      {isLoading ? <Loader2Icon className="animate-spin" /> : "Log Out"}
    </Button>
  )
}

export default Navbar
