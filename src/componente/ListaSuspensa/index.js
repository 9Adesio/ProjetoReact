import  "./ListaSuspensa.css"

const ListaSuspensa = (props) =>{
    // console.log(props.itens)
    return(

        <div className="lista-suspensa">

            <label >{props.label}</label><br />
            

            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} defaultValue="">
                 <option  disabled value="" >Selecione um item...</option>
            
                    {
                    props.itens.map (item => {
                        return <option key={item} value={item}>{item}</option>
                        
                })}

            </select>
        </div>
    )



}

export default ListaSuspensa