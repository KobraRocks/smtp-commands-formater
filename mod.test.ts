import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { Commands } from "./mod.ts";

Deno.test('Commands.HELO()', () => {
    const clientHostname = 'example.com';
    const targetCmd = `HELO ${clientHostname}\r\n`;
    const cmd = Commands.HELO( clientHostname );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.EHLO()', () => {
    const clientHostname = 'example.com';
    const targetCmd = `EHLO ${clientHostname}\r\n`;
    const cmd = Commands.EHLO( clientHostname );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.AUTH_LOGIN()', () => {
    const targetCmd = `AUTH LOGIN\r\n`;
    const cmd = Commands.AUTH_LOGIN();

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.AUTH_USERNAME()', () => {
    const usernameBase64 = btoa( 'me' );
    const targetCmd = `${usernameBase64}\r\n`;
    const cmd = Commands.AUTH_USERNAME( usernameBase64 );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.AUTH_PASSWORD()', () => {
    const passwordBase64 = btoa('******');
    const targetCmd = `${passwordBase64}\r\n`;
    const cmd = Commands.AUTH_USERNAME( passwordBase64 );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.MAIL_FROM()', () => {
    const email = 'me@example.com';
    const targetCmd = `MAIL FROM:<${email}>\r\n`;
    const cmd = Commands.MAIL_FROM( email );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.RCPT_TO()', () => {
    const email = 'you@example.com';
    const targetCmd = `RCPT TO:<${email}>\r\n`;
    const cmd = Commands.RCPT_TO( email );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.DATA()', () => {

    const targetCmd = `DATA\r\n`;
    const cmd = Commands.DATA();

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.DATA()', () => {

    const targetCmd = `DATA\r\n`;
    const cmd = Commands.DATA();

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.DATA_HEADER_ FROM()', () => {
    const email = 'me@example.com';
    const targetCmd = `From: ${email}\r\n`;
    const cmd = Commands.DATA_HEADER_FROM( email );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.DATA_HEADER_ FROM()', () => {
    const email = 'you@example.com';
    const targetCmd = `To: ${email}\r\n`;
    const cmd = Commands.DATA_HEADER_TO( email );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.DATA_HEADER_ DATE()', () => {
    const date = 'Mon, Jan 17 2022 07:55:42 +0000 (Coordinated Universal Time)';
    const targetCmd = `Date: ${date}\r\n`;
    const cmd = Commands.DATA_HEADER_DATE( date );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.DATA_HEADER_ SUBJECT()', () => {
    const subject = 'Hello you';
    const targetCmd = `Subject: ${subject}\r\n`;
    const cmd = Commands.DATA_HEADER_SUBJECT( subject );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.DATA_BODY()', () => {
    const body = 'something to say ?';
    const targetCmd = `${body}\r\n`;
    const cmd = Commands.DATA_BODY( body );

    assertEquals( cmd,  targetCmd);
});

Deno.test('Commands.DATA_END()', () => {

    const targetCmd = `.\r\n`;
    const cmd = Commands.DATA_END();

    assertEquals( cmd,  targetCmd);
});


Deno.test('Commands.QUIT()', () => {

    const targetCmd = `QUIT\r\n`;
    const cmd = Commands.QUIT();

    assertEquals( cmd,  targetCmd);
});