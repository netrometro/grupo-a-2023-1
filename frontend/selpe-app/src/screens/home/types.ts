interface ConsumoListInterface {
  id?: number;
  userId: number;
  dinheiro: number;
  kwh: number;
  date: Date;
  consumos?: Array<ConsumoInterface>;
}

interface ConsumoInterface {
  id?: number;
  consumoId: number;
  eletroId: number;
  dinheiro: number;
  kwh: number;
}

interface EmailInterface {
  subject: string;
  from: string;
  to: string;
  html: string;
}
