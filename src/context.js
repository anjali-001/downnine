import React, {Component, createContext} from 'react';
import {menuItems} from './data';


const DataContext = createContext();

class DataContextProvider extends Component {
    state = {
        products:[]
    }


showItems = () => {
console.log(this.state)
}

render(){
    return(
        <DataContext.Provider value = {{...this.state, showItems: this.showItems}}>
            {this.props.children}
        </DataContext.Provider>
    )
}
}

export default DataContextProvider;