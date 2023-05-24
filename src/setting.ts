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
  version?: number;
  errorCorrectionLevel?: errorCorrectionLevel;
  renderOptions?: renderOptions;
}

interface TWQRP {
  serviceName: string;
  bankCode: string;
  bankAccount: string;
  title: string;
}

interface Url {
  url: string;
  title: string;
}

interface TWQRPList extends qrCodeSetting, TWQRP {}

interface UrlList extends qrCodeSetting, Url {}

export type qrListSetting = TWQRPList | UrlList;
