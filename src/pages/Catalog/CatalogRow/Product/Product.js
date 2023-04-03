import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Product = ({product}) => {

    const [imageChange, setImageChange] = useState(false)





    return (
        <>

        <div  key={product.id} className="catalog__card">
                        <div  className="catalog__card-like"><span className="like__card-like"></span></div>

                        {     product.images.length > 1 ?
                            <Link  key={'mfnek'} onMouseEnter={()=> setImageChange(true)} onMouseOut={()=> setImageChange(false)} to={`/catalog/${product.id}`}>
                                {
                                    imageChange === false ?  <img src={product.images[0].img} key={'asdasd'} alt="" className="catalog__card-img"/>
                                        : <img src={product.images[1].img}  key={'asdasd'} alt="" className="catalog__card-img"/>}

                            </Link> : <Link to={`/catalog/${product.id}`} key={'dneje'}>
                                <img src={product.images[0].img} className="catalog__card-img" key={'akdbad'} alt=""/>
                            </Link>
                        }
                        <Link to={`/catalog/${product.id}`}>
                            <p className="catalog__card-title">{product.title}</p>
                        </Link>
                        <p className="catalog__card-price">{product.price}$</p>
                        <p className="catalog__card-brand">{product.brand}</p>
                        <p className="catalog__card-new">{product?.new ? 'new' : ''}</p>
                        <ul className="catalog__card-sizes">{
                            product.sizes.map((size)=>(
                                <p className="catalog__card-size" key={size.id}>{size}</p>
                            ))
                        }</ul>
                    </div>
        </>
    );
};

export default Product;