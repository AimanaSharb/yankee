import React from 'react';
import {useTranslation} from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation()


    return (
        <div>
            <div className="container">
                <h2 className="notfound__title">{t("notfound")}</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4dXddMmptrtDu2NiDC-pmuPi0H1FZWs3uw&usqp=CAU" alt=""/>
            </div>

        </div>
    );
};

export default NotFound;