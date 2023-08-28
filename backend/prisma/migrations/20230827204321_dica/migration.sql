-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "endereco" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eletro" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "kwh" INTEGER NOT NULL,

    CONSTRAINT "Eletro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consumo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dinheiro" INTEGER NOT NULL,
    "kwh" INTEGER NOT NULL,

    CONSTRAINT "Consumo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsumoEletro" (
    "id" SERIAL NOT NULL,
    "consumoId" INTEGER NOT NULL,
    "eletroId" INTEGER NOT NULL,
    "dinheiro" INTEGER NOT NULL,
    "kwh" INTEGER NOT NULL,

    CONSTRAINT "ConsumoEletro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dicas" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "reported" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Dicas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Eletro_nome_key" ON "Eletro"("nome");

-- AddForeignKey
ALTER TABLE "Eletro" ADD CONSTRAINT "Eletro_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consumo" ADD CONSTRAINT "Consumo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsumoEletro" ADD CONSTRAINT "ConsumoEletro_consumoId_fkey" FOREIGN KEY ("consumoId") REFERENCES "Consumo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsumoEletro" ADD CONSTRAINT "ConsumoEletro_eletroId_fkey" FOREIGN KEY ("eletroId") REFERENCES "Eletro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
