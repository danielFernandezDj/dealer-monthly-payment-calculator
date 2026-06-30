"use client"

import { useState } from "react"

import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Card } from "./ui/card"
import { Input } from "./ui/input"

import {
  CarFront,
  UserRound,
  Repeat,
  FileText,
  Calculator,
  RotateCcw,
} from "lucide-react"

export default function CalculatorForm() {
  const [value, setValue] = useState("")

  return (
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
              value={value}
              onChange={(e) => {
                const numbersOnly = e.target.value.replace(/\D/g, "")
                const formatted = Number(numbersOnly).toLocaleString("en-US");
                setValue(formatted)
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
              placeholder="5.000"
              min={"0"}
              max={"99000"}
              max-length={5}
              type="number"
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
              placeholder="10.000"
              min={"0"}
              max={"99000"}
              max-length={5}
              type="number"
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
              placeholder="8.000"
              min={"0"}
              max={"99000"}
              max-length={5}
              type="number"
              required
              className="w-20 border-0 focus-visible:border-0 focus-visible:ring-0"
            />
          </div>
        </div>

        <div className="flex w-full justify-between gap-2 rounded-md border border-green-200 bg-green-50 p-2 text-green-700">
          <div className="flex flex-col">
            <p className="text-sm">Trade Equity (Auto)</p>
            <div className="flex gap-2">
              <p>$2000</p>
              <span>-</span>
              <p>$5999</p>
            </div>
          </div>
          <div className="flex items-center justify-center pr-4">
            <h2 className="text-2xl font-bold">
              <span>+</span>$3,999
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
              type="number"
              placeholder="6.25"
              defaultValue={"6.25"}
              min={"0"}
              max={"50"}
              max-length={5}
              step={"0.01"}
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
              type="number"
              placeholder="225"
              defaultValue={"225"}
              min={"0"}
              max={"10000"}
              max-length={"5"}
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
              type="number"
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
              placeholder="7.99"
              type="number"
              id="down-payment"
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
  )
}
