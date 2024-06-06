import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post
                nomeUsuario="neymarjr"
                imgSrc="https://pbs.twimg.com/media/F28BF3kX0AAissk.jpg"
                body="De volta à casa que nunca deixei de chamar de lar. Orgulhoso e motivado por vestir novamente as cores do Barça. Estamos juntos, família culé! 🔵🔴 #ForçaBarça #ViscaBarça" />
        </div>
    )
}