import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Navbar from './Navbar';
import SymptomDeclaration from './pages/SymptomDeclaration';
import DoctorChat from './pages/DoctorChat';
import ProtectedPage from './pages/ProtectedPage';
import DebugPage from './pages/DebugPage';
import Selection from './pages/Selection';
import ChangePassword from './pages/ChangePassword';
import EditProfile from './pages/EditProfile';
import Payment from './pages/PaymentPage';
import CardPayment from './pages/CardPayment';
import QRPage from './pages/QRPage';
import AfterPayment from './pages/AfterPayment';
import Position from './pages/Position';

let isFirefox;
const userAgentString = navigator.userAgent;
if (userAgentString.indexOf('Firefox') !== -1) {
    isFirefox = true;
}
isFirefox = false;

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    let Component;
    switch (window.location.pathname) {
        case './pages/Home':
            Component = Home;
            break;
        case './pages/Login':
            Component = Login;
            break;
        case './pages/Register':
            Component = Register;
            break;
        case './pages/About':
            Component = About;
            break;
        case './pages/DoctorChat':
            Component = DoctorChat;
            break;
        case './pages/ChangePassword':
            Component = ChangePassword;
            break;
        case './pages/EditProfile':
            Component = EditProfile;
            break;
        default:
            Component = Home;
            break;
    }

    return (
        <>
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <Home
                                    loggedIn={loggedIn}
                                    setLoggedIn={setLoggedIn}
                                />
                            }
                        />
                        <Route
                            path='/Login'
                            element={
                                <Login
                                    loggedIn={loggedIn}
                                    setLoggedIn={setLoggedIn}
                                />
                            }
                        />
                        <Route path='/FindGP' element={<Position />} />
                        <Route
                            path='/Register'
                            element={
                                <Register
                                    loggedIn={loggedIn}
                                    setLoggedIn={setLoggedIn}
                                />
                            }
                        />
                        <Route path='/About' element={<About />} />
                        <Route
                            path='/selection'
                            element={
                                <Selection
                                    loggedIn={loggedIn}
                                    setLoggedIn={setLoggedIn}
                                />
                            }
                        />
                        <Route
                            path='/changepassword'
                            element={
                                <ChangePassword
                                    loggedIn={loggedIn}
                                    setLoggedIn={setLoggedIn}
                                />
                            }
                        />
                        <Route
                            path='/editprofile'
                            element={
                                <EditProfile
                                    loggedIn={loggedIn}
                                    setLoggedIn={setLoggedIn}
                                />
                            }
                        />
                        <Route
                            path='/SymptomDeclaration'
                            element={<SymptomDeclaration />}
                        />
                        <Route
                            path='/doctorchat'
                            element={
                                isFirefox ? (
                                    <Home />
                                ) : (
                                    <DoctorChat
                                        loggedIn={loggedIn}
                                        setLoggedIn={setLoggedIn}
                                    />
                                )
                            }
                        />
                        <Route
                            path='/payment'
                            element={
                                <Payment
                                    setLoggedIn={setLoggedIn}
                                    loggedIn={loggedIn}
                                />
                            }
                        />
                        <Route
                            path='/qrcodepayment'
                            element={
                                <QRPage
                                    setLoggedIn={setLoggedIn}
                                    loggedIn={loggedIn}
                                />
                            }
                        />
                        <Route
                            path='/cardpayment'
                            element={
                                <CardPayment
                                    setLoggedIn={setLoggedIn}
                                    loggedIn={loggedIn}
                                />
                            }
                        />
                        <Route
                            path='/afterPayment'
                            element={
                                <AfterPayment
                                    setLoggedIn={setLoggedIn}
                                    loggedIn={loggedIn}
                                />
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
export default App;
