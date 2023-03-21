import React, {useEffect, useState} from 'react';
import img from "../../../../assets/Home/row.png";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getShop} from "../../../../redux/reducers/shop";
import axios from "axios";

import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'


const Product = ({product}) => {
    const dispatch = useDispatch()
    const {data,status, error,  filter} = useSelector((store)=>store.shop)

    useEffect(()=>{
        dispatch(getShop(filter))

    },[filter.type])

    const [imageChange, setImageChange] = useState(false)


    const handleAddToLike = (arr, product) =>{

        for (let i = 0; i < arr.length; i++){
            if(arr[i].id !== product.id){
                return (
                    axios.post('http://localhost:4444/likes', product)
                    .then((res)=>res.json)
                    .catch((err)=>console.log(err.message)))
            } else {
                console.log(false)
            }
        }
    }


    return (
        <>

        <div key={product.id} className="catalog__card">
                        <div className="catalog__card-like" onClick={()=> handleAddToLike(product)}><span className="like__card-like"></span></div>

                        {     product.images.length > 1 ?
                            <Link onMouseEnter={()=> setImageChange(true)} onMouseOut={()=> setImageChange(false)} to={`/catalog/${product.id}`}  >
                                {
                                    imageChange == false ?  <img src={product.images[0].img} key={'asdasd'} alt="" className="catalog__card-img"/>
                                        : <img src={product.images[1].img}  key={'asdasd'} alt="" className="catalog__card-img"/>}

                            </Link> : <Link>
                                <img src={product.images[0].img} className="catalog__card-img" key={'asdasd'} alt=""/>
                            </Link>
                        }
                        <Link to={`/catalog/${product.id}`}>
                            <p className="catalog__card-title">{product.title}</p>
                        </Link>
                        <p className="catalog__card-price">{product.price}$</p>
                        <p className="catalog__card-brand">{product.brand}</p>
                        <ul className="catalog__card-sizes">{
                            product.sizes.map((size)=>(
                                <p className="catalog__card-size" key={size.id}>{size.size}</p>
                            ))
                        }</ul>
                    </div>







        </>
    );
};

export default Product;