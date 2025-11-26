import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  page: {
    padding: 60,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  border: {
    borderWidth: 4,
    borderColor: '#000000',
    borderStyle: 'solid',
    padding: 40,
    height: '100%',
  },
  header: {
    textAlign: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 36,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    marginBottom: 10,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
  divider: {
    height: 2,
    backgroundColor: '#000000',
    marginVertical: 20,
  },
  content: {
    marginTop: 40,
    marginBottom: 40,
  },
  certifyText: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 30,
  },
  studentName: {
    fontSize: 32,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    borderBottomStyle: 'solid',
    paddingBottom: 10,
  },
  completionText: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 15,
  },
  courseName: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 40,
  },
  footer: {
    marginTop: 'auto',
  },
  signatureSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  signatureBlock: {
    width: '45%',
    textAlign: 'center',
  },
  signatureLine: {
    borderTopWidth: 1,
    borderTopColor: '#000000',
    borderTopStyle: 'solid',
    marginBottom: 8,
    paddingTop: 8,
  },
  signatureName: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
  },
  signatureTitle: {
    fontSize: 10,
    color: '#666666',
  },
  verificationSection: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
  },
  verificationText: {
    fontSize: 9,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 5,
  },
  certificateNumber: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    textAlign: 'center',
  },
  qrCode: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 15,
  },
  dateText: {
    fontSize: 11,
    color: '#333333',
    textAlign: 'center',
    marginTop: 20,
  },
});

interface CertificatePDFProps {
  certificateNumber: string;
  studentName: string;
  courseName: string;
  instructorName: string;
  completionDate: Date;
  verificationCode: string;
  qrCodeDataUrl?: string;
}

export const CertificatePDF = ({
  certificateNumber,
  studentName,
  courseName,
  instructorName,
  completionDate,
  verificationCode,
  qrCodeDataUrl,
}: CertificatePDFProps) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.border}>
        <View style={styles.header}>
          <Text style={styles.title}>CERTIFICADO</Text>
          <Text style={styles.subtitle}>DISTMAH - Authorized Training Center</Text>
          <Text style={styles.subtitle}>Autodesk Official Training</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.content}>
          <Text style={styles.certifyText}>
            Este certificado se otorga a
          </Text>

          <Text style={styles.studentName}>{studentName}</Text>

          <Text style={styles.completionText}>
            Por haber completado exitosamente el curso
          </Text>

          <Text style={styles.courseName}>{courseName}</Text>

          <Text style={styles.dateText}>
            Fecha de completación: {format(new Date(completionDate), 'dd/MM/yyyy')}
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.signatureSection}>
            <View style={styles.signatureBlock}>
              <View style={styles.signatureLine}>
                <Text style={styles.signatureName}>{instructorName}</Text>
                <Text style={styles.signatureTitle}>Instructor Certificado</Text>
              </View>
            </View>

            <View style={styles.signatureBlock}>
              <View style={styles.signatureLine}>
                <Text style={styles.signatureName}>DISTMAH ATC</Text>
                <Text style={styles.signatureTitle}>Authorized Training Center</Text>
              </View>
            </View>
          </View>

          <View style={styles.verificationSection}>
            <Text style={styles.verificationText}>
              Certificado Número: <Text style={styles.certificateNumber}>{certificateNumber}</Text>
            </Text>
            <Text style={styles.verificationText}>
              Código de Verificación: {verificationCode.slice(0, 8).toUpperCase()}
            </Text>
            <Text style={styles.verificationText}>
              Verifica este certificado en: distmah-atc.com/verificar/{verificationCode}
            </Text>
            {qrCodeDataUrl && (
              <Image src={qrCodeDataUrl} style={styles.qrCode} alt="" />
            )}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
