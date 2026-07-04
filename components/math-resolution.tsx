"use state"

export default function MathResolution() {
  // Loan = $20,000
  // APR = 6%
  // Months = 60

  const payment = 300

  let balance = 20000

  for (let month = 1; month <= 60; month++) {
    const interest = balance * 0.005
    balance += interest
    balance -= payment
  }

  console.log(balance)

  return (
    <section>
      <p>Mathematical Resolution</p>
    </section>
  )
}
