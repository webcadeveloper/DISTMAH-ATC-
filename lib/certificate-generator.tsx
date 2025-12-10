import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from '@react-pdf/renderer';
import QRCode from 'qrcode';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    padding: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  logoContainer: {
    width: 200,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  logoSubtext: {
    fontSize: 10,
    color: '#333333',
  },
  folioContainer: {
    textAlign: 'right',
  },
  folioLabel: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 2,
  },
  folio: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003366',
  },
  certificateTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 40,
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  presentText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  studentName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 30,
    borderBottom: '2px solid #003366',
    paddingBottom: 10,
  },
  bodyText: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    lineHeight: 1.6,
    marginBottom: 10,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginVertical: 15,
  },
  courseDetails: {
    fontSize: 11,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 40,
    paddingTop: 20,
    borderTop: '1px solid #EEEEEE',
  },
  signatureSection: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signatureLine: {
    width: '100%',
    borderTop: '1px solid #333333',
    marginBottom: 8,
  },
  signatureName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 2,
  },
  signatureTitle: {
    fontSize: 9,
    color: '#666666',
  },
  qrSection: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  qrCode: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  qrText: {
    fontSize: 7,
    color: '#666666',
    textAlign: 'center',
  },
  verificationUrl: {
    fontSize: 7,
    color: '#003366',
    textAlign: 'center',
    marginTop: 4,
  },
  dateSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  dateLabel: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 4,
  },
  dateValue: {
    fontSize: 11,
    color: '#000000',
  },
});

interface CertificatePDFProps {
  studentName: string;
  courseName: string;
  courseLevel: string;
  courseDuration: number;
  completionDate: Date;
  folio: string;
  verificationUrl: string;
  qrCodeDataUrl: string;
}

export const CertificatePDF: React.FC<CertificatePDFProps> = ({
  studentName,
  courseName,
  courseLevel,
  courseDuration,
  completionDate,
  folio,
  verificationUrl,
  qrCodeDataUrl,
}) => {
  const formattedDate = new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(completionDate);

  return (
    <Document>
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>Universidad Autodesk</Text>
              <Text style={styles.logoSubtext}>DISTMAH - Authorized Training Center</Text>
            </View>
            <View style={styles.folioContainer}>
              <Text style={styles.folioLabel}>Folio</Text>
              <Text style={styles.folio}>{folio}</Text>
            </View>
          </View>

          <View style={styles.mainContent}>
            <Text style={styles.certificateTitle}>Certificado</Text>
            <Text style={styles.subtitle}>
              La Universidad Autodesk certifica que
            </Text>

            <Text style={styles.studentName}>{studentName}</Text>

            <Text style={styles.bodyText}>
              Ha completado exitosamente el curso
            </Text>

            <Text style={styles.courseName}>{courseName}</Text>

            <Text style={styles.courseDetails}>
              Nivel: {courseLevel} | Duración: {courseDuration} horas académicas
            </Text>

            <Text style={styles.bodyText}>
              Cumpliendo satisfactoriamente con todos los objetivos de aprendizaje,
            </Text>
            <Text style={styles.bodyText}>
              ejercicios prácticos y evaluaciones establecidas en el programa académico.
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.signatureSection}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureName}>Director Académico</Text>
              <Text style={styles.signatureTitle}>Universidad Autodesk</Text>
            </View>

            <View style={styles.qrSection}>
              <Image src={qrCodeDataUrl} style={styles.qrCode} />
              <Text style={styles.qrText}>Escanea para verificar</Text>
              <Text style={styles.verificationUrl}>
                {verificationUrl.replace('https://', '')}
              </Text>
            </View>

            <View style={styles.dateSection}>
              <Text style={styles.dateLabel}>Fecha de emisión</Text>
              <Text style={styles.dateValue}>{formattedDate}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export async function generateCertificateQRCode(
  verificationUrl: string
): Promise<string> {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(verificationUrl, {
      width: 300,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw new Error('Failed to generate QR code');
  }
}

export interface GenerateCertificatePDFParams {
  studentName: string;
  courseName: string;
  courseLevel: string;
  courseDuration: number;
  completionDate: Date;
  folio: string;
  verificationUrl: string;
}

export async function generateCertificatePDFDocument(
  params: GenerateCertificatePDFParams
) {
  const qrCodeDataUrl = await generateCertificateQRCode(params.verificationUrl);

  return (
    <CertificatePDF
      {...params}
      qrCodeDataUrl={qrCodeDataUrl}
    />
  );
}
