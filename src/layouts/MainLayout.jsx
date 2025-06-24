import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProtectedRoute from "../components/ProtectedRoute";

export default function MainLayout() {
    return (
        <div>
            <Header />
            <main>
                {/* <Outlet /> */}
                <ProtectedRoute />
            </main>
            <Footer />
        </div>
    );
}