export class SummuryDto {
  constructor(summuryDto: Partial<SummuryDto>) {
    Object.assign(this, summuryDto);
  }

  totalIncome: number;
  totalExpense: number;
  netincome: number;
}
