export const getJson = () => {
    const json = require("./questions.json")
    return json
}

export const getRandomNum = (length) => {
    return Math.floor(Math.random() * length)
}

export const shuffleIndex = (array) => {
    let i = array.length, j = 0, temp

    while(i--){
        j = Math.floor(Math.random() * (i+1))

        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    return array
}

export const selectRandom = (array, stopIdx=4) => {
    let ranNums = [], i = array.length, j = 0

    while(i--){
        j = Math.floor(Math.random() * (i+1))
        ranNums.push(array[j])
        array.splice(j, 1)

        if(ranNums.length == stopIdx)
            break
    }

    return ranNums
}

export const createQuestion = (control=0) => {
    let jsonItems = selectRandom(getJson().slice())
    jsonItems = shuffleIndex(jsonItems)

    let alternatives = []
    let answer = getRandomNum()
    let question
    
    for(let i = 0; i < jsonItems.length; i++){
        if(control == 1)
            alternatives.push(jsonItems[i]['Texto'])
        else
            alternatives.push(jsonItems[i]['Gif'])
    }

    if(control == 1)
        question = jsonItems[answer]['Gif']
    else
        question = jsonItems[answer]['Texto']

    return [alternatives, question, answer] 
}