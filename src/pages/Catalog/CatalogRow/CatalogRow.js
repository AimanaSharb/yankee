import React, {useEffect} from 'react';
import {getShop} from "../../../redux/reducers/shop"
import {useDispatch, useSelector} from "react-redux";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import Product from "./Product/Product";




const CatalogRow = () => {
    const dispatch = useDispatch()
    const {data, filter, status} = useSelector((store)=>store.shop)

    useEffect(()=>{
        dispatch(getShop(filter))

    },[filter.type])







    return (
        <div className="catalog__right-side">
            <CatalogFilter/>
            <div className="catalog__row">

                {data.map((product) => (
                    <Product key={product.id} product={product} />

                ))}
            </div>

        </div>
    );
};

export default CatalogRow;