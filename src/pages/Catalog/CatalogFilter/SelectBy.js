import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeBrand, sortBy} from "../../../redux/reducers/shop";
import {useTranslation} from "react-i18next";

const SelectBy = () => {
    const dispatch = useDispatch()
    const [sort, setSort] = useState('')

    useEffect(()=>{
        dispatch(sortBy(sort))
    }, [sort])

    const {t} = useTranslation()



    return (
        <>
            <select onChange={(e) => setSort(e.target.value)} className="filter__select" name="selectPrice" id="">
                <option disabled value='DEFAULT'>Sort by</option>
                <option  className="filter__select-option" value="new">New</option>
                <option  className="filter__select-option" value="price">Price</option>
                <option className="filter__select-option" value="name">Name</option>
                <option key='reset' className="filter__select-option" value="">{t('catalog.reset')}</option>
            </select>

        </>
    );
};

export default SelectBy;