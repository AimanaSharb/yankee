import React from 'react';
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SideBar from "./SideBar/SideBar";
import CatalogRow from "./CatalogRow/CatalogRow";

const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <BreadCrumbs/>
                <div className="catalog__down">
                    <SideBar/>
                    <CatalogRow/>
                </div>



            </div>
        </section>
    );
};

export default Catalog;