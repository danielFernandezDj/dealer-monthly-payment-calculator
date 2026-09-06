import { auth } from "@/lib/auth/server"
import DealerCalculator from "@/components/dealer-calculator"

export const dynamic = "force-dynamic"

type DealerCalculator = {
  user: {
    name: string
    email: string
  } | null
}

export default async function Home({ user }: DealerCalculator) {
  const { data: session } = await auth.getSession()
  return user ? <div>Signed in</div> : <div>Sign-in and sign-up buttons</div>
}
