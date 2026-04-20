function fibSeqUpToN(n){
    if(n<0)return
    if(n===0)return 0
    if(n<=2)return 1
    const result = [0 , 1]
    for(let i = 2; i <= n; i++){
        result[i] = result[i - 2] + result[i - 1]
    }
    return result
}

console.log(fibSeqUpToN(23))