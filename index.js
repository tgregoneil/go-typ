// index.js

module.exports = (function () {

const P = {};

//---------------------
P.type = (arg) => {
    
    const typeO = {
        arr: null,
        bgi: null,
        bol: null,
        fun: null,
        nul: null,
        num: null,
        obj: null,
        str: null,
        sym: null,
        und: null,

        res: "",
    };

    switch (typeof arg) {

        case 'undefined':
            typeO.und = true;
            break;

        case 'object':
            if (arg === null) {

                typeO.nul = true;

            } else if (Array.isArray (arg)) {

                typeO.arr = true;

            } else {

                typeO.obj = true;

            } // end if (arg === null)
            break;
            
        case 'boolean':
            typeO.bol = true;
            break;

        case 'number':
            typeO.num = true;
            break;

        case 'bigint':
            typeO.bgi = true;
            break;

        case 'string':
            typeO.str = true;
            break;

        case 'symbol':
            typeO.sym = true;
            break;

        case 'function':
            typeO.fun = true;
            break;

    } // end switch (typeof arg)
    
    const keys = Object.keys (typeO);

    keys.forEach (function (key) {

        if (key !== 'res' && typeO [key]) {

            typeO.res = key;

        } // end if (typeO [key])
        
    });

    return typeO;

}; // end P.type 

//---------------------
P.res = (arg) => {
    
    const typ = P.type (arg);
    return typ.res;

}; // end P.typeRes 


return P;

}());

