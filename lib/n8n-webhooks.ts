const N8N_BASE_URL = process.env.N8N_WEBHOOK_URL || 'https://casa.tailc67ac4.ts.net:9443';

interface WebhookPayload {
  event: string;
  [key: string]: unknown;
}

async function sendWebhook(path: string, payload: WebhookPayload): Promise<boolean> {
  try {
    const url = `${N8N_BASE_URL}${path}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`n8n webhook failed: ${response.status} ${response.statusText}`);
      return false;
    }

    console.log(`n8n webhook sent: ${payload.event}`);
    return true;
  } catch (error) {
    console.error('n8n webhook error:', error);
    return false;
  }
}

export async function notifyPaymentCompleted(data: {
  customer: { id: string; name: string; email: string };
  course: { id: string; title: string };
  payment: { stripeId: string; amount: number; currency: string; paidAt: string };
}) {
  return sendWebhook('/webhook/stripe-payment-webhook', {
    event: 'payment.completed',
    ...data,
  });
}

export async function notifyEnrollmentCreated(data: {
  enrollment: { id: string; enrolledAt: string };
  student: { id: string; name: string; email: string };
  course: {
    id: string;
    title: string;
    slug: string;
    instructor: string;
    instructorEmail: string;
    duration: string;
    level: string;
  };
}) {
  return sendWebhook('/webhook/enrollment-webhook', {
    event: 'enrollment.created',
    ...data,
  });
}

export async function notifyCertificateGenerated(data: {
  student: { id: string; name: string; email: string };
  course: { id: string; title: string; duration: string; level: string };
  certificate: { id: string; verificationCode: string; issuedAt: string };
}) {
  return sendWebhook('/webhook/certificate-webhook', {
    event: 'certificate.generated',
    ...data,
  });
}

export async function notifyProgressUpdated(data: {
  student: { id: string; name: string; email: string };
  course: { id: string; title: string; slug: string };
  progress: { percentage: number; modulesCompleted: number; totalModules: number };
}) {
  return sendWebhook('/webhook/progress-webhook', {
    event: 'progress.updated',
    ...data,
  });
}

export async function notifyUserRegistered(data: {
  user: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    registeredAt: string;
  };
  location?: {
    ip?: string;
    country?: string;
    countryCode?: string;
    region?: string;
    city?: string;
    zip?: string;
    lat?: number;
    lon?: number;
    timezone?: string;
    isp?: string;
  };
}) {
  return sendWebhook('/webhook/8bd651b5-c4aa-4cb4-bcd9-4648facd261a', {
    event: 'user_registered',
    ...data,
  });
}

export async function notifyUpsellOpportunity(data: {
  student: { id: string; name: string; email: string };
  course: { id: string; title: string; level: string; software: string };
}) {
  return sendWebhook('/webhook/upsell-webhook', {
    event: 'upsell.opportunity',
    ...data,
  });
}

export async function notifySurveyRequest(data: {
  student: { id: string; name: string; email: string };
  course: { id: string; title: string };
  certificate: { id: string };
}) {
  return sendWebhook('/webhook/survey-webhook', {
    event: 'survey.request',
    ...data,
  });
}

export async function notifySharePointSync(data: {
  customer: { id: string; name: string; email: string };
  course: { id: string; title: string };
  payment: { stripeId: string; amount: number; currency: string; paidAt: string };
  enrollment: { id: string; enrolledAt: string };
  student: { id: string; name: string; email: string };
}) {
  return sendWebhook('/webhook/sharepoint-sync-webhook', {
    event: 'sharepoint.sync',
    ...data,
  });
}

export async function notifyPaymentFailed(data: {
  customer: { id: string; name: string; email: string };
  course: { id: string; title: string };
  payment: { stripeId: string; amount: number; currency: string; errorMessage: string; failedAt: string };
}) {
  return sendWebhook('/webhook/payment-failed-webhook', {
    event: 'payment.failed',
    ...data,
  });
}

export async function notifyNewReview(data: {
  review: {
    rating: number;
    comment: string;
    courseName: string;
    courseSlug: string;
    studentName: string;
    studentEmail: string;
    createdAt: string;
  };
}) {
  return sendWebhook('/webhook/review-webhook', {
    event: 'review.created',
    ...data,
  });
}

export async function notifyNewComment(data: {
  comment: {
    type: 'question' | 'comment';
    content: string;
    courseName: string;
    courseSlug: string;
    lessonTitle: string;
    lessonSlug: string;
    studentName: string;
    instructorEmail: string;
    createdAt: string;
  };
}) {
  return sendWebhook('/webhook/comment-webhook', {
    event: 'comment.created',
    ...data,
  });
}

export async function notifyNewInstructor(data: {
  instructor: {
    id: string;
    name: string;
    email: string;
    specialty: string;
    registeredAt: string;
  };
}) {
  return sendWebhook('/webhook/instructor-webhook', {
    event: 'instructor.registered',
    ...data,
  });
}
