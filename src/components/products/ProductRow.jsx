export function ProductRow ({product}) {

    const style = product.stocked ? {color : 'green'} : {color : 'red'}

    return <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>

}