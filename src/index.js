module.exports = function check(str, bracketsConfig) {
    str = str.split('');
    for (let i=0; i<str.length; i++){
        for (let j=0; j<bracketsConfig.length; j++) {
            if (str[i]==bracketsConfig[j][0]&&str[i+1]==bracketsConfig[j][1]) {
                str.splice (i, 2);
                i=0;
                j=0;
            }
        }
    }
    if (str.length==0) {
        return true;
    };
    return false;
}
