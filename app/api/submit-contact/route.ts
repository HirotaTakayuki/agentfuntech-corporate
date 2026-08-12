import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function POST(request: NextRequest) {
  const json = await request.json();
  const { lastname, firstname, company, email, message } = json;
  if (!lastname) {
    return NextResponse.json(
      {
        status: 'error',
        message: '姓を入力してください',
      },
      {
        status: 400,
      },
    );
  }
  if (!firstname) {
    return NextResponse.json(
      {
        status: 'error',
        message: '名を入力してください',
      },
      {
        status: 400,
      },
    );
  }
  if (!company) {
    return NextResponse.json(
      {
        status: 'error',
        message: '会社名を入力してください',
      },
      {
        status: 400,
      },
    );
  }
  if (!email) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'メールアドレスを入力してください',
      },
      {
        status: 400,
      },
    );
  }
  if (!validateEmail(email)) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'メールアドレスの形式が誤っています',
      },
      {
        status: 400,
      },
    );
  }
  if (!message) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'メッセージを入力してください',
      },
      {
        status: 400,
      },
    );
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `【お問い合わせ】${company} 様より`,
      text: [
        `姓: ${lastname}`,
        `名: ${firstname}`,
        `会社名: ${company}`,
        `メールアドレス: ${email}`,
        '',
        'メッセージ:',
        message,
      ].join('\n'),
    });
  } catch {
    return NextResponse.json(
      {
        status: 'error',
        message: '送信に失敗しました。時間をおいて再度お試しください',
      },
      {
        status: 500,
      },
    );
  }

  return NextResponse.json({ status: 'success' });
}
