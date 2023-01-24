import "./Input.css"

export const Input = (props) => {

    const onWrite = (event) => {
        props.onChange(event.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onWrite} required={props.obrigatorio} placeholder={`${props.placeholder}...`}></input>
        </div>
    );
}

