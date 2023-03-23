import React, {useEffect, useState} from 'react';
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";
import {useDispatch, useSelector} from "react-redux";
import LikeItems from "./LikeItems/LikeItems";
// import {getLikes} from "../../redux/reducers/like";



const Likes = () => {




    const dispatch = useDispatch()

    const [imageChange, setImageChange] = useState(false)
    const {likes, status, error} = useSelector((store)=> store.like)

    // useEffect(()=>{
    //     dispatch(getLikes(likes))
    //
    // },[])
    return (
        <section className="like">
            {/*<div className="container">*/}
            {/*    <BreadCrumbs/>*/}
            {/*    <h2 className="like__title">Избранное</h2>*/}
            {/*    <div className="like__row">*/}

            {/*        {*/}
            {/*            status === 'loading' ?*/}
            {/*                <h2>loading</h2> :*/}
            {/*                status ==='resolve' ?*/}
            {/*                    likes.map((item)=>(*/}
            {/*                        <LikeItems key={item.id} item={item}/>*/}

            {/*                    ))*/}
            {/*                 : error*/}

            {/*        }*/}
            {/*    </div>*/}


            {/*</div>*/}

        </section>
    );
};

export default Likes;