import { Enrollment, EnrollmentStatus } from '@prisma/client';

export interface EnrollmentWithCourse extends Enrollment {
  course: {
    id: string;
    slug: string;
    title: string;
    subtitle: string | null;
    description: string;
    category: string;
    level: string;
    duration: number;
    sessions: number;
    image: string | null;
    thumbnail: string | null;
    videoIntro: string | null;
    rating: number | null;
    reviewsCount: number;
    instructor: {
      id: string;
      name: string;
      email: string;
      avatar: string | null;
    };
    modules: {
      id: string;
      number: number;
      title: string;
      description: string | null;
      duration: number;
      order: number;
      lessons: {
        id: string;
        number: number;
        title: string;
        duration: number;
        type: string;
        published: boolean;
      }[];
    }[];
  };
}

export interface EnrollmentVerificationResult {
  hasAccess: boolean;
  reason?: string;
  enrollment?: {
    id: string;
    status: EnrollmentStatus;
    enrolledAt?: Date;
    expiresAt?: Date | null;
  };
}

export interface CreateEnrollmentParams {
  userId: string;
  courseId: string;
  paymentMethod: string;
  paymentId: string;
  amount: number;
  currency: string;
}
