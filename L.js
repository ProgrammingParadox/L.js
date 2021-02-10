var L = (function(){
    /**
     * (c) 2021 The_Paradox, programmingParadox, all rights reserved.
     * https://www.khanacademy.org/computer-programming/L/6618703010938880
     * 
     * Avaliable under the MIT license
     **/
    
    return {
        generate: function(config){
            /**
             * CONFIG:
             * 
             * {
             *     constants: arr format [str, str, ...],
             *     axiom: str,
             *     rules: obj format {str: str, str: str, ...},
             * }
            **/
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
        },
        recursive: function(config, i){
            /**
             * CONFIG:
             * 
             * config: obj format L.config
             * i: int
             **/
            
            var cur = config.axiom;
            for(var _i = 0; _i<i; _i++){
                cur = this.generate(config);
                config.axiom = cur;
            }
            
            return cur;
        },
        draw: function(config){
            /**
             * CONFIG:
             * 
             * {
             *     str: str,   
             *   
             *     x: int,
             *     y: int,
             * 
             *     angle: int,
             *     stepLength: int,
             * 
             *     commands: obj format {str: funct(config), str: funct(config), ...},
             * }
             **/
            
            var commands = config.commands;
            
            translate(config.x, config.y);
            var cur = config.str;
            
            for(var i = 0; i<cur.length; i++){
                var c = cur.charAt(i);
                
                commands[c](config);
            }
            
            resetMatrix();
        },
    };
})();
