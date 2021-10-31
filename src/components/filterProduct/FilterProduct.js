import React from 'react'

const FilterProduct = (props) => {
    const {filterItems, eventName, sort, sortFilter} = props
    
    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <div>
                Order <select name="value" onChange={sortFilter} >
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div>
                Filter
                <select name="value" onChange={filterItems} >
                    <option value="all">ALL</option>
                    <option value="xbox">Xbox</option>
                    <option value="ps5">PS%</option>
                    <option value="switch">Switch</option>
                    <option value="accessories">Accessories</option>
                    <option value="pc">PC</option>
                
                
                </select>
            </div>
            
        </div>
    )
}

export default FilterProduct
