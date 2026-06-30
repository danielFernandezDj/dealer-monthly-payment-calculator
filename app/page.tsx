
import CalculatorForm from "@/components/calculator-form"
import { CarFront } from 'lucide-react';
// import Drawer from "@/components/ui/drawer"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col bg-slate-100">
      {/* Header */}
      <div className="flex w-full py-5 gap-2 justify-center items-center bg-blue-950">
        <CarFront className="w-12 h-12 text-white" />
        <p className="text-xl font-bold text-white">Dealer Payment <br /> Calculator</p>
      </div>

      {/* Main Content */}
      <div className="b-4 flex w-full border-2">
        <CalculatorForm />
      </div>
    </div>
  )
}
