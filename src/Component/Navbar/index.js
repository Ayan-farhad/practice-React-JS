import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/Firebase";
import { useState, useEffect } from "react";
import { userLogout } from "../../Config/Firebase";
import TopOlx from '../../assest/olx top.svg';
import TopCar from '../../assest/car-front.svg';
import TopBuilding from '../../assest/building.svg';
import sellicon from '../../assest/sellicon.svg';
import BottomOlx from '../../assest/olx.svg';
import Category from "../Icons";
import search from '../../assest/search.svg'

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const Logout = () => {
        userLogout(user)
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("🚀 ~ onAuthStateChanged ~ user:", user)
                setUser(user)
                // ...
            } else {
                setUser(null)
            }
        });
    }, []);

    return (
        <div className="viewHeight">
            <div style={{ height: '8rem' }}  ></div>
            <div style={{ color: "black", width: '100%', position: 'fixed', top: 0 }} >
                <header style={{ background: 'rgb(239, 236, 236)' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }} >
                        <img style={{ width: '40px', padding: '0px 30px' }} src={TopOlx} ></img>
                        <img style={{ padding: '0px 4px 0px 0px' }} src={TopCar} ></img>
                        <a style={{ padding: '12px 20px 0px 0px' }}>MOTORS</a>
                        <img style={{ padding: '0px 4px 0px 0px' }} src={TopBuilding} ></img>
                        <a style={{ padding: '12px 1px 0px 0px' }}>PROPERTY</a>
                <button onClick={Logout}  >Logout</button>

                    </div>
                </header>
                <nav style={{ background: 'rgb(239, 236, 236)', display: 'flex', justifyContent: 'flex-start' }} className='BottomNavbar' >

                    <img className='mediaremove' style={{ width: '80px', padding: '0px 20px' }} src={BottomOlx} ></img>
                    <input className='inp1' style={{
                        width: '15rem',
                        height: '40px',
                        margin: '12px 10px 0px 0px',
                        border: '2px solid black',
                        borderRadius: '5px'
                    }} placeholder='Pakistan' ></input>
                    {/* <input className='Inp2' style={{ width: '45rem', height: '40px', margin: '12px 15px 0px 0px', border: '2px solid black', borderRadius: '5px' }} placeholder='Pakistan' ></input> */}
                    <input className='SearchInp' style={{ width: '40rem', height: '2.3rem', marginLeft: 18, marginTop: 6, border: '2px solid black', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, paddingLeft: 8 }} placeholder="Find Cars, Mobile Phones and more..." ></input>
                <img style={{ background: 'black', width: 50, height: 42.5, marginTop: 5.8, borderTopRightRadius: 5, borderBottomRightRadius: 5 }} src={search} ></img>

                    {user ?
                        <h4>{user.email}</h4> :
                        <button onClick={() => navigate('/Login')} style={{ height: '3rem', fontWeight: 'bold', fontSize: '20px', marginTop: '10px', border: 'none', background: 'none', width: '7%' }} ><u>Login</u></button>
                    }
                    <div style={{ cursor: 'pointer', marginRight: 20, display: "flex", flexDirection: "column", alignItems: "center", marginRight: 10, marginTop: 10 }}>
                        <div style={{ position: "relative" }}>
                            <img src={sellicon} style={{ width: '5.5rem' }}></img>
                            <span onClick={() => navigate('/PostAd')} style={{ position: "absolute", top: "45%", left: "48%", transform: "translate(-50%, -50%)", color: "black", fontSize: 15, fontWeight: 'bold' }}>+SELL</span>
                        </div>
                    </div>
                </nav>
           
            </div>
        </div>
    )
}

export default Navbar;
