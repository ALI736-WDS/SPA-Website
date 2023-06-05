import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import DetailsPage from "./components/DetailsPage";
import NotFound from "./components/NotFound";
import Programmers from "./components/Programmers";
import Drivers from "./components/Drivers";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>  {/* Routes,element={<Products />}: V6 react-router-dom */}
                    <Route path="/" element={<Landing />} />  {/* HomePage */}  {/* tartib khas o Aam, + exact mohem nist */}
                    <Route path="/products" element={<Products />} />               {/* va react V6 khodesh tashkhis mide */}
                    <Route path="/products/:id" element={<DetailsPage />} />               {/* va react V6 khodesh tashkhis mide */}
                    <Route path="/aboutus/*" element={<AboutUs />} >  {/* baraye file AboutUs, (*)gozashtim ke betune Route dige begire mesle <Drivers /> */}
                        <Route path="programmers" element={<Programmers />} />   {/* baraye inke error nade bayad to file App.js: bad az aboutus/* bezarim */}
                        <Route path="drivers" element={<Drivers />} />  {/* bedune (/) chun dar AboutUs gofim (/*) */}
                    </Route>  {/* 2ta ro az file AboutUs be inja ovordim */}
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/*" element={<Navigate to="/notfound" />} />  {/* (*): yani hame search ha be joz path haye moshakhas shode bala */}
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default App;


// <Navbar />
// <Switch>  {/* Switch,component={Products}: V5.2.0 react-router-dom */ }
// <Route path="/products" component={Products} /> */ }
// <Route path="/" component={Landing} />  {/* HomePage */ } {/* tartib khas o Aam moheme, + exact */ }
// <Redirect from="/*" to="/NotFound" />} /> */ } {/* (*): yani hame search ha be joz path haye moshakhas shode bala */ }
// </Switch>
// <Footer />