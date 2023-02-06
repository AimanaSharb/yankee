import React, {useContext, useState} from 'react';
import img from "../../../assets/Home/Vector (1).svg";





const AccordionItem = ({item}) => {
    const [accordion, setAccordion] = useState()
    return (
        <div className="accordion__item">
            <div className="accordion__item-top">
                <h3 className="accordion__header">{item.question}</h3>
                <span className={`${accordion ?'close' : 'open'}`} onClick={()=>setAccordion(!accordion)}><img src={img} alt=""/></span>
            </div>

            <div className="accordion__item-bot" style={{display :accordion ? 'block' : 'none'}}>
                {item.answer}
            </div>




        </div>


    );
};

export default AccordionItem;