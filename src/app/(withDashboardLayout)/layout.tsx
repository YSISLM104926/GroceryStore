import DDrawer from "@/Components/UI/DDrawer/DDrawer";
import DrawerNavbar from "@/Components/UI/DDrawer/DrawerNavbar";
import { ToastContainer } from "react-toastify";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <DrawerNavbar />

            <div className="grid grid-flow-col ">
                <DDrawer />
                <div className="lg:me-[200px]">
                    {children}
                </div>
            </div>

        </div>
    );
}

export default CommonLayout;