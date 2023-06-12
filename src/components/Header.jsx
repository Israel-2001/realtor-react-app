import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import{ getAuth, onAuthStateChanged } from "firebase/auth"
export default function Header() {
    const [pageState, setPageState] = useState("sign-in")
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile")
      } else {
        setPageState("Sign in")
      }
      });
    }, [auth])
    function pathMatchRoutes(route) {
      if(route === location.pathname) {
        return true;
      }
    }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className="h-5 cursor-pointer" onClick={()=>navigate("/")} />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li 
              className={`cursor-pointer py-3 
              text-sm font-semibold text-gray-400 border-b-[3px]
               border-b-transparent ${pathMatchRoutes("/") && 
               "text-stone-950 border-red-500 font-bold"}`} 
               onClick={()=>navigate("/")}>
                Home
            </li>
            <li 
              className={`cursor-pointer py-3 
              text-sm font-semibold text-gray-400 border-b-[3px] 
              border-b-transparent ${pathMatchRoutes("/offers") && 
              "text-stone-950 border-b-red-500 font-bold" }`} 
              onClick={()=>navigate("/offers")}>
                Offers
            </li>
            <li 
              className={`cursor-pointer py-3 
              text-sm font-semibold text-gray-400 border-b-[3px] 
              border-b-transparent ${(pathMatchRoutes("/sign-in") || pathMatchRoutes("/profile")) && 
              "text-stone-950 border-b-red-500 font-bold" }`} 
              onClick={()=>navigate("/profile")}>
                {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
