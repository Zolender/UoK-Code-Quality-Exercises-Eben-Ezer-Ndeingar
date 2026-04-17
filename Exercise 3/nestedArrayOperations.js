function depthChecker(arr, depth = 1){
    let maxDepth = depth
    for(let item of arr){
        if(Array.isArray(item)){
            let newDepth = depthChecker(item, depth+1)
            if(newDepth > maxDepth){
                maxDepth = newDepth
            }
        }
    }
    return maxDepth
}

function flatner(arr){
    if(!Array.isArray(arr))return "This isn't an array"
    return arr.flat(depthChecker(arr))
}
