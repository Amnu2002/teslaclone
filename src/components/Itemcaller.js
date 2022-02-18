import React from 'react'
import Item from './Item'
import SolarPanels from '../assets/Desktop-SolarPanels.jpeg'
import Accessories from '../assets/Desktop-Accessories.jpg'
import ModelS from '../assets/Desktop-ModelS.jpeg'
import Model3 from '../assets/Desktop-Model3.jpeg'
import ModelX from '../assets/Desktop-ModelX.jpeg'
import ModelY from '../assets/Desktop-ModelY.jpeg'
import SolarRoof from '../assets/Desktop-SolarRoof.jpeg'

function Itemcaller() {
  return (
    <div className='app_itemsContainer'>
        <Item
            title="Lowest Cost Solar Panels in America"
            desc="Money-back gurantee"
            id="sp"
            descLink=""
            backgroundImg={SolarPanels}
            leftBtnTxt='ORDER NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
            first
        />
        <Item
            title="Model S"
            id="ms"
            desc="$69,420"
            descLink=""
            backgroundImg={ModelS}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title="Model 3"
            id="m3"
            desc="Money-back gurantee"
            descLink=""
            backgroundImg={Model3}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title="Model X"
            id="mx"
            desc="Money-back gurantee"
            descLink=""
            backgroundImg={ModelX}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title="Model Y"
            id="my"
            desc="Money-back gurantee"
            descLink=""
            backgroundImg={ModelY}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title="Solar for New Roofs"
            id="sf"
            desc="Money-back gurantee"
            descLink=""
            backgroundImg={SolarRoof}
            leftBtnTxt='ORDER NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
        />
        <Item
            title="Accessories"
            id="ac"
            desc="Money-back gurantee"
            descLink=""
            backgroundImg={Accessories}
            leftBtnTxt='SHOP NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
        />
    </div>
  )
}

export default Itemcaller