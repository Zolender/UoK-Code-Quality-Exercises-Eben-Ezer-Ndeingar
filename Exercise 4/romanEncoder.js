function solution(number){
    const lib={
        "1000" : "M",
        "500" : "D",
        "100" : "C",
        "50" : "L",
        "10" : "X",
        "5" : "V",
        "4" : "IV",
        "3" : "III",
        "2" : "II",
        "1" : "I"
        }
    
    const str = number.toString()
    const result = []
    for(let i = str.length -1; i>=0; i--){
        const temp = Math.floor(Number(str[i]) / 5)
        const remainder = Number(str[i]) % 5
        
        const romanFormat = ()
        
        if(remainder !==0){
        
        }
    }
}