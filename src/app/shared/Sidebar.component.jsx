import { pages } from "./Navbar/Pages.component";

const Sidebar = ({ showSidebar}) => {
    return (
        <div className={"rounded-md absolute w-40 h-full overflow-y-visible bg-black z-50 text-white flex items-center justify-center transition-all ease-in-out duration-500 transform slide  " + (showSidebar ? "lg:hidden" : "-translate-x-40")}>
        <div className="text-white ">
            <ul className="flex flex-col space-y-5">{pages}</ul>
        </div>
    </div>
    );
};

export default Sidebar;