"use state"

const payment = 300

let balance = 20000

for (let month = 1; month <= 60; month++) {
  const interest = balance * 0.005
  balance += interest
  balance -= payment
}

console.log(balance)

export default function MathResolution() {
  return (
    <section className="bg-white rounded-md">
      <div>
        <h1>Mathematical Resolution</h1>
      </div>
    </section>
  )
}
