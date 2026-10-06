

export const useDelayLoadng = (stateLoading: (v:boolean) => void, delay:number) => {
    let timer:any;

    return () => {
        clearTimeout(timer);
        stateLoading(true);
        timer = setTimeout(() => {
            stateLoading(false);
        }, delay)
    }
}