export default function makeDATA_HEADER_TO( EndOfLineFormater: (s:string) => string ) {
    return ( emailAddr: string ) => {
        return EndOfLineFormater( `To: ${emailAddr}` );
    }
}