import Formulario from './componente/Formulario';
import Banner from './componente/Banner/Banner';
import { useState } from 'react';
import Time from './componente/Times';
import Rodape from './Rodape';




function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#FFF8E1'
    },

    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#D3D3D3'
    },

    {
      nome: 'Data-science',
      corPrimaria: 'A6D157',
      corSecundaria: '#FFD1DC '
    },

    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#B0E0E6'
    },

    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#98FB98'
    },
  
    
    {
      nome: 'Mobile',
      corPrimaria: '#FFBAO5',
      corSecundaria: '#E6E6FA'
    },
    
    {
      nome: 'Inovaçaõ e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFFFE0'
    }
  ]

  const[colaboradores, setColoboradores] = useState([])

  const aoNovoColobaradorAdicionado = (colaborador) => {
    setColoboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">

      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastro={colaborador => aoNovoColobaradorAdicionado(colaborador)}/>
      
      
      {times.map(time => <Time
       
       key={time.nome}
       timeNome={time.nome} 
       corPrimaria={time.corPrimaria}
       corSecundaria={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
       />)}

     <Rodape/>

    </div>


  );
}

export default App;
