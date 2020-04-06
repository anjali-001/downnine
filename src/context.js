import React, { Component ,createContext } from 'react'
import {menuItems,detailProduct} from './data'

export const MenuContext=createContext();

class MenuContextProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cart:[...menuItems],
             products:[...menuItems],
             subTotal:0,
             tax:0,
             total:0,


        }
    }

    getItem =(id)=>{
        const val = this.state.products.find(item=>item.id===id)
        return val;
    }
    
    increment =(id) =>{
        let tempCart = [...this.state.cart]
        const selectedProduct =tempCart.find(item =>item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product =tempCart[index];
        product.count = product.count+1;
        product.total = product.count * product.price;

        this.setState(() =>{
            return{cart:[...tempCart]}
        },this.cartTotal())
    }

    decrement =(id) =>{
        let tempCart = [...this.state.cart]
        const  selectedProduct=tempCart.find(item => item.id===id)
        const  index = tempCart.indexOf(selectedProduct)
        const product=tempCart[index]
        if(product.count>1)
        {
        product.count= product.count-1;
        product.total=product.count*product.price  ;
        this.setState(()=>{
            return {cart:[...tempCart]}
        },this.cartTotal())
        }
        else
        {
        this.deleteItem(id);
        this.cartTotal()
        }
        
        
    }

    cartTotal=()=>{
        let tempCart=[...this.state.cart];
        let st=0,t=0,ct=0;
        tempCart.map((item)=> st=st+item.total);
        t=st*0.1;
        ct=t+st;
        this.setState(()=>{
            return{
                subTotal:st,
                tax:t,
                total:ct
            }
        })
    }




    deleteItem =(id)=>{
        let tempCart=[...this.state.cart]
        let wholeProduct=[...this.state.products]
        tempCart=tempCart.filter(item=>item.id!==id)
        const index=wholeProduct.indexOf(this.getItem(id))
        const removedProduct=wholeProduct[index]
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;
        this.setState(()=>{
            return{
                cart:[...tempCart],
                product:[...wholeProduct]
            }
        })
    }

    render() {
        return (
            <MenuContext.Provider value={{menuItems:menuItems,
                                        detailProduct:detailProduct,
                                        increment:this.increment,
                                        decrement:this.decrement,
                                        ...this.state
                                        }}>
                {this.props.children}
            </MenuContext.Provider>
        )
    }
}

export default MenuContextProvider





// import React, {Component, createContext} from 'react';
// import {menuItems, detailProduct} from './data';


// export const DataContext = createContext();

// class DataContextProvider extends Component {
//     state = {
//         products:[...menuItems],
//         detailProduct: detailProduct,
//         num:null,
//         randomTitle:null
//     }


// showItems =(id)=> {
//     const item = this.state.products.find(item=>item.id===id)
//     return item;
// }

// handleDetail = (id) => {
//     const item = this.showItems(id);
//     this.setState(()=>{
//         return {
//             detailProduct:item
//         }
//     })
// }
// generateNum = () => {
//     const num = Math.floor(Math.random()*9)+1;
//     // this.setState(()=>{
//     //     return{
//     //         num:num
//     //     }
//     // })
//     return num
// }


// generateTitle = () => {
    
//     const number = this.generateNum();
//     const item = this.showItems(number)
//     this.setState(()=>{
//         return{
//             randomTitle:item.title
//         }
//     })
// } 


// render(){
//     return(
//         <DataContext.Provider value = {{...this.state, handleDetail:this.handleDetail, generateNum:this.generateNum, generateTitle:this.generateTitle}}>
//             {this.props.children}
//         </DataContext.Provider>
//     )
// }
// }

// export default DataContextProvider;
