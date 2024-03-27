import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/adesio-hil%C3%A1rio-9157b1213" target="_blank" rel="noopener noreferrer">
                        <img width={50} height={50} src="/imagens/linkedln.png" alt="linkdin" />
                    </a>

                </li>
                <li>

                    <img width={50} height={50} src="/imagens/twiter.png" alt="" />

                </li>


                <li>

                    <img width={50} height={50} src="/imagens/whatsapp.png" alt="" />

                </li>

                <li>

                    <img width={50} height={50} src="/imagens/instagram.png" alt="instagram" />

                </li>
            </ul>
        </section>
        <section>
            <img src="" alt="" />
        </section>
        <section>
            <p>
                "Servimos com dedicação, oferecendo soluções inovadoras e garantindo satisfação total."
            </p>
        </section>
    </footer>)
}

export default Rodape
