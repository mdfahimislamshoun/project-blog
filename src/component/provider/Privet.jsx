import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PropTypes from 'prop-types';
import { AuthContext } from "./AuthProvider";
const Private = ({children}) => {
    const { user} = useContext(AuthContext);
    const location=useLocation();
    const{loading}=useContext(AuthContext)

 if(loading){
<Skeleton count={5} />
 }
    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};
Private.propTypes={
    children:PropTypes.node
}
export default Private;