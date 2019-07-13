/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let tmp = A.map(elm=>elm.split(''));
    return tmp.reduce((res,arr, i)=>{
        if (i===0)return res;
        return res.filter(char =>{
            let position = arr.indexOf(char);
            if ( position ===-1) return false;
            arr.splice(position,1);
            return true;
        });
    },tmp[0]);
};
