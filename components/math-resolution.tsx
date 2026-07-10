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
    <section className="flex scrollbar-thin flex-col gap-2 overflow-auto rounded-md">
      {/* Amount Financed */}
      <div className="flex flex-col items-start justify-center gap-2 rounded-md bg-blue-950 p-4 text-white">
        <h1 className="text-lg font-semibold">AMOUNT FINANCED</h1>
        <p className="flex items-center text-3xl font-bold">
          <span>$</span> {amountFinanced.toLocaleString("en-US")}
          <Info className="ml-2 stroke-1 " />
        </p>
      </div>

      <div className="flex flex-col gap-4 p-2">
        <div>
          <h2 className="font-semibold text-black">
            ESTIMATED MONTHLY PAYMENTS
          </h2>
          <span className="text-blue-700 font-bold">———</span>
        </div>

        {terms.map((n) => (
          <div
            key={n}
            className="flex justify-between rounded-md border-2 border-slate-200 p-4 text-black bg-slate-50"
          >
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold">{n}</p>
              <span className="text-xs">MONTHS</span>
            </div>

            <div className="flex items-center gap-2 text-blue-700">
              <span className="text-2xl font-bold">$</span>
              <p className="text-2xl font-semibold">
                {calculateMonthlyPayment(amountFinanced, apr, n).toFixed(2)}
              </p>
            </div>

            {/* <ChevronRight /> */}
          </div>
        ))}

        {/* Disclaimer Message */}
        <div className="grid grid-cols-4 rounded-md bg-blue-100 p-4">
          <Info className="ml-2 text-blue-700" />
          <div className="col-span-3 flex flex-col gap-1">
            <p className="font-semibold text-black">Disclaimer</p>
            <p className="text-sm text-slate-700">
              This is an estimate only. Final payments may vary based on credit
              approval, lender, and other factors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
