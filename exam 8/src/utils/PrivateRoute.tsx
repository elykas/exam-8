import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    const floor = useParams();
    const floorAccess = useSelector((state: RootState) => state.floorAccess.floorAccess);
   
    return floorAccess[Number(floor)] ? component : <Navigate to="/forbidden" />;
};

export default PrivateRoute