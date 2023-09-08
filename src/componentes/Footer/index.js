import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://app.aluracursos.com/course/react-como-componentes-funcionan/task/83888">
              <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href="https://app.aluracursos.com/course/react-como-componentes-funcionan/task/83888">
              <img src="/img/twitter.png" alt="X"/>
            </a>
            <a href="https://app.aluracursos.com/course/react-como-componentes-funcionan/task/83888">
              <img src="/img/instagram.png" alt="Instagram"/>
            </a>
        </div>
        <img  className="logo1" src="/favicon.png" alt="org"/>
        <strong>Desarrollado por Alura</strong>


    </footer>
}

export default Footer