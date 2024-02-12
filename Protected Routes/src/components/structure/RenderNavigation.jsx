import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";


export const RenderRoutes = () => {

        const { user } = AuthData();
        
        return (
             <Routes>
             {
               nav.map((elem,index)=>{

                    if(elem.isPrivate && user.isAuthenticated){
                         return <Route key={index} path={elem.path} element={elem.element} />
                    }else if(!elem.isPrivate){
                         return <Route key={index} path={elem.path} element={elem.element} />
                    }else return null
               })
             }
             
             </Routes>
        )
   }
   
export const RenderMenu = () => {
   
     const { user, logout } = AuthData()

     return (
          <div className="menu">
               {
                    nav.map((elem,index)=>{
                         if(!elem.isPrivate && elem.isMenu){
                              return <div className='menuItem' key={index}><Link to={elem.path}>{elem.name}</Link></div>
                         }else if(elem.isMenu && user.isAuthenticated){
                              return <div className='menuItem' key={index}><Link to={elem.path}>{elem.name}</Link></div>
                         }else return false
                    })
               }
   
               { user.isAuthenticated ?
                  <div className="menuItem"><Link to={'#'} onClick={logout}>Log out</Link></div>
                  :
                  <div className="menuItem"><Link to={'login'}>Log in</Link></div> }
          </div>
     )
}