import { useRef } from "react";

const useCustomEffect = (effect, deps) => {
  const firstRender = useRef(true);
  const prevDeps = useRef([]);
  if (firstRender.current) {
    firstRender.current = false;
    const cleanup = effect();
    return () => {
        if(cleanup && typeof cleanup==="function"){
            cleanup();
        }
    };
  }
  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;
  if (depsChanged) {
    const cleanup=effect();
    if(cleanup && typeof cleanup === "function" && deps){
        cleanup();
    }
  }

  prevDeps.current = deps || [];
};
export default useCustomEffect;
