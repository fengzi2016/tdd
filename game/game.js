
/**
 * Created by root on 17-7-18.
 */
function game(number) {

    let baseNumber='1234';
    let baseArr=baseNumber.split('');
    let getArr=number.split('');
    let count_A=0,count_B=0;
    let baseObj=baseArr.reduce(function (accumulator,currentValue,currentIndex) {
        accumulator.push({value:currentValue,tag:currentIndex});
        return accumulator;
    },[]);
    let getObj=getArr.reduce(function (accumulator,currentValue,currentIndex) {
        accumulator.push({value:currentValue,tag:currentIndex});
        return accumulator;
    },[]);
    for(let i=0;i<baseArr.length;i++){
        for(let j=0;j<getArr.length;j++){
            if(getObj[j].value===baseObj[i].value&&getObj[j].tag===baseObj[i].tag){
                count_A++;
            }else if(getObj[j].value===baseObj[i].value){
                count_B++;
            }
        }
    }
    return count_A+'A'+count_B+'B';
}

