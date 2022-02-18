import React from 'react'
import Button from './Button'
import './Item.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Item({title,desc,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,first,id}) {
  return (
    <div className='item' id={id} style={{
        backgroundImage: `url(${backgroundImg})`
    }}>
        <div className="item_container">
            <div className="item_text">
                <p>{title}</p>
                <div className="item_description">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="item_lowerThird">
                <div className="item_buttons">
                    <Button imp='primary' text={leftBtnTxt} link ={leftBtnLink} />
                    {twoButtons && (
                        <Button imp='secondary' text={rightBtnTxt} link ={rightBtnLink} />
                    )}
                </div>
                {first &&(
                    <div className="item_expand">
                        <ExpandMoreIcon />
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Item