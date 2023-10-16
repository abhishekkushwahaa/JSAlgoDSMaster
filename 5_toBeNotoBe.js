var expect = function(val) {
    function toBe(compair) {
        if(val === compair){
            return true
        } else {
            throw new Error('Not Equal')
        }
    }

    function notToBe(compair){
        if(val !== compair){
            return true
        } else {
            throw new Error("Equal")
        }
    }

    return {
        toBe,
        notToBe
    }
};
