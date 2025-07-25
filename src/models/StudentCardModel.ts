export enum GRADE {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
}

export interface StudentCardModel {
  id: number;
  name: string;
  grade: GRADE;
  attendence: number;
}
