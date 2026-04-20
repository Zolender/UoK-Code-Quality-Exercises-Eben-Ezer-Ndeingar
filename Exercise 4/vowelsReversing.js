function reverseVowels(str) {
    if(!str.trim())return str
    
    const vowels = new Set(["e","o","u","i","a"])
    const order = []
    const temp = str.split("").map(x => {
                                    if(vowels.has(x.toLowerCase())){
                                        order.push(x)
                                        return "^"
                                    }
                                    return x
                                    } 
                                )
    const result = temp.map((y)=>{
        if(y==="^"){
        return order.pop()
        }
        return y
    })
    return result.join("")
}