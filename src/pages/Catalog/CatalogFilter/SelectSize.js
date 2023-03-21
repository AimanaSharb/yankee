import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getShop} from "../../../redux/reducers/shop";


export default function SelectSize() {


    const dispatch = useDispatch()
    const {status, error, data, filter} = useSelector((store)=>store.shop)



    useEffect(()=>{
        dispatch(getShop(filter))

    },[filter.type])








    return (
        <div className="selectSize">
            {/*<select name="sizes" id="">*/}

            {/*</select>*/}



        </div>
    );
}

