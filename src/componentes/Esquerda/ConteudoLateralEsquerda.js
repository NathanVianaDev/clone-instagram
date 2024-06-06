import logo from '../../imagens/images.png';

import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { CgDetailsMore } from "react-icons/cg";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <div className='fixed'>
                <div className='logo'>
                    <img src={logo} alt='Logo' /></div>
                <ul>


                    <Menu nome="Home" classe="text-menu" icone={<GoHomeFill />} />

                    <Menu nome="Search" classe="text-menu" icone={<IoSearch />} />

                    <Menu nome="Explore" classe="text-menu" icone={<MdOutlineExplore />} />

                    <Menu nome="Reels" classe="text-menu" icone={<BiMoviePlay />} />

                    <Menu nome="Messages" classe="text-menu" icone={<TbBrandMessenger />} />

                    <Menu nome="Notifications" classe="text-menu" icone={<GoHeart />} />

                    <Menu nome="Create" classe="text-menu" icone={<CgAddR />} />

                    <div className='likes2'>
                        <img src="https://i.pinimg.com/736x/d0/fb/a5/d0fba5e1f0d598fb1ea9c6175d07312a.jpg" alt="Imagem do Story" /><Menu nome="Profile" classe="text-menu" />
                    </div>
                </ul>
                <ul id='final'>
                    <Menu className='More' nome="More" classe="text-menu" icone={<CgDetailsMore />} />
                </ul>
            </div>
        </div>
    )
}

// export default ConteudoLateralEsquerda;