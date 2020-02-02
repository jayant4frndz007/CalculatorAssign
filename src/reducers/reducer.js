const isState={
    name:'',
  
}
let ar1=[];
let ar2=[];
let ar3=[];
const reducer =(state=isState,action)=>{
    console.log(action);
    var res=undefined;

    if(ar1.length>0 ){
        res= doCompute(ar1.join(''),ar3);
       
    }
    if(action.type === 'CALCULATE'){
       
        if(action.payload == '*' || action.payload == '/' || action.payload == '+' || action.payload == '-'){
            if(ar1.length>0){
                ar1.push(action.payload);
                ar2.push(action.payload);
                ar3.push(action.payload);
            }
            
        }else{
            ar1.push(action.payload);
            ar2.push(action.payload);
        }
        
        return {
            name:ar2.join(''),
            output:undefined
        };
       
    }
    if(action.type === 'CLEAR'){
        ar1=[];
        ar2=[];
        ar3=[];
        return {
            name:undefined,
            output:undefined
        }
    }
    if(action.type === 'EQUALS'){
        return {
            name:ar2.join(''),
            output:res
        }
    }
    return state;
}
 function doCompute(args,ar3){

let arr3=args.split(/[/*\-+]/);
//let opr=args.split('^[0-9]$');
let res=undefined;
console.log('ARGUMENTS IS COMING',ar3);
res=arr3[0];
    for(let i=0;i<ar3.length;i++){

        if(ar3[i]== '*'){
            res=parseInt(res) * parseInt(arr3[i+1]);
            console.log(res)
        }
        if(ar3[i]== '/'){
            res=parseInt(res) / parseInt(arr3[i+1]);
        }
        if(ar3[i]== '+'){
            res=parseInt(res) + parseInt(arr3[i+1]);
        }
        if(ar3[i]== '-'){
            res=parseInt(res) - parseInt(arr3[i+1]);
        }

    }
    return res;
 }
export default reducer;