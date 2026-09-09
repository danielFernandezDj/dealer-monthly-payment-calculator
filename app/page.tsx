import { auth } from "@/lib/auth/server"
import DealerCalculator from "@/components/dealer-calculator"

export const dynamic = "force-dynamic"

type Props = {
  id: string
  email: string
  null: null
}

export default async function Home() {
  const { data: session } = await auth.getSession()

  return <DealerCalculator user={session?.user ?? null} />
}
