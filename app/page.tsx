import { auth } from "@/lib/auth/server"
import DealerCalculator from "@/components/dealer-calculator"

export const dynamic = "force-dynamic"

export default async function Home() {
  const { data: session } = await auth.getSession()

  return (
    <DealerCalculator
      user={session?.user ?? null}
    />
  )
}