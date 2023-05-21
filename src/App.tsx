import Qrcode from "./components/Qrcode";
import DropDown from "./components/DropDown";
import setting from "./setting";

function App() {
  return (
    <div className={"text-center m-4"}>
      <DropDown dropdownList={setting} />
    </div>
    // <>
    //   <div className="custom-shortcut">123</div>
    //   <Qrcode
    //     target="44445555"
    //     renderOptions={{ small: true, width: 100, scale: 20 }}
    //   />
    // </>
  );
}

export default App;
