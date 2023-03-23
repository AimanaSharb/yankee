import React from 'react';
import SelectSize from "./SelectSize";
import SelectBrand from "./SelectBrand";
import SelectBy from "./SelectBy";

const CatalogFilter = () => {
    return (
        <div className="catalogFilter__row">
            <SelectSize/>
            <SelectBrand/>
            <SelectBy/>

        </div>
    );
};

export default CatalogFilter;