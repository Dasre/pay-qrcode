export enum errorCorrectionLevel {
  L = "L",
  M = "M",
  Q = "Q",
  H = "H",
}

export interface renderOptions {
  margin?: number;
  scale?: number;
  small?: boolean;
  width?: number;
  color?: {
    dark?: string;
    light?: string;
  };
}

export interface qrCodeSetting {
  target: string;
  version?: number;
  errorCorrectionLevel?: errorCorrectionLevel;
  renderOptions?: renderOptions;
}

export interface qrListSetting extends qrCodeSetting {
  title: string;
  target: string;
}

const setting: qrListSetting[] = [
  {
    title: "Line Pay",
    target: "123",
  },
  {
    title: "Lin2e Pay",
    target: "123",
  },
];

export default setting;
