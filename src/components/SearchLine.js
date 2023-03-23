import React from 'react';
import {changeSearch} from "../redux/reducers/shop";
import {useDispatch, useSelector} from "react-redux";

const SearchLine = () => {

    const dispatch = useDispatch()



    return (
        <div>
            <input onChange={(e)=>dispatch(changeSearch(e.target.value)) } type="search" placeholder="search" className="search__input"/>

        </div>
    );
};

export default SearchLine;