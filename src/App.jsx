import {Fragment, useState} from "react";
import {Input} from "./components/forms/input.jsx";
import {Checkbox} from "./components/forms/checkbox.jsx";

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
    return <>
        <SearchBar />
        <ProductTable />
    </>
}

function SearchBar () {
    return <div>
        <div>
            <Input value="" onChange={() => null} placeholder="search" />
            <Checkbox checked={false} onChange={() => null} label={"Only available"}  id={"stockOnly"} />
        </div>
    </div>
}

function ProductTable ({products}) {
    return <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
    </table>
}

export default App