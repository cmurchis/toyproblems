function process_numbers(list){
    let output = []
    for(let i = 0; i < list.length; i++){
        if(list[i] % 2 === 0){
            output.push(list[i] * list[i])
        }else{
            output.push(list[i])
        }
    }
    return output
}


process_numbers([1, 2, 3, 4, 5, 6]) 
