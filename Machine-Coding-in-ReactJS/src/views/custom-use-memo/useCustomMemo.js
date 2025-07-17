import { useEffect, useRef } from "react";
const areEqual=(prevDeps,newDeps)=>{
    if(prevDeps===null) return false;
    if(prevDeps.length !== newDeps.length) return false;
    for(let i=0;i<prevDeps.length;i++){
        if(prevDeps[i]!==newDeps[i]) return false;
    }
    return true;
}
const useCustomMemo=(cb,deps)=>{
    const memoizedRef=useRef();
    if(!memoizedRef.current || areEqual(memoizedRef.current.deps,deps)){
        memoizedRef.current={
            value:cb(),
            deps,
        }
    }
    useEffect(()=>{
        return()=>{
            memoizedRef.current=null;
            console.log("cleanup")
        };
    },[]);
    return memoizedRef.current.value;
}
export default useCustomMemo;