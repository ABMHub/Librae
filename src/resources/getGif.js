import { Image } from "react-native"


export function GetGif(props) {
    let gif_image
    let {icon_name, style} = props
    
    console.log(style)
    
    switch(icon_name) {
        default:
            gif_image = require("../../assets/Homer.gif")
    }
    return(<Image source={gif_image} style={style}></Image>)
}
