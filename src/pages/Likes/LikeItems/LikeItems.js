import React, {useState} from 'react';
import {deleteLikeItem} from "../../../redux/reducers/like";
import {Link} from "react-router-dom";
import img from "../../../assets/Home/row.png";
import {useDispatch} from "react-redux";

const LikeItems = ({item}) => {

    const [imageChange, setImageChange] = useState(false)
    const dispatch = useDispatch()


    return (
        <>

            <div className="like__card" key={item.id}>
                <div className="like__card-like" onClick={()=> dispatch(deleteLikeItem(item.id))}><span className="like__card-like"></span></div>


                {
                    item.images.length > 1 ?
                        <Link onMouseEnter={()=> setImageChange(true)} onMouseOut={()=> setImageChange(false)} to={`/catalog/${item.id}`}  >

                            {
                                imageChange === false ?  <img src={item.images[0].img} key={'asdasd'} alt="" className="catalog__card-img"/>
                                    : <img src={item.images[1].img}  key={'asdasd'} alt="" className="catalog__card-img"/>
                            }

                        </Link> : <Link to={`/catalog/${item.id}`}><img src={item.images[0].img} alt=""/></Link>
                }
                <Link to={`/catalog/${item.id}`}>
                    <p className="like__card-title">{item.title}</p>
                </Link>
                <p className="like__card-price">{item.price}$</p>
                <ul className="like__card-sizes">{
                    item.sizes.map((size)=>(
                        <p className="like__card-size" key={size.id}>{size.size}</p>
                    ))
                }</ul>
            </div>

        </>
    );
};

export default LikeItems;