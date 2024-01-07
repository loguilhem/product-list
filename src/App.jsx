import {Fragment, useState} from "react";
import {Input} from "./components/forms/input.jsx";
import {Checkbox} from "./components/forms/checkbox.jsx";
import {ProductCat} from "./components/products/ProductCat.jsx";
import {ProductRow} from "./components/products/ProductRow.jsx";

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {

    const [showStockOnly, setShowStockOnly] = useState(false)
    const [search, setSearch] = useState("")

    const visibleProducts = PRODUCTS.filter(product => {
        if (showStockOnly && !product.stocked) {
            return false
        }

        if (search && !product.name.includes(search)) {
            return false
        }

        return true
    })

    return <>
        <SearchBar
            showStockOnly={showStockOnly}
            onStockedOnlyChange={setShowStockOnly}
            search={search}
            onSearchChange={setSearch}
        />
        <ProductTable products={visibleProducts} />
    </>
}

function SearchBar ({showStockOnly, onStockedOnlyChange, search, onSearchChange}) {
    return <div>
        <div>
            <Input
                value={search}
                onChange={onSearchChange}
                placeholder="search ..."
            />
            <Checkbox
                id={"stockOnly"}
                onChange={onStockedOnlyChange}
                checked={showStockOnly}
                label={"Only available"}
            />
        </div>
    </div>
}

function ProductTable ({products}) {
    const rows = []
    let lastCat = null

    for (let product of products) {
        if (product.category !== lastCat) {
            rows.push(<ProductCat key={product.category} name={product.category} />)
        }
        lastCat = product.category
        rows.push(<ProductRow product={product} key={product.name} />)
    }

    return <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}

export default App