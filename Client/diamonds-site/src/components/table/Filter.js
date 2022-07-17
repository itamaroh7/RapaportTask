
export const Filter = ({filter, setFilter}) =>{
    return(
        <div className="my-1">
           🔎 Search: {' '}
            <input value={filter || ''} onChange={e=> setFilter(e.target.value)}/>
        </div>
    )
}