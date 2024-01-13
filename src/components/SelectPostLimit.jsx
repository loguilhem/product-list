export function SelectPostLimit ({value, setter}) {
    const optionValues = ["1","10","50","100"]
    const onChangeLimit = (e) => {
        const newLimit = e.target.value
        setter(newLimit)
    }
    return <>
            <Select options={optionValues} value={value} onChange={onChangeLimit} />
        </>
}

const Select = ({options, value, onChange}) => {
    return <select value={value} onChange={onChange}>
        {options.map((e, i) => {
            return <option key={i} value={e}>{e}</option>;
        })}
        </select>
};
