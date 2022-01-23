export default function makeDATA_END( EndOfLineFormater: (s:string) => string ) {
    return () => {
        return EndOfLineFormater( '.' );
    }
}