export default function makeAUTH_USERNAME ( EndOfLineFormater: (s:string) => string ) {
    return ( usernameBase64: string ) => {
        // username must be encoded in base64
        return EndOfLineFormater( usernameBase64 );
    }
}