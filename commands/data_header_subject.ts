export default function makeDATA_HEADER_SUBJECT( EndOfLineFormater: (s:string) => string ) {
    return ( subject: string ) => {
        return EndOfLineFormater( `Subject: ${subject}` );
    }
}