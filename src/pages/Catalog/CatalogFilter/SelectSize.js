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
            {

                data.map((item)=>{
                    // if (item.type === 't-shirt' || item.type === 'top' || item.type === 'coat' || item.type === 'jacket'){
                    //      return( <select className="selectSize__select" name="size" id="size">
                    //          <option selected disabled>Size</option>
                    //          <option className="selectSize__option" value={item.sizes.size}>{item.sizes.size}</option>
                    //      </select>)
                    // } else{
                    //     return ''
                    // }


                })





            }


        </div>
    );
}