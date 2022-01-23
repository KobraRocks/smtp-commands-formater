export default function makeDATA_HEADER_FROM( EndOfLineFormater: (s:string) => string ) {
    return ( emailAddr: string ) => {
        return EndOfLineFormater( `From: ${emailAddr}` );
    }
}