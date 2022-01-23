export default function makeHELO ( EndOfLineFormater: (s:string) => string ) {
    return ( clientHostname: string  ) => {
        return EndOfLineFormater( `HELO ${clientHostname}` );
    }
}