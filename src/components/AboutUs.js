import React from 'react';
// import { useHistory } from 'react-router-dom';  // V5.2.0   to V6 kar nemikone
// import { useNavigate } from 'react-router-dom';
// import { Link, Route, Routes, Outlet } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

// import Programmers from './Programmers';
// import Drivers from './Drivers';

const AboutUs = () => {
    //masalan bad az sabte nam,ba hook ha, replace beshe be safhe dashbord
    // const history = useHistory()
    // history.replace("/dashbord")

    // const navigate = useNavigate();

    // const clickHandler = () => {
    //     navigate("/,", { replace: true });  //besurate pish farz push mikone va ma taghiresh dadim
    //     // navigate(-1) (-2) (1) //chand marhale be aghab ya jelo bendaze
    // }

    return (
        <div>
            {/* <h1> AboutUs </h1>
          <button onClick={clickHandler}> Go Home </button> */}


            <ul>  {/* vaghti to khode file AboutUs hastim niazi nist /aboutus benevisim */}
                {/* <li><Link to="aboutus/programmers"> Programmers </Link></li> */}
                <li><Link to="programmers"> Programmers </Link></li>
                <li><Link to="drivers"> Drivers </Link></li> {/* bedune (/) chun dar AboutUs gofim (/*) */}

                <Outlet />  {/* 2ta ro az file AboutUs be App.js bordim va be jash Outlet gozashtim */}

                {/* <Routes> */}{/* dore Route hatman bayad Routes gozashte beshe vagane error mide */}
                {/* <Route path="/programmers" element={<Programmers />} /> */}  {/* baraye inke error nade bayad to file App.js: bad az aboutus/* bezarim */}
                {/* <Route path="/drivers" element={<Drivers />} /> */}
                {/* <Route path="/drivers" element={<h1> Drivers </h1>} /> */}
                {/* </Routes> */}
            </ul>
        </div>
    )
}

export default AboutUs;