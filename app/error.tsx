"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CarFront, RefreshCw, TriangleAlert } from "lucide-react"

import { Button } from "@/components/ui/button"

type ErrorPageProps = {
  error: Error & { digest?: string }
  unstable_retry: () => void
}

export default function ErrorPage({ error, unstable_retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-svh flex-col bg-slate-100 text-slate-950">
      <header className="flex w-full items-center bg-blue-950 px-4 py-5 shadow-sm">
        <Link
          href="/"
          aria-label="Dealer Payment Calculator home"
          className="flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950 focus-visible:outline-none"
        >
          <CarFront className="h-12 w-12 text-white" aria-hidden="true" />
          <span className="text-xl leading-tight font-bold text-white">
            Dealer Payment <br /> Calculator
          </span>
        </Link>
      </header>

      <section className="flex flex-1 items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-300/40">
          <div className="h-1.5 bg-blue-700" />

          <div className="flex flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-12">
            <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-blue-50 ring-8 ring-blue-50/60">
              <TriangleAlert
                className="size-8 text-blue-700"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </div>

            <p className="mb-2 text-sm font-bold tracking-widest text-blue-700 uppercase">
              Calculation interrupted
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              Something went wrong
            </h1>
            <p className="mt-4 max-w-sm leading-7 text-slate-600">
              We couldn&apos;t finish loading the calculator. Your best next
              step is to return home and start a fresh calculation.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 flex-1 bg-blue-700 px-5 text-base text-white shadow-sm hover:bg-blue-800"
              >
                <Link href="/">
                  <ArrowLeft className="size-5" aria-hidden="true" />
                  Back to calculator
                </Link>
              </Button>

              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => unstable_retry()}
                className="h-12 flex-1 border-slate-300 px-5 text-base text-slate-700 hover:bg-slate-100"
              >
                <RefreshCw className="size-5" aria-hidden="true" />
                Try again
              </Button>
            </div>

            {error.digest ? (
              <p className="mt-6 text-xs text-slate-400">
                Reference: {error.digest}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  )
}
