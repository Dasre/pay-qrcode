import React, { useRef, useEffect } from "react";
import qCode from "qrcode";
import { usePayStore } from "../App";
import { qrListSetting } from "../setting";

const getURLs = (item: qrListSetting): string => {
  if ("url" in item) {
    return item.url;
  }
  return `TWQRP://${item.serviceName}/158/02/V1?D5=${item.bankCode}&D6=${item.bankAccount}`;
};

const Qrcode: React.FC = () => {
  const { payFor, payForList } = usePayStore((state) => ({
    payFor: state.payFor,
    payForList: state.payForList,
  }));

  const {
    title,
    version = 3,
    errorCorrectionLevel,
    renderOptions,
  } = payForList[payFor];

  let urls = getURLs(payForList[payFor]);

  const ref = useRef<HTMLImageElement>(null);

  const opts = {
    errorCorrectionLevel,
    margin: renderOptions?.margin,
    version,
    color: {
      dark: renderOptions?.color?.dark,
      light: renderOptions?.color?.light,
    },
  };

  useEffect(() => {
    if (ref && ref.current) {
      // @ts-ignore
      qCode.toDataURL(urls, opts, function (error: any, url: string) {
        if (error) throw error;
        if (ref.current instanceof HTMLImageElement) {
          ref.current.src = url;
        }
      });
    }
  }, [urls]);

  return (
    <div>
      <div>{title}</div>
      <img ref={ref} alt="qrcode" />
    </div>
  );
};

export default React.memo(Qrcode);
