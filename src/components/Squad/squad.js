import { Card } from "../Card/Card";
import "./squad.css";

export const Squad = (props) => {
    return(
        
        (props.colaboradores.length > 0) ? <section className="squad" style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
            {props.colaboradores.map(colaborador => <Card  corFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}