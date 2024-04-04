import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="">
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default CommonLayout;