import React, { useRef, useEffect } from "react";
import qCode from "qrcode";
import { errorCorrectionLevel, qrCodeSetting } from "../setting";

const Qrcode: React.FC<qrCodeSetting> = (props: qrCodeSetting) => {
  const { target, version = 3, errorCorrectionLevel, renderOptions } = props;
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
      qCode.toDataURL(target, opts, function (error: any, url: string) {
        if (error) throw error;
        if (ref.current instanceof HTMLImageElement) {
          ref.current.src = url;
        }
      });
    }
  }, [target]);

  return <img ref={ref} alt="qrcode" />;
};

export default React.memo(Qrcode);
