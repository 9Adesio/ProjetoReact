import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [nacionalidade, setNacionalidade] = useState('')
    const [time, setTime] = useState ('')
    
    
  

    const aoSalvar =  (evento) => {
        evento.preventDefault()
        // console.log('Form foi submetido =>' ,nome , cargo, imagem, nacionalidade , time)
        props.aoColaboradorCadastro({
            nome,
            cargo,
            imagem,
            nacionalidade,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setNacionalidade('')
        setTime('')
    }


    return (
        <section className='formulario'>

            <form onSubmit={aoSalvar}>

                <h2>Preencha com os dados para criar o card dos colaboradores</h2>
               
                <CampoTexto
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>

                 <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Inserir imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                /> 

              

                <CampoTexto 
                    obrigatorio={true} 
                    label="Nacionalidade" 
                    placeholder="Digite nacionalidade" 
                    valor={nacionalidade}
                    aoAlterado ={valor => setNacionalidade(valor)}/>

                <ListaSuspensa
                     obrigatorio={true} 
                     label="Time"  
                     itens={props.times}
                     valor={time}
                     aoAlterado={valor =>  setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao> 
            </form>

        </section>

    )


}

export default Formulario

// texto="Criar Card"
