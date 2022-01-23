# smtp-commands-formater
 Utility module to create well formated smtp command strings

 The module follows [RFC5321](https://www.ietf.org/rfc/rfc5321.txt) guidelines

 It is dependencies free.

## In Scope
Delivering a simple api only responsible to create well formated smtp command strings aligned with [RFC5321](https://www.ietf.org/rfc/rfc5321.txt).

## Out of Scope
Validating the data passed to the api methods this is the subject of another module ( will publish soon ).

## Usage

```ts
import { Commands } from "https:deno.land/x/smtp_commands@latest/"

const clientHostname = 'example.com';
const heloCmd: string = Commands.HELO( clientHostname );

console.log( heloCmd )
// expects 'HELO example.com\r\n';
```
## Related modules
[smtp_connection](https://deno.land/x/smtp_connection)