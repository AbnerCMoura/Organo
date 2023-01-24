import "./Card.css";

export const Card = ({nome, cargo, imagem, corFundo}) => {
  return (
    <div className="colaborador" style={{backgroundColor: corFundo}}>
      <div className="cabecalho">
        <img src={"https://cdn-icons-png.flaticon.com/512/456/456212.png"} alt=""/>
        
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};
