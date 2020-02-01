/*
======== MARCOTUNDO.COM API ========
- API GATEWAY
- AWS LAMBDA
 */

let htmlToText = require('html-to-text');
let AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

let response = {
    headers: {
        'Access-Control-Allow-Origin': 'https://marcotundo.com',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    },
    body: {}
};

exports.handler = async (event) => {

    console.log('Received event:', JSON.stringify(event, null, 2));

    let body = {};

    if (event.body)
        body = JSON.parse(event.body);

    if ((event.path === '/') && (event.httpMethod === 'POST')) {

        const fromEmail = 'marco@bymar.co';
        const toEmail = 'marco@bymar.co';
        const subject = 'New Message on MarcoTundo.com';
        const emailBody = '<html><body>' +
            '<p>Name: ' + body.name + '</p>' +
            '<p>Email: ' + body.email + '</p>' +
            '<p>Message: ' + body.message + '</p>' +
            '</body></html>';
        const text = htmlToText.fromString(emailBody, {wordwrap: 130});

        let params = {
            Destination: {
                CcAddresses: [],
                ToAddresses: [
                    toEmail
                ]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: emailBody
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: text
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: subject
                }
            },
            Source: fromEmail,
            ReplyToAddresses: [
                fromEmail
            ],
        };

        let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

        await sendPromise.then((data) => {
            console.log('Sent Email', data.MessageId);

            response.statusCode = 200;
            response.body = JSON.stringify({
                'success' : true,
                'message' : 'Email sent'
            });

        }, (err) => {
            console.error('Error: ', err, err.stack);

            response.statusCode = 500;
            response.body = JSON.stringify({
                'success': false,
                'message': err.message
            });

        });
    }

    return response;
};