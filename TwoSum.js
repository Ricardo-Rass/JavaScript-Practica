function twosum(nums, target) {
    let suma = 0;
    let resultado = [];
    for(let [index1, i] of nums.entries()){
        for(let [index2, j] of nums.entries()){
            suma = i + j
            if(suma == target){
                if(index1 == index2 ){
                    continue; 
                }else{
                    resultado.push(index1)                
                }    
            }     
        }   
    } 
    return resultado; 
};

twosum([3,2,4], 6)
