import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, email e mensagem' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Salvar no banco de dados
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        message,
        status: 'new',
      },
    });

    // TODO: Aqui você pode adicionar envio de email
    // Opções:
    // 1. Usar Resend (recomendado): https://resend.com
    // 2. Usar SendGrid
    // 3. Usar Nodemailer com SMTP
    // 4. Usar um serviço de terceiros como Formspree, EmailJS, etc.

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso!',
        id: submission.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar formulário de contato:', error);
    return NextResponse.json(
      { error: 'Erro ao processar sua mensagem. Por favor, tente novamente.' },
      { status: 500 }
    );
  }
}

