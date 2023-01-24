import "./Form.css";
import Input from "../Input";
import List from "../List";
import Button from "../Buttom";
import { useState } from "react";

export const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onNewColab({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card:</h2>
        <Input
          onChange={(value) => setNome(value)}
          value={nome}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome:"
        />

        <Input
          onChange={(value) => setCargo(value)}
          value={cargo}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o cargo:"
        />
        <Input
          onChange={(value) => setImagem(value)}
          value={imagem}
          label="Imagem"
          placeholder="Digite o endereço da imagem (Opcional)"
        />
        <List
          onChange={(value) => setTime(value)}
          value={time}
          obrigatorio={true}
          label="Times"
          itens={props.squad}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
