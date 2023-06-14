import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faHome, faSearch, faTv } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {

    return (
        <ul className="flex flex-col gap-4 w-full p-3">
            <li className="mt-2">
                <Link to="/"
                    className="text-blue-500 uppercase font-bold px-4 py-2 hover:bg-slate-500 rounded" >
                    <FontAwesomeIcon className='mr-2' icon={faHome} />
                    Trang chủ
                </Link>
            </li>
            <li className="mt-2">
                <Link to="/search" 
                    className="text-blue-500 uppercase font-bold px-4 py-2 hover:bg-slate-500 rounded " >
                    <FontAwesomeIcon className='mr-2' icon={faSearch} />
                    Search
                </Link>
            </li>
        </ul>
    );
}

export default Sidebar;