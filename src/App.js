import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { Squad } from "./components/Squad/squad";

function App() {

  const squads = [
      {
        nome: 'Programação',
        corPrimaria: '#57C278',
        corSecundaria:'#D9F7E9'
      },
      {
        nome: 'Front-end',
        corPrimaria: '#82CFFA',
        corSecundaria:'#E8F8FF'
      },
      {
        nome: 'Data Science',
        corPrimaria: '#A6D157',
        corSecundaria:'#F0F8E2'
      },
      {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria:'#FDE7E8'
      },
      {
        nome: 'UX e Design',
        corPrimaria: '#DB6EBF',
        corSecundaria:'#FAE9F5'
      },
      {
        nome: 'Mobile',
        corPrimaria: '#FFBA05',
        corSecundaria:'#FFF5D9'
      },
      {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria:'#FFEEDF'
      },
      
  ]


  const [colaboradores, setColab] = useState([]);

  const onNewColabAdd = (colaborador) => {
    setColab([...colaboradores, colaborador])
  };

  return (
    <div className="App">
      <Banner />
      <Form squad={squads.map(squad => squad.nome)} onNewColab={colab => onNewColabAdd(colab)} />
      
      {squads.map(squad => <Squad 
        key={squad.nome} 
        nome={squad.nome} 
        corPrimaria={squad.corPrimaria} 
        corSecundaria={squad.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === squad.nome)}
      />)}

      <Footer/>

    </div>
  );
}

export default App;
