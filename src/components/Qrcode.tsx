import React, { useRef, useEffect } from "react";
import qCode from "qrcode";
import { usePayStore } from "../App";

const Qrcode: React.FC = () => {
  const { payFor, payForList } = usePayStore((state) => ({
    payFor: state.payFor,
    payForList: state.payForList,
  }));

  const {
    title,
    url,
    version = 3,
    errorCorrectionLevel,
    renderOptions,
  } = payForList[payFor];

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
      qCode.toDataURL(url, opts, function (error: any, url: string) {
        if (error) throw error;
        if (ref.current instanceof HTMLImageElement) {
          ref.current.src = url;
        }
      });
    }
  }, [url]);

  return (
    <div>
      <div>{title}</div>
      <img ref={ref} alt="qrcode" />
    </div>
  );
};

export default React.memo(Qrcode);
