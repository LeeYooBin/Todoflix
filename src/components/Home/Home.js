import React, { Component } from "react";
import './HomeStyle.css';
import Carousel from 'nuka-carousel';

import heart from '../../img/heart.png';
import like from '../../img/like.png';


export default class Main extends Component {

    state = {
        content: [
            {
                poster: 'http://www.artecines.com.br/wp-content/uploads/2016/11/Captain_Fantastic_Artecines_Capa-1.jpg',
                title: 'Capitão Fantástico',
                synopsis: 'Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.'
            },
            {
                poster: 'https://conteudo.imguol.com.br/c/entretenimento/2014/02/25/poster-do-filme-hoje-eu-quero-voltar-sozinho-de-daniel-ribeiro-1393326321760_615x300.jpg',
                title: 'Hoje eu quero voltar sozinho',
                synopsis: 'Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.'
            },
            {
                poster: 'http://pm1.narvii.com/7321/f7e1dcf62ebbdbdf2c849f3edefd42c153d98d38r1-300-300v2_00.jpg',
                title: 'A que horas ela volta?',
                synopsis: 'Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.'
            },
            {
                poster: 'https://imagoi.com/wp-content/uploads/2021/04/Shrek-poster-imagoi.jpg',
                title: 'Shrek',
                synopsis: 'Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.'
            },
            {
                poster: 'https://images-na.ssl-images-amazon.com/images/I/A17MUv7SvPL.jpg',
                title: 'Spider-man',
                synopsis: 'Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.'
            },
            {
                poster: 'https://static.wixstatic.com/media/fa0470_f568b2b3fc0e4333a1be0d933700dc83~mv2.jpg/v1/fill/w_620,h_468,al_c,q_90/fa0470_f568b2b3fc0e4333a1be0d933700dc83~mv2.jpg',
                title: 'Um sonho de liberdade',
                synopsis: 'Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.'
            }
        ]
    };

    render() {

        return (
            <div id="wrapper">
                <div id="mainMovie">
                    <div id="mainPoster">
                        <img src={this.state.content[0].poster} alt='Main poster'/>
                    </div>
                    <div id="mainInfo">
                        <div><img src={heart} alt=""/></div>
                        <h1 id="mainTitle">{this.state.content[0].title}</h1>
                        <p id="mainSynopsis">{this.state.content[0].synopsis}</p>
                        <div id="mainLike"><p>-</p><img src={like} alt=''/></div>
                    </div>
                </div>

                <h3>Destaques</h3>
                
                <Carousel 
                    wrapAround = {true}
                    slidesToShow = {5}
                    renderBottomCenterControls = {false}
                    scrollMode = {'reminder'}
                    animation = {'zoom'}
                    defaultControlsConfig={{
                        nextButtonText: '>' ,
                        prevButtonText: '<',
                        pagingDotsStyle: {fill: 'red'},
                    }}>
                    {this.state.content.map(item => (
                        <div id="carousel">
                            <img src={item.poster} alt='' className="posters"/>
                            <div className="title">
                                <p className="movieTitles"><strong>{item.title}</strong></p>
                                <div className="like"><p>-</p><img src={like} alt=''/></div>
                            </div>
                            <p className="movieSynopsis">{item.synopsis}</p>
                            <div className="heart"><img src={heart} alt=''/></div>
                        </div>
                    ))}
                </Carousel>
            </div>
        )
    }
}