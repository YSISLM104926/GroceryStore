import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-500">
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default CommonLayout;