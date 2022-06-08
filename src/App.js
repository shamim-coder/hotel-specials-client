import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Login from "./Pages/ManageUser/Login/Login";
import Registration from "./Pages/ManageUser/Registration/Registration";
import Accommodation from "./Pages/Home/Accommodation/Accommodation/Accommodation";
import Booking from "./Pages/Booking/Booking/Booking";
import RequireAuth from "./Utilities/RequireAuth/RequireAuth";

library.add(fas);

function App() {
    return (
        <>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accommodation" element={<Accommodation />} />
                <Route
                    path="/booking"
                    element={
                        <RequireAuth>
                            <Booking />
                        </RequireAuth>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </>
    );
}

export default App;
