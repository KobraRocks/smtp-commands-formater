export default function makeDATA_BODY( EndOfLineFormater: (s:string) => string ) {
    return ( body: string ) => {
        return EndOfLineFormater( body );
    }
}