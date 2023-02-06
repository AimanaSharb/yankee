import React, {useEffect} from 'react';
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";
import {useDispatch, useSelector} from "react-redux";
import {getLikes} from "../../redux/reducers/like"

const Likes = () => {


    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(getLikes())
    }, [])


    const {like} = useSelector((store)=> store.shop)



    return (
        <section className="like">
            <div className="container">
                <BreadCrumbs/>
                <h2 className="like__title">Избранное</h2>
                <div className="like__row">
                    <div className="like__card">
                        <img src="" alt=""/>
                        <p className="like__card-tite">Белая куртка</p>
                        <p className="like__card-price">2900 грн</p>
                        {/*<ul className="catalog__card-sizes">{*/}
                        {/*    item.sizes.map((size)=>(*/}
                        {/*        <p className="catalog__card-size" key={size.id}>{size.size}</p>*/}
                        {/*    ))*/}
                        {/*}</ul>*/}
                    </div>
                </div>


            </div>

        </section>
    );
};

export default Likes;