
/* 
    @param prob = qtd_de_questoes_feitas/qtd_total_questoes
    @param lf = cor inicial
    @param rg = cor final
*/
export function colorToArr(col) {
    let res = [] // 1 -> 3 -> 5
    for(let i = 1; i < 6; i+=2) {
        res.push(parseInt(col.substring(i,i+2),16))
    }
    return res
}

export function chColor(prob, lf, rg) {
    let med = []
    let dc = []
    let init = colorToArr(lf)
    let fin = colorToArr(rg)
    
    for(let i = 0; i < 3; i++) {
        let df = Math.floor(prob*Math.abs(init[i] - fin[i]))
        dc.push(Number(init[i] + (init[i] > fin[i] ? -df : df)))
        med.push(dc[i].toString(16))
    }
    let t1 = `#${med[0]}${med[1]}${med[2]}`
    return t1
}