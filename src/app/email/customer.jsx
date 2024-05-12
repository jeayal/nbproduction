import { Button, Heading, Html, Section, Text } from '@react-email/components';
import * as React from 'react';

export function EmailCustomer(props) {
  const { url, name, phone, email, message, service } = props;

  return (
    <Html>
      <Heading>Bonjour {name},</Heading>
      <Section>
        <Text>Ceci est un texte dans la section.</Text>
      </Section>
      <Section>
        <Text>Service choisi : {service}</Text>
        <Text>Téléphone : {phone}</Text>
        <Text>Email : {email}</Text>
        <Text>Message : {message}</Text>
      </Section>
      <Button href={url}>Découvrir mes services</Button>
    </Html>
  );
}
