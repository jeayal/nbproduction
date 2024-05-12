import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://nbproduction.vercel.app';

export const EmailCustomer = ({ name, phone, message, service }) => {
  const sendDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('fr', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(sendDate);

  return (
    <Html>
      <Head />
      <Preview>Votre demande de devis est prise en compte !</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img
              src={`${baseUrl}/images/logo-nbp.png`}
              style={{ width: '75px' }}
            />
          </Section>

          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src={`${baseUrl}/images/video-01.webp`}
              />
            </Row>

            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Bonjour {name},
                </Heading>
                <Heading
                  as='h2'
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Votre demande de devis a bien été reçue ! 🎉
                </Heading>

                <Text style={paragraph}>
                  <b>Votre nom : </b>
                  {name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Votre numéro de téléphone : </b>
                  {phone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Service demandé :</b> {service}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Votre message : </b>
                  {message}
                </Text>

                <Text style={paragraph}>
                  J'ai bien reçu votre demande de devis. Je vous recontacterai
                  dans les plus brefs délais. <br />
                  Ceci est un message automatique. Merci de ne pas y répondre.
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0', textAlign: 'center' }}>
              <Column style={containerButton} colSpan={2}>
                <Button href='http://nbproductions.vercel.app' style={button}>
                  Découvrir mes services
                </Button>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Text style={{ textAlign: 'center', fontSize: 12 }}>
                Demande envoyée le {formattedDate}.
              </Text>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2024 | NBProduction, 10 Rue Masséna, Nice, BP 06000, France |
            www.nbproduction.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailCustomer;

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
  textAlign: 'center',
  textBalance: 'pretty',
};

const logo = {
  padding: '30px 20px',
  width: '75px',
};

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const button = {
  backgroundColor: '#3b82f6',
  borderRadius: 10,
  color: '#FFF',
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '12px 30px',
  textAlign: 'center',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const image = {
  maxWidth: '100%',
  aspectRatio: '16/9',
};

const boxInfos = {
  padding: '20px',
};
