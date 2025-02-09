export interface Taste {
  warn: number;
  cool: number;
  sweet: number;
  acerbity: number;
}

export type TasteType = keyof Taste;
