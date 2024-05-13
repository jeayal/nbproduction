import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.BASE_URL;
const pathname = new URL(baseUrl).pathname;
const adress = process.env.ADRESS;

export const EmailAdmin = ({ name, phone, message, service, email }) => {
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
                  Bonjour Nicolas,
                </Heading>
                <Heading
                  as='h2'
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textWrap: 'balance',
                  }}
                >
                  Vous avez reçu une nouvelle demande de devis ! 🎉
                </Heading>
                <Hr />
                <Text style={{ ...paragraph, textAlign: 'center' }}>
                  <b>Voici les détails de la demande :</b>
                </Text>
                <Container style={{ ...details, textAlign: 'left' }}>
                  <Text style={paragraph}>
                    <b>Nom du client : </b>
                    {name}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Numéro de téléphone : </b>
                    {phone}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Email du client :</b> {email}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Service demandé :</b> {service}
                  </Text>
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>La demande : </b>
                    {message}
                  </Text>
                </Container>
              </Column>
            </Row>
            <Hr />
            <Row style={{ ...boxInfos, paddingTop: '10', textAlign: 'center' }}>
              <Column style={containerButton}>
                <Button href={`mailto:${email}`} style={button}>
                  Répondre par mail
                </Button>
              </Column>
              <Column style={{ ...containerButton, marginTop: 5 }}>
                <Button href={`tel:${phone}`} style={button}>
                  Appeler le client
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
            © 2024 | NBProduction, {adress} | {pathname}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailAdmin;

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const details = {
  border: '1px solid rgb(190,190,190, 0.7)',
  borderRadius: '10px',
  backgroundColor: 'rgb(190,190,190, 0.25)',
  padding: '20px',
  marginTop: '15px',
  marginBottom: '15px',
};

const paragraph = {
  fontSize: 16,
  // textAlign: 'center',
  textWrap: 'pretty',
};

const logo = {
  padding: '30px 20px',
  width: '75px',
};

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  margin: 'auto',
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
