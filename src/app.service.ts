import { Injectable } from '@nestjs/common';
import nodemailer from "nodemailer";
@Injectable()
export class AppService {
  constructor() { }
  getHello(): string {
    return 'Hello World!';
  }
  public SendEmail() {
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'chikiet88@gmail.com',
                pass: 'kjymirpouzviikxx'
            }
        });
        var mailOptions = {
        from: 'chikiet88@gmail.com', // List of receivers email address
        to: 'wetdragon1996@gmail.com', // Senders email address
        subject: 'Testing Nest MailerModule', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
            //html: '' //for html code
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                //callback(err);
            } else {
                //callback(null, 'success');
            }
        });
    }

  // public SendEmail() {
  //   this.mailerService.sendMail({
  //       from: 'chikiet88@gmail.com', // List of receivers email address
  //       to: 'wetdragon1996@gmail.com', // Senders email address
  //       subject: 'Testing Nest MailerModule', // Subject line
  //       text: 'welcome', // plaintext body
  //       html: '<b>welcome</b>', // HTML body content
  //     })
  //     .then((success) => {
  //       console.log(success)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }

}

