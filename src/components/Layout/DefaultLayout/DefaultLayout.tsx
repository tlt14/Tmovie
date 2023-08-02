import Header from "../../Header";
import ModalSearch from "../../Search/ModalSearch";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

interface PropsType {
  children: JSX.Element
}
const DefaultLayout = (props: PropsType) => {
  const children = props.children
  const {isShowModal} = useSelector((state:RootState) => state.search)
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Header />
      {
        isShowModal && <ModalSearch />
      }
      <div className="max-w-screen-xl  mx-auto p-4">
        <div className="grid grid-cols-12 gap-4 max-[640px]:grid-cols-1">
          <div className="col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
