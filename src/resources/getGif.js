import { Image } from "react-native"


export function GetGif(props) {
    let gif_image
    let {icon_name, style} = props
    
    switch(icon_name) {
        case "apartamento":
            gif_image = require("../../assets/casa/apartamento.gif")
            break
        case "armario":
            gif_image = require("../../assets/casa/armario.gif")
            break
        case "banheira":
            gif_image = require("../../assets/casa/banheira.gif")
            break
        case "beliche":
            gif_image = require("../../assets/casa/beliche.gif")
            break
        case "berco":
            gif_image = require("../../assets/casa/berco.gif")
            break
        case "chamine":
            gif_image = require("../../assets/casa/chamine.gif")
            break
        case "cozinha":
            gif_image = require("../../assets/casa/cozinha.gif")
            break
        case "fogao":
            gif_image = require("../../assets/casa/fogao.gif")
            break
        case "lareira":
            gif_image = require("../../assets/casa/lareira.gif")
            break
        case "poltrona":
            gif_image = require("../../assets/casa/poltrona.gif")
            break
        case "atletismo":
            gif_image = require("../../assets/esporte/atletismo.gif")
            break
        case "bale":
            gif_image = require("../../assets/esporte/bale.gif")
            break
        case "basquete":
            gif_image = require("../../assets/esporte/basquete.gif")
            break
        case "boliche":
            gif_image = require("../../assets/esporte/boliche.gif")
            break
        case "campeao":
            gif_image = require("../../assets/esporte/campeao.gif")
            break
        case "capoeira":
            gif_image = require("../../assets/esporte/capoeira.gif")
            break
        case "ciclismo":
            gif_image = require("../../assets/esporte/ciclismo.gif")
            break
        case "competicao":
            gif_image = require("../../assets/esporte/competicao.gif")
            break
        case "futivolei":
            gif_image = require("../../assets/esporte/futivolei.gif")
            break
        case "jiu-jitsu":
            gif_image = require("../../assets/esporte/jiu-jitsu.gif")
            break
        case "animais":
            gif_image = require("../../assets/natureza/animais.gif")
            break
        case "chuva":
            gif_image = require("../../assets/natureza/chuva.gif")
            break
        case "cogumelo":
            gif_image = require("../../assets/natureza/cogumelo.gif")
            break
        case "duna":
            gif_image = require("../../assets/natureza/duna.gif")
            break
        case "flor":
            gif_image = require("../../assets/natureza/flor.gif")
            break
        case "floresta":
            gif_image = require("../../assets/natureza/floresta.gif")
            break
        case "furacao":
            gif_image = require("../../assets/natureza/furacao.gif")
            break
        case "ilha":
            gif_image = require("../../assets/natureza/ilha.gif")
            break
        case "lago":
            gif_image = require("../../assets/natureza/lago.gif")
            break
        case "onda":
            gif_image = require("../../assets/natureza/onda.gif")
            break
        case "anel":
            gif_image = require("../../assets/vestuario/anel.gif")
            break
        case "boina":
            gif_image = require("../../assets/vestuario/boina.gif")
            break
        case "bolsa":
            gif_image = require("../../assets/vestuario/bolsa.gif")
            break
        case "camiseta":
            gif_image = require("../../assets/vestuario/camiseta.gif")
            break
        case "capa-de-chuva":
            gif_image = require("../../assets/vestuario/capa-de-chuva.gif")
            break
        case "casaco":
            gif_image = require("../../assets/vestuario/casaco.gif")
            break
        case "chapeu":
            gif_image = require("../../assets/vestuario/chapeu.gif")
            break
        case "chinelo":
            gif_image = require("../../assets/vestuario/chinelo.gif")
            break
        case "short":
            gif_image = require("../../assets/vestuario/short.gif")
            break
        case "sunga":
            gif_image = require("../../assets/vestuario/sunga.gif")
            break
        default:
            gif_image = require("../../assets/Homer.gif")
    }
    return(<Image source={gif_image} style={style}></Image>)
}
