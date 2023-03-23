import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useState} from "react";
import {changeSize} from "../../../redux/reducers/shop"


export default function SelectSize() {


    const dispatch = useDispatch()
    const {filter} = useSelector((store)=>store.shop)
    const [size, setSize] = useState('')



    useEffect(()=>{
        dispatch(changeSize(size))

    },[filter.size])








    return (
        <>

                {
                    filter.type === 't-shirt' || filter.type === 'jacket' || filter.type === 'coat' || filter.type === 'top' ?
                        <select className="filter__select" name="filter__select" id="">
                            <option  className="filter__select-option" disabled value="DEFAULT">Size</option>
                        <option className="filter__select-option"
                                value={size}
                                label="size">XS</option>
                            <option className="filter__select-option" value="S">S</option>
                            <option className="filter__select-option" value="M">M</option>
                            <option className="filter__select-option" value="L">L</option>
                            <option className="filter__select-option" value="XL">XL</option>
                        </select> : filter.type.length === false ?
                        <select   className="filter__select"  name="filter__all" id="">
                            <option className="filter__select-option" disabled value="DEFAULT">Size</option>
                            <option className="filter__select-option" value="34">34</option>
                            <option className="filter__select-option" value="36">36</option>
                            <option className="filter__select-option" value="38">38</option>
                            <option className="filter__select-option" value="40">40</option>
                            <option className="filter__select-option" value="42">42</option>
                            <option className="filter__select-option" value="44">44</option>
                            <option className="filter__select-option" value="XS">XS</option>
                            <option className="filter__select-option" value="S">S</option>
                            <option className="filter__select-option" value="M">M</option>
                            <option className="filter__select-option" value="L">L</option>
                            <option className="filter__select-option" value="XL">XL</option>

                        </select> :
                        <select className="filter__select" name="filter__select" id="">
                            <option className="filter__select-option" disabled value="DEFAULT">Size</option>
                            <option className="filter__select-option" value="34">34</option>
                            <option className="filter__select-option" value="36">36</option>
                            <option className="filter__select-option" value="38">38</option>
                            <option className="filter__select-option" value="40">40</option>
                            <option className="filter__select-option" value="42">42</option>
                            <option className="filter__select-option" value="44">44</option>
                        </select>

                }



        </>
    );
}

