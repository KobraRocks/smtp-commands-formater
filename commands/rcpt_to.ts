/** RFC https://www.ietf.org/rfc/rfc5321.txt 3.3 Mail Transaction
 * 
 * This step of the procedure can be repeated any number of times.
 * 
 * RCPT TO:<forward-path> [ SP <rcpt-parameters> ] <CRLF>
 * 
 * The first or only argument to this command includes a forward-path
 * (normally a mailbox and domain, always surrounded by "<" and ">"
 * brackets) identifying one recipient.
 * @param EndOfLineFormater 
 * @returns 
 */
export default function makeRCPT_TO ( EndOfLineFormater: (s:string) => string ) {
    return ( emailAddr: string ) => {
        return EndOfLineFormater( `RCPT TO:<${emailAddr}>` );
    }
}