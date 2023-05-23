import { create } from "zustand";
import Qrcode from "./components/Qrcode";
import DropDown from "./components/DropDown";
import { qrListSetting } from "./setting";
import setting from "./list";

interface payForState {
  payFor: number;
}

interface QRCodeState extends payForState {
  setPayFor: (payFor: number) => void;
  payForList: qrListSetting[];
}

export const usePayStore = create<QRCodeState>()((set) => ({
  payFor: 0,
  setPayFor: (payFor) => set(() => ({ payFor: payFor })),
  payForList: setting,
}));

function App() {
  return (
    <div className="flex m-4 p-4 flex-col sm:flex-row">
      <div className="w-1/5 mr-2 sm:mr-2 sm:mb-4">
        <DropDown />
      </div>
      <div className="w-4/5">
        <Qrcode />
      </div>
    </div>
  );
}

export default App;
