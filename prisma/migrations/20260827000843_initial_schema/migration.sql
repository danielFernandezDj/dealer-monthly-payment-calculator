-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "authId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calculation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "vehiclePrice" DECIMAL(10,2) NOT NULL,
    "downPayment" INTEGER NOT NULL,
    "apr" DECIMAL(10,2) NOT NULL,
    "salesTax" DECIMAL(10,2) NOT NULL,
    "dealerFees" DECIMAL(10,2) NOT NULL,
    "otherFees" DECIMAL(10,2) NOT NULL,
    "tradeValue" DECIMAL(10,2) NOT NULL,
    "tradePayoff" DECIMAL(10,2) NOT NULL,
    "term" INTEGER NOT NULL,
    "monthlyPayment" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Calculation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_authId_key" ON "User"("authId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Calculation" ADD CONSTRAINT "Calculation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
