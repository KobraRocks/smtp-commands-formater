export default function makeDATA( EndOfLineFormater: (s:string) => string ) {
    return () => {
        return EndOfLineFormater( `DATA` );
    }
}