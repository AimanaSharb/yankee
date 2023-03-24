import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {changeBrand} from "../../../redux/reducers/shop";
import {useTranslation} from "react-i18next";

const SelectBrand = () => {
    const dispatch = useDispatch()

    const [brand, setBrand] = useState('')
    const {t}= useTranslation()




    useEffect(()=>{
        dispatch(changeBrand(brand))
    }, [brand])


    return (
        <>
            <select  value={brand}  onChange={(e) => setBrand(e.target.value)} className="filter__select" name="selectPrice" id="">
                <option  className="filter__select-option" disabled value="DEFAULT">{t('catalog.brand')}</option>
                <option key='Abercrombie' className="filter__select-option" value="Abercrombie">Abercrombie</option>
                <option key='Celine' className="filter__select-option" value="Celine">Celine</option>
                <option key='reset' className="filter__select-option" value="">{t('catalog.reset')}</option>
            </select>

        </>
    );
};

export default SelectBrand;