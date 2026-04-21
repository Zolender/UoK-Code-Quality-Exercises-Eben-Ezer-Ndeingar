function solution (roman) {
    const lib={
        M : 1000,
        D : 500,
        C : 100,
        L : 50,
        X : 10,
        V : 5,
        I : 1
    }

    let result = lib[roman[roman.length -1]]
    
    for(let i = roman.length - 2; i >= 0; i--){
        if(lib[roman[i]] >= lib[roman[i+1]]){
        result+=lib[roman[i]]
        }else{
        result -= lib[roman[i]]
        }
    }
    
    return result
}
