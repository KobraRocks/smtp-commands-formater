export default function makeDATA_HEADER_DATE( EndOfLineFormater: (s:string) => string ) {
    return ( date: string ) => {
        return EndOfLineFormater( `Date: ${date}` );
    }
}