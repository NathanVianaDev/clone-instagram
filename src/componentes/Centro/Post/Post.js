
import './Post.css'
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

export default function Post(props) {
    return (
        <div className="card post">
            <div className="card-header">
                <div className="card-post-Story">
                    <div className="card-post-imagem-perfil">
                        <img src="https://conteudo.imguol.com.br/c/parceiros/cf/2024/02/05/neymar-na-selecao-brasileira-1707155637142_v2_1x1.jpg" alt="Imagem do Story" />
                    </div>
                    <div className="card-post-nome-usuario">
                        <h4>{props.nomeUsuario}</h4>
                    </div>
                    <div className="verificado">
                        <MdVerified />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <img src={props.imgSrc} />
                <div className='componentes'>
                    <div className='comp-ini'>
                        <FaRegHeart />
                        <MdOutlineModeComment />
                        <IoPaperPlaneOutline />
                    </div>
                    <div className='comp-fim'>
                        <FaRegBookmark />
                    </div>
                </div>
                <div className='likes'>
                    <div className="card-post-imagem-like">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVylxT2c3io1nlX1AVCueoANLwpDgANGMyhBSuSBIJCA&s" alt="Imagem do Story" />
                    </div>
                    <p>Liked for <span>nyviestephan</span> and <span>3M others</span></p>
                </div>

                <p><span>{props.nomeUsuario}</span> {props.body}</p>

                <div className='gray'>
                    <div className='comments-gray'>
                        <p>View all 127 comments</p>
                    </div>
                    <div className='ago'>
                        <p>14 hours ago <span>• See translation</span></p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
            </div>
        </div>

        

    )
}