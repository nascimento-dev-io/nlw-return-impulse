import nodemailer from "nodemailer";
import { MailService, SendMailDTO } from "../mail-service";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eb71fcde10ac41",
    pass: "ba39c9177687b7",
  },
});

export class NodemailerMailService implements MailService {
  async sendMail({ body, subject }: SendMailDTO) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Jorge Nascimento <nascimento.dev.io@gmail.com>",
      subject,
      html: body,
    });
  }
}
