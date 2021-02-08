var L = (function(){
    /**
     * CONFIG:
     * 
     * {
     *     constants: arr format [str, str, ...],
     *     axiom: str,
     *     rules: obj format {str: str, str: str, ...},
     * }
    **/
    
    return {
        generate: function(config){
            var axiom = config.axiom;
            
            var r = "";
            
            for(var i = 0; i<axiom.length; i++){
                var cur = axiom.charAt(i);
                var isConstant = config.constants.indexOf(cur) !== -1;
                
                if(!isConstant){ // If not a constant,
                    r += config.rules[cur];
                }else{
                    r += cur;
                }
            }
            
            return r;
        }
    };
})();
