export function ProductCat ({name}) {

    const style = product.stocked ? {color : 'green'} : {color : 'red'}

    return <tr>
            <td colSpan={2}>{name}</td>
        </tr>

}