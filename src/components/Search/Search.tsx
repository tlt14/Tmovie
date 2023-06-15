import { setQuery, setShowModal, startSearch } from "../../pages/search/search.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

interface PropsType{
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Search() {
    const dispatch = useDispatch()
    const {query} =useSelector((state:RootState)=> state.search)
  return (
    <div className="relative hidden md:block w-8/12">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          dispatch(setQuery(e.target.value))
          if(!e.target.value){
            dispatch(setShowModal(false))
          }
        }}
        onKeyDown={(e)=>{
          if(e.key === 'Enter'){
            dispatch(setShowModal(false))
          }
          dispatch(setShowModal(true))
        }}
        
        
      />
    </div>
  );
}
