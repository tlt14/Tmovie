import Header from "../../Header";

interface PropsType {
    children: JSX.Element
}
const DetailLayout = ({ children }: PropsType) => {
    return (
        <div className="bg-white dark:bg-gray-800 min-h-screen">
            <Header />
            <div className="max-w-screen-xl  mx-auto p-4">
                <div className="grid grid-cols-12 gap-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DetailLayout;