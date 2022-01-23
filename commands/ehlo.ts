export default function makeEHLO ( EndOfLineFormater: (s:string) => string ) {
    return ( clientHostname: string  ) => {
        return EndOfLineFormater( `EHLO ${clientHostname}` );
    }
}