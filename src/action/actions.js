export const anotherName =(inputs,val)=>{
    if(inputs === 'CLEAR'){
        return {
            type:'CLEAR',payload:''
        }
    }else if (inputs =='EQUALS'){
        return {
            type:'EQUALS',payload:''
        }
    }else{
        return {
            type:'CALCULATE',payload:val
        }
    }
    
}
export const clearFun=()=>{
    return {
        type:'CLEAR',payload:''
    }
}
/*
export const anotherName =(name)=>{
    return async (actionDispatch)=>{
       /* fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res2=>{
            dispatch({
                type:'CHANGE_NAME',
                payload:res2[1].name
            })
        })
        
       const res=await fetch('https://jsonplaceholder.typicode.com/users')
       const res2=await res.json();
       actionDispatch({
        type:'CHANGE_NAME',
        payload:res2[1].name
    })
    }
}

export const addName =()=>{
    return async (action2Dispatch)=>{
        action2Dispatch({
            type:'ADD_NAME',
            payload:'oce'
        })
    
    }
}
*/