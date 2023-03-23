import React from 'react';

const SelectBy = () => {
    return (
        <>
            <select className="filter__select" name="selectPrice" id="">
                <option className="filter__select-option" value="desc">Desc</option>
                <option className="filter__select-option" value="asc">Asc</option>
                <option className="filter__select-option" value="reset">Reset</option>
            </select>

        </>
    );
};

export default SelectBy;