import React, {useContext } from 'react'
import Menu from './Menu'
import { MenuContext } from '../context'

const MenuList = () => {
    const {products} = useContext(MenuContext)
    
        return (
            <React.Fragment>
                <div className="row">
                {
                    products.map( item =>{
                        return <Menu key={item.id} item={item}/>
                    }
                    )
                }
                {/* <Menu></Menu> */}
                </div>
            </React.Fragment>
        )
    }


export default MenuList