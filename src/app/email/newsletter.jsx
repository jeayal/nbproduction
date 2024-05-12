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

const baseUrl = process.env.BASE_URL;

export const NewsletterCustomer = () => {
  const sendDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('fr', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(sendDate);

  return (
    <Html>
      <Head />
      <Preview>Votre inscription à ma Newsletter est active !</Preview>
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
                  as='h2'
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Votre inscription pour la newsletter NBProduction a bien été
                  enregistrée ! 🎉
                </Heading>

                <Text style={paragraph}>
                  Je vous remercie de l'intérêt que vous portez à mes services
                  de production vidéo. <br />
                  C'est un réel plaisir de vous compter parmi mes abonnés.{' '}
                  <br />
                </Text>

                <Text style={paragraph}>
                  Vous recevrez périodiquement des contenus exclusifs, des
                  offres promotionnelles et des informations sur les dernières
                  tendances en matière de production vidéo. <br />
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

export default NewsletterCustomer;

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
