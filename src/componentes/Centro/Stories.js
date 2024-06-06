import Story from "./Story"
import './Stories.css'

var listaUsuarios = [
    {
        nome: "neymarjr",
        url: "https://conteudo.imguol.com.br/c/parceiros/cf/2024/02/05/neymar-na-selecao-brasileira-1707155637142_v2_1x1.jpg"
    },
    {
        nome: "ochicoin",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7NWo94Lnejfzkcw-Zx-92OKUIzGWmijSa9YMBv_K9A&s"
    },
    {
        nome: "arthuraguiar",
        url: "https://pbs.twimg.com/profile_images/1641422596800409602/pXDpvZYp_400x400.jpg"
    },
    {
        nome: "orochi",
        url: "https://i1.sndcdn.com/artworks-mzMSzgiU1ayOevj8-ULtjRw-t1080x1080.jpg"
    },
    {
        nome: "igorjob69",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGuwSBqAwwZYXIhkY-0_fdf9BlWiha7PUbKRhPp4y3g&s"
    },
    {
        nome: "nyviestphan",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVylxT2c3io1nlX1AVCueoANLwpDgANGMyhBSuSBIJCA&s"
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
                })
            }

        </div>
    )
}