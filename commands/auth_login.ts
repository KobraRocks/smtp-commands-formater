export default function makeAUTH_LOGIN ( EndOfLineFormater: (s:string) => string ) {
    return () => {
        return EndOfLineFormater( `AUTH LOGIN` );
    }
}