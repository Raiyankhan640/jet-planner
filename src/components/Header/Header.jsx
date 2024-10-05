import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div className='navbar bg-base-100 shadow-lg px-4 sm:px-8 fixed z-10'>
            <div className='flex-1'>
                <Link
                    to='/'
                    className='btn btn-ghost gap-0 text-secondary normal-case text-2xl'
                >
                    Jet<span className='text-primary'>Plannar</span>
                </Link>
            </div>
            <div className='flex-none gap-2'>
                <ul className='menu hidden sm:flex menu-horizontal px-1 gap-5'>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-primary font-bold' : 'font-bold'
                        }
                        to='/'
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-primary font-bold' : 'font-bold'
                        }
                        to='/blogs'
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'text-primary font-bold' : 'font-bold'
                        }
                        to='/bookmarks'
                    >
                        Available Flights
                    </NavLink>
                </ul>
            </div>
        </div>
    )
};

export default Header;