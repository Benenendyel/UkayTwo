import Icons from "../utils/icons"

function Footer() {
    return (
        <div className="bg-white px-4 py-3 flex justify-between">

            <div className="flex flex-col gap-3">
                <Icons.Logo />

                <div className="flex gap-3 items-center">
                    <Icons.Facebook />

                    <Icons.Instagram />
                </div>
            </div>
            
            <ul className="flex flex-col gap-2 font-medium text-right text-sm">
                <li><a href="" className="hover:underline">Contact Us</a></li>
                <li><a href="" className="hover:underline">Work @ Ukay</a></li>
                <li>Email us at{" "}
                    <a href="mailto:ukaylegends@ukay.com" className="text-secondary hover:underline">
                        ukaylegends@ukay.com
                    </a>
                </li>
            </ul>
            
        </div>
    );
}

export default Footer;