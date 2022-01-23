export default function makeQUIT( EndOfLineFormater: (s:string) => string ) {
    return () => {
        return EndOfLineFormater( `QUIT` );
    }
}