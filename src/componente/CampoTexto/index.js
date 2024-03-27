// import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    // console.log(props.label)

    // const placeholderModificada = `${props.placeholder}...

    // // let valor =""

    // const [valor , setValor] = useState('')

    const aoDigitado = (evento) => {

        // setValor (evento.target.value)

        // console.log(valor)
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">

            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} type={props.type ?? 'text' }/>
            

        </div>




    )



}
export default CampoTexto 