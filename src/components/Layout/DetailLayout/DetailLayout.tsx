import { useState } from "react";
import Header from "../../Header";
import ModalSearch from "../../Search/ModalSearch";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

interface PropsType {
    children: JSX.Element
}
const DetailLayout = ({ children }: PropsType) => {
    const {isShowModal} = useSelector((state:RootState) => state.search)
    return (
        <div className="bg-white dark:bg-gray-800 min-h-screen">
            <Header />
            {isShowModal &&<ModalSearch />}
            <div className="max-w-screen-xl  mx-auto p-4">
                <div className="grid grid-cols-12 gap-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DetailLayout;