import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneItem} from "../../redux/reducers/oneItem";
import {useParams} from "react-router";
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";
import AccordionItem from "./Accordion/accordionItem";
import {accordionData} from "./Accordion/accordioninfo";
import ItemSwiper from "./ItemSwiper/ItemSwiper";
import ItemLike from "./ItemBot/ItemLike/ItemLike";
import ItemSup from "./ItemBot/ItemSup/ItemSup";

const Item = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const {product, status, error} = useSelector((store)=>store.oneItem)


    useEffect(()=>{
            dispatch(getOneItem(params.id))

        },[])




    return (
        <section className="item">
            <div className="container">
                <BreadCrumbs/>

                <div className="item__content">
                    <div className="item__top">
                        <div className="item__left">

                            <ItemSwiper/>


                        </div>

                        <div className="item__right">
                            <h2 className="item__title">{product.title}</h2>
                            <p className="item__price">{product.price} $</p>
                            <select name="" id="" className="item__size-select">
                                <option selected disabled>Size</option>
                                {
                                    product.sizes?.map((item)=>(
                                        <option key={item.id}>{item.size}</option>
                                    ))
                                }
                            </select>

                            <div className="item__btns">
                                <button type="button" className="item__btn">В КОРЗИНУ</button>
                                <button  type="button" className="item__btn-white">В ИЗБРАННОЕ</button>
                            </div>

                            <ul className="accordion__list">
                                <p className="item__txt">Подробности</p>

                                {
                                    accordionData.map((item) => (
                                        <React.Fragment key={item.id}>
                                            <AccordionItem item={item}/>
                                        </React.Fragment>
                                    ))
                                }
                            </ul>




                        </div>
                    </div>
                    <div className="item__bot">
                        <div className="itemsup">
                            <h2 className="itemlike__title">Из этой категории:</h2>
                            <ItemSup/>
                        </div>
                        <div className="itemlike">

                            <h2 className="itemlike__title">Вам может понравиться</h2>
                            <ItemLike/>
                        </div>

                    </div>

                </div>






                {/*value={}*/}



            </div>




        </section>
    );
};

export default Item;