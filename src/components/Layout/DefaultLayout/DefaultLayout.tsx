import Header from "../../Header";
import Sidebar from "./Sidebar";

interface PropsType {
  children: JSX.Element
}
const DefaultLayout = (props: PropsType) => {
  const children = props.children
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Header />
      <div className="max-w-screen-xl  mx-auto p-4">
        <div className="grid grid-cols-12 gap-4">
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
