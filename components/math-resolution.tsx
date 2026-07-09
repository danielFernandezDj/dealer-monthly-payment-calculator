"use client"

import { ChevronRight, Info } from "lucide-react"

type MathResolutionProps = {
  amountFinanced: number
  apr: number
}

export default function MathResolution({
  amountFinanced,
  apr,
}: MathResolutionProps) {
  const terms = [32, 48, 60, 72, 84]

  function calculateMonthlyPayment(
    amountFinanced: number,
    apr: number,
    months: number
  ) {
    const monthlyRate = apr / 100 / 12
    if (monthlyRate === 0) return amountFinanced / months

    return (
      (amountFinanced * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1)
    )
  }

  return (
    <section className="flex flex-col gap-2 rounded-md bg-white">
      {/* Amount Financed */}
      <div className="flex flex-col items-start justify-center gap-2 p-4 text-black">
        <h1 className="text-lg font-semibold">AMOUNT FINANCED</h1>
        <p className="flex items-center text-3xl font-bold">
          <span>$</span> {amountFinanced.toLocaleString("en-US")}
          <Info className="ml-2" />
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <h2 className="font-semibold text-black">ESTIMATED MONTHLY PAYMENTS</h2>

        {terms.map((n) => (
          <div key={n} className="flex justify-between gap-2 text-black">
            <div className="flex items-center gap-2">
              <p className="text-xl">{n}</p>
              <span>MONTHS</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">$</span>
              <p className="text-xl">
                {calculateMonthlyPayment(amountFinanced, apr, n).toFixed(2)}
              </p>
            </div>

            <ChevronRight />
          </div>
        ))}
      </div>
    </section>
  )
}
