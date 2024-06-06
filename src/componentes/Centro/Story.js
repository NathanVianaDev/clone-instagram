export default function Story (props) {
    return (
        <div className="Story">
            <div className="imagem-perfil">
                <img src={props.caminhoDaImagem} alt="Imagem do Story" />
            </div>
            <div className="nome-usuario">
                <h4>{props.nomeUsuario}</h4>
            </div>
        </div>
    )
}