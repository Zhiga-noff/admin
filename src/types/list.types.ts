export interface ListTypes {
  id: number;
  done: boolean;
  dateCreate: Date;
  dateUpdate: Date;
  stateTitle: string;
  title: string | null;
  inFilePath: string | null;
  outFilePath: string | null;
}
