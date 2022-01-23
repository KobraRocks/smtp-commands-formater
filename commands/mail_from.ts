/** RFC https://www.ietf.org/rfc/rfc5321.txt 3.3 Mail Transaction
 * 
 * MAIL FROM:<reverse-path> [SP <mail-parameters> ] <CRLF>
 * 
 * The <reverse-path> portion of the first or only argument 
 * contains the source mailbox (between "<" and ">"
   brackets)
 * @param EndOfLineFormater 
 * @returns 
 */
export default function makeMAIL_FROM ( EndOfLineFormater: (s:string) => string ) {
    return ( emailAddr: string | string[] ) => {
        return EndOfLineFormater( `MAIL FROM:<${emailAddr}>` );
    }
}