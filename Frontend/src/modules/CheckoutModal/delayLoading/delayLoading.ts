

const delayLoading = (delay:number) => {
    let timer:any;

    return (stateLoading: (v:boolean) => void) => {
        clearTimeout(timer);
        stateLoading(true);
        timer = setTimeout(() => {
            stateLoading(false);
        }, delay)
    }
}
export const delay = delayLoading(3000)