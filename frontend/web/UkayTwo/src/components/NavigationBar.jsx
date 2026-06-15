import useNavigation from "../utils/useNavigation";
import { Link } from "react-router-dom";
import Icons from "../utils/icons"

function NavigationBar() {
    const {menuOpen, toggleMenu} = useNavigation();

    const navigationLinks = [
        { label: "Home", path: "/"},
        { label: "Categories", path: "/categories"},
        { label: "Sell", path: "/sell"},
        { label: "Login", path: "/login"},
    ];

    return (
        <header className="bg-white px-4 py-3 flex items-center justify-between relative">

            <Icons.Logo />

            <div className="flex items-center gap-3">   
                <Icons.Search />

                <Icons.Bag />

                <button onClick={toggleMenu}>
                    <Icons.Hamburger />
                </button>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white p-4">
                        <ul className="flex flex-col gap-4">
                            {navigationLinks.map((item) => {
                                const Icon = Icons[item.label];
                                return (
                                    <li key={item.path} className="hover:text-secondary hover:font-medium">
                                        <Link to={item.path} className="flex items-center gap-3">
                                            <Icon />
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>

        </header>
    );
}

export default NavigationBar;