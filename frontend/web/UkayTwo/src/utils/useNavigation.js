import { useState } from "react";

function useNavigation() {
    const [ menuOpen, setMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setMenuOpen( !menuOpen );
    };

    return { menuOpen, toggleMenu };
}

export default useNavigation;