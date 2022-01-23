export default function makeAUTH_PASSWORD ( EndOfLineFormater: (s:string) => string ) {
    return ( passwordBase64: string ) => {
        // password must be encoded in base64
        return EndOfLineFormater( passwordBase64 );
    }
}