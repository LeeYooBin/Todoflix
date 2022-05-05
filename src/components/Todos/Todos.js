import React from "react";
import './TodoStyle.css';
import like from '../../img/like.png';

export default class Todos extends React.Component{
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
    
        ],
        contentList: []
    };

    componentDidMount = () => this.setState({contentList: [...this.state.content]});

    handleSearchChange = event => {
        const contentFilter = this.state.content.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({contentList: contentFilter});
    };

    render(){
        return(
            <div id="pageBody">
                <input type='text' placeholder="Pesquisar" id="search" onChange={this.handleSearchChange}/>
                <div id="grid">
                    {this.state.contentList.map(item => (
                        <div id="Wrapper">
                            <img src={item.poster} alt='' className="posters"/>
                            <div className="titles">
                                <p className="moviesTitles"><strong>{item.title}</strong></p>
                                <div className="like"><p>-</p><img src={like} alt=''/></div>
                            </div>
                            <p className="movieSynopsis">{item.synopsis}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}