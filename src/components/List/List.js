import "./List.css"

export const List = (props) => {
   

    return(
        <div className="list">
            <label>
                {props.label}
            </label>
            <select onChange={event => props.onChange(event.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value="">Selecione</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
    }
