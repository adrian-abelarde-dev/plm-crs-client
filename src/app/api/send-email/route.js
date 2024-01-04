// ./src/app/api/send-email/route.js
import sendMail from '@/services/sendMail';

/**
 * @param {import('next/server').NextRequest} request
 * @returns Describe your return type here
 */
export async function POST(request) {
  const { to, subject, text } = await request.json();

  const response = await sendMail({
    subject,
    text,
    to,
  });

  if (!response) {
    return new Response('Something went wrong!', { status: 503 });
  }

  return Response.json({ message: 'Email sent!' });
}
