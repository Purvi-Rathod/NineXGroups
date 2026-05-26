import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, subject, message, website } = await req.json();
        const subjectLine = subject || 'Contact Form';
        const hasExtra = message || website;

        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contact@ninexfold.com',
                pass: 'Rest@123Rest@123',
            },
        });

        // Email to Admin
        const adminMailOptions = {
            from: 'contact@ninexfold.com',
            to: 'birlapranjal460@gmail.com',
            subject: `New Contact Form: ${subjectLine}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject/Source: ${subjectLine}
${website ? `Website: ${website}` : ''}
${message ? `Message:\n${message}` : ''}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject/Source:</strong> ${subjectLine}</p>
        ${website ? `<p><strong>Website:</strong> ${website}</p>` : ''}
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>` : ''}
      `,
        };

        // Email to User
        const userMailOptions = {
            from: 'contact@ninexfold.com',
            to: email,
            subject: 'We received your message - NineXfold',
            text: `Hi ${name},\n\nThank you for reaching out to us. We have received your message${hasExtra ? '' : ` regarding "${subjectLine}"`} and will get back to you shortly.\n\nBest regards,\nNineXfold Team`,
            html: `
        <h3>Hi ${name},</h3>
        <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>NineXfold Team</strong></p>
      `,
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions),
        ]);

        return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
