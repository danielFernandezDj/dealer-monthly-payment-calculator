"use client"

import { ChevronRight, Info } from "lucide-react"

type MathResolutionProps = {
  amountFinanced: number
}

export default function MathResolution({
  amountFinanced,
}: MathResolutionProps) {
  return (
    <section className="flex flex-col gap-2 rounded-md bg-white">
      {/* Amount Financed */}
      <div className="flex flex-col items-start justify-center gap-2 p-4 text-black">
        <h1 className="text-lg font-semibold">AMOUNT FINANCED</h1>
        <p className="flex items-center text-3xl font-bold">
          <span>$</span>  {amountFinanced.toLocaleString("en-US")}
          <Info className="ml-2" />
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <h2 className="text-black font-semibold">ESTIMATED MONTHLY PAYMENTS</h2>

        <div className="flex w-full flex-col gap-2 text-black">
          <div className="flex justify-between gap-2">
            <div className="flex items-center gap-2">
              <p className="text-xl">48</p>
              <span>MONTHS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">$</span>
              <p className="text-xl">44</p>
            </div>
            <ChevronRight />
          </div>
        </div>
      </div>
    </section>
  )
}
