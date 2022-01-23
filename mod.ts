import makeHELO from "./commands/helo.ts";
import makeEHLO from "./commands/ehlo.ts";
import makeAUT_LOGIN from "./commands/auth_login.ts";
import makeAUTH_USERNAME from "./commands/auth_username.ts";
import makeAUTH_PASSWORD from "./commands/auth_password.ts";
import makeMAIL_FROM from "./commands/mail_from.ts";
import makeRCPT_TO_ from "./commands/rcpt_to.ts";
import makeDATA from "./commands/data.ts";
import makeDATA_HEADER_FROM from "./commands/data_header_from.ts";
import makeDATA_HEADER_TO from "./commands/data_header_to.ts";
import makeDATA_HEADER_DATE from "./commands/data_header_date.ts";
import makeDATA_HEADER_SUBJECT from "./commands/data_header_subject.ts";
import makeDATA_BODY from "./commands/data_body.ts";
import makeDATA_END from "./commands/data_end.ts";
import makeQUIT from "./commands/quit.ts";

function EOLFormater ( cmd:string ) {
    return cmd + '\r\n';
}

export const Commands = {
    HELO: makeHELO( EOLFormater ),
    EHLO: makeEHLO( EOLFormater ),

    AUTH_LOGIN: makeAUT_LOGIN( EOLFormater ),
    AUTH_USERNAME: makeAUTH_USERNAME( EOLFormater ),
    AUTH_PASSWORD: makeAUTH_PASSWORD( EOLFormater ),

    MAIL_FROM: makeMAIL_FROM( EOLFormater ),
    RCPT_TO: makeRCPT_TO_( EOLFormater ),

    DATA: makeDATA( EOLFormater ),
    DATA_HEADER_FROM: makeDATA_HEADER_FROM( EOLFormater ),
    DATA_HEADER_TO: makeDATA_HEADER_TO( EOLFormater ),
    DATA_HEADER_DATE: makeDATA_HEADER_DATE( EOLFormater ),
    DATA_HEADER_SUBJECT: makeDATA_HEADER_SUBJECT( EOLFormater ),
    DATA_BODY: makeDATA_BODY( EOLFormater ),
    DATA_END: makeDATA_END( EOLFormater ),

    QUIT: makeQUIT( EOLFormater )    
}