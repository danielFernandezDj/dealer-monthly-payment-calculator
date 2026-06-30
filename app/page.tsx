"use client"

import { useState } from "react"

import { Button } from "../components/ui/button"
// import { Label } from "../components/ui/label"
// import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"

import {
  CarFront,
  UserRound,
  Repeat,
  FileText,
  Calculator,
  RotateCcw,
} from "lucide-react"

export default function Page() {
  const [vehiclePrice, setVehiclePrice] = useState("")
  const [downPayment, setDownPayment] = useState("")
  const [currentPayoff, setCurrentPayoff] = useState("")
  const [dealerTradeOffer, setDealerTradeOffer] = useState("")
  const [salesTaxRate, setSalesTaxRate] = useState("6.25")
  const [dealerFees, setDealerFees] = useState("225")
  const [otherFees, setOtherFees] = useState("")
  const [apr, setApr] = useState("")

  function parseFormattedNumber(value: string) {
    if (!value) return 0
    return Number(value.replace(/,/g, ""))
  }

  function tradeEquityCalculator(
    currentPayoff: number,
    dealerTradeOffer: number
  ) {
    if (currentPayoff > dealerTradeOffer) {
      return currentPayoff - dealerTradeOffer
    } else if (currentPayoff < dealerTradeOffer) {
      return dealerTradeOffer - currentPayoff
    }

    return 0
  }

  return (
    <div className="flex min-h-svh flex-col bg-slate-100">
      {/* Header */}
      <div className="flex w-full items-center justify-center gap-2 bg-blue-950 py-5">
        <CarFront className="h-12 w-12 text-white" />
        <p className="text-xl font-bold text-white">
          Dealer Payment <br /> Calculator
        </p>
      </div>

      {/* Main Content */}
      {/* <div className="b-4 flex w-full border-2"> */}
      <form className="flex h-full w-full flex-col gap-4 p-2 text-black">
        {/* Vehicle Information */}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
          <div className="flex items-center gap-2">
            <CarFront className="h-6 w-auto text-blue-700" />
            <p className="font-semibold">1. VEHICLE</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>Vehicle Price</p>
            <div className="flex items-center rounded-md border border-gray-300 px-4">
              <span>$</span>
              <Input
                id="car-price"
                type="text"
                inputMode="numeric"
                placeholder="35.000"
                min={"0"}
                max={"99000"}
                maxLength={6}
                value={vehiclePrice}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "")
                  const formatted = Number(numbersOnly).toLocaleString("en-US")
                  setVehiclePrice(formatted)
                }}
                required
                className="w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Customer Cash */}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
          <div className="flex items-center gap-2">
            <UserRound className="h-6 w-auto text-blue-700" />
            <p className="font-semibold">2. CUSTOMER CASH</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>Down Payment</p>
            <div className="flex items-center rounded-md border border-gray-300 px-4">
              <span>$</span>
              <Input
                id="down-payment"
                type="text"
                inputMode="numeric"
                placeholder="5.000"
                min={"0"}
                max={"99000"}
                maxLength={6}
                value={downPayment}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "")
                  const formatted = Number(numbersOnly).toLocaleString("en-US")
                  setDownPayment(formatted)
                }}
                required
                className="w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Trade In */}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
          <div className="flex items-center gap-2">
            <Repeat className="h-6 w-auto text-blue-700" />
            <p className="font-semibold">3. TRADE-IN</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>Current Payoff</p>
            <div className="flex items-center rounded-md border border-gray-300 px-4">
              <span>$</span>
              <Input
                id="current-payoff"
                type="text"
                inputMode="numeric"
                placeholder="10.000"
                min={"0"}
                max={"99000"}
                maxLength={6}
                value={currentPayoff}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "")
                  const formatted = Number(numbersOnly).toLocaleString("en-US")
                  setCurrentPayoff(formatted)
                }}
                required
                className="w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>Dealer Trade Offer</p>
            <div className="flex items-center rounded-md border border-gray-300 px-4">
              <span>$</span>
              <Input
                id="dealer-trade-offer"
                type="text"
                inputMode="numeric"
                placeholder="8.000"
                min={"0"}
                max={"99000"}
                maxLength={6}
                value={dealerTradeOffer}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "")
                  const formatted = Number(numbersOnly).toLocaleString("en-US")
                  setDealerTradeOffer(formatted)
                }}
                required
                className="w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
              />
            </div>
          </div>

          <div className="flex w-full justify-between gap-2 rounded-md border border-green-200 bg-green-50 p-2 text-green-700">
            <div className="flex flex-col">
              <p className="text-sm">Trade Equity (Auto)</p>
              <div className="flex gap-2">
                <p>{currentPayoff}</p>
                <span> - </span>
                <p>{dealerTradeOffer}</p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <h2 className="text-2xl font-bold">
                <span>
                  {" "}
                  {parseFormattedNumber(currentPayoff) >
                  parseFormattedNumber(dealerTradeOffer)
                    ? "+$"
                    : "-$"}{" "}
                </span>{" "}
                {tradeEquityCalculator(
                  parseFormattedNumber(currentPayoff),
                  parseFormattedNumber(dealerTradeOffer)
                )}
              </h2>
            </div>
          </div>
        </div>

        {/* Taxes and Fees */}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-auto text-blue-700" />
            <p className="font-semibold">4. TAXES & FEES</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>Sales Tax Rate (%)</p>
            <div className="flex items-center rounded-md border border-gray-300 px-4">
              <Input
                id="sales-tax-rate"
                type="text"
                inputMode="numeric"
                placeholder="6.25"
                min={"0"}
                max={"50"}
                maxLength={6}
                step={"0.01"}
                value={salesTaxRate}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "")
                  const formatted = Number(numbersOnly).toLocaleString("en-US")
                  setSalesTaxRate(formatted)
                }}
                required
                className="ml-2.5 w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
              />
              <span className="-ml-3 p-0">%</span>
            </div>
          </div>

          <div className="flex w-full items-center justify-between">
            <p>Dealer Fees</p>
            <div className="flex items-center rounded-md border border-gray-300 px-4">
              <span>$</span>
              <Input
                id="dealer-fees"
                type="text"
                inputMode="numeric"
                placeholder="225"
                min={"0"}
                max={"10000"}
                maxLength={6}
                value={dealerFees}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "")
                  const formatted = Number(numbersOnly).toLocaleString("en-US")
                  setDealerFees(formatted)
                }}
                required
                className="w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
              />
            </div>
          </div>

          <div className="flex w-full items-center justify-between">
            <p>Other Fees</p>
            <div className="flex items-center rounded-md border border-gray-300 px-4">
              <span>$</span>
              <Input
                placeholder="0"
                type="text"
                inputMode="numeric"
                min={"0"}
                max={"10000"}
                maxLength={6}
                value={otherFees}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "")
                  const formatted = Number(numbersOnly).toLocaleString("en-US")
                  setOtherFees(formatted)
                }}
                required
                id="other-fees"
                className="w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
              />
            </div>
          </div>
        </div>

        {/* Financing Trigger */}
        <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-4 shadow-md">
          <div className="flex items-center gap-2">
            <UserRound className="h-6 w-auto text-blue-700" />
            <p className="font-semibold">5. FINANCING </p>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>
              APR <span className="text-xs">(Annual Percentage Rate)</span>
            </p>
            <div className="flex items-center rounded-md border border-gray-300 px-4">
              <Input
                id="down-payment"
                type="text"
                inputMode="numeric"
                placeholder="7.99"
                min={"0"}
                max={"10000"}
                maxLength={6}
                value={apr}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/\D/g, "")
                  const formatted = Number(numbersOnly).toLocaleString("en-US")
                  setApr(formatted)
                }}
                className="ml-2.5 w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
              />
              <span className="-ml-3 p-0">%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button className="m-auto w-full bg-blue-700 py-6 text-lg text-white hover:bg-blue-800">
            <Calculator className="size-6" />
            Calculate
          </Button>
          <Button
            variant="outline"
            className="border-blue-700 bg-transparent py-6 text-lg text-blue-700"
          >
            {" "}
            <RotateCcw className="size-6" /> Reset All
          </Button>
        </div>
      </form>
      {/* </div> */}
    </div>
  )
}
