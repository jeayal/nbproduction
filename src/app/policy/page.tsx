import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Politique de confidantialité - NBProduction',
  description: 'Politique de confidantialité du site NBProduction',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Policy() {
  return (
    <>
      <div className='layout my-36 flex flex-col'>
        <div className='mb-10 flex items-center rounded-xl bg-neutral-300 p-16 dark:bg-neutral-800'>
          <h1 className='md:text-5xl'>Politique de confidantialité</h1>
        </div>
        <div>
          <p>
            Le site web NBProduction est détenu par NBProduction, qui est un
            contrôleur de données de vos données personnelles.
          </p>
          <br />
          <p>
            Nous avons adopté cette politique de confidentialité, qui détermine
            la manière dont nous traitons les informations collectées par
            NBProduction, qui fournit également les raisons pour lesquelles nous
            devons collecter certaines données personnelles vous concernant. Par
            conséquent, vous devez lire cette politique de confidentialité avant
            d'utiliser le site web de NBProduction.
          </p>
          <br />
          <p>
            Nous prenons soin de vos données personnelles et nous nous engageons
            à en garantir la confidentialité et la sécurité.
          </p>
          <br />
          <div className='space-y-4'>
            <span className='text-3xl font-bold'>
              Les informations personnelles que nous collectons :
            </span>
            <p>
              Lorsque vous visitez le NBProduction, nous recueillons
              automatiquement certaines informations sur votre appareil,
              notamment des informations sur votre navigateur web, votre adresse
              IP, votre fuseau horaire et certains des cookies installés sur
              votre appareil. En outre, lorsque vous naviguez sur le site, nous
              recueillons des informations sur les pages web ou les produits
              individuels que vous consultez, sur les sites web ou les termes de
              recherche qui vous ont renvoyé au site et sur la manière dont vous
              interagissez avec le site.
            </p>
            <p>
              Nous désignons ces informations collectées automatiquement par le
              terme "informations sur les appareils". En outre, nous pourrions
              collecter les données personnelles que vous nous fournissez (y
              compris, mais sans s'y limiter, le nom, le prénom, l'adresse, les
              informations de paiement, etc.) lors de l'inscription afin de
              pouvoir exécuter le contrat.
            </p>
          </div>
          <div className='my-4 space-y-4'>
            <span className='text-3xl font-bold'>
              Pourquoi traitons-nous vos données ?
            </span>
            <p>
              Notre priorité absolue est la sécurité des données des clients et,
              à ce titre, nous ne pouvons traiter que des données minimales sur
              les utilisateurs, uniquement dans la mesure où cela est absolument
              nécessaire pour maintenir le site web. Les informations collectées
              automatiquement sont utilisées uniquement pour identifier les cas
              potentiels d'abus et établir des informations statistiques
              concernant l'utilisation du site web. Ces informations
              statistiques ne sont pas autrement agrégées de manière à
              identifier un utilisateur particulier du système.
            </p>
            <p>
              {' '}
              Vous pouvez visiter le site web sans nous dire qui vous êtes ni
              révéler d'informations, par lesquelles quelqu'un pourrait vous
              identifier comme un individu spécifique et identifiable.
              Toutefois, si vous souhaitez utiliser certaines fonctionnalités du
              site web, ou si vous souhaitez recevoir notre lettre d'information
              ou fournir d'autres détails en remplissant un formulaire, vous
              pouvez nous fournir des données personnelles, telles que votre
              e-mail, votre prénom, votre nom, votre ville de résidence, votre
              organisation, votre numéro de téléphone.{' '}
            </p>
            <p>
              Vous pouvez choisir de ne pas nous fournir vos données
              personnelles, mais il se peut alors que vous ne puissiez pas
              profiter de certaines fonctionnalités du site web. Par exemple,
              vous ne pourrez pas recevoir notre bulletin d'information ou nous
              contacter directement à partir du site web. Les utilisateurs qui
              ne savent pas quelles informations sont obligatoires sont invités
              à nous contacter via support@blanc-nicolas.com. Vos droits : Si
              vous êtes un résident européen, vous disposez des droits suivants
              liés à vos données personnelles :
            </p>
            <div className='my-10 w-1/2 rounded-xl bg-neutral-800 p-10'>
              <ul className='w-full space-y-2'>
                <li> Le droit d'être informé.</li>
                <li>Le droit d'accès.</li>
                <li>Le droit de rectification.</li>
                <li>Le droit à l'effacement.</li>
                <li>Le droit de restreindre le traitement.</li>
                <li>Le droit à la portabilité des données.</li>
                <li>Le droit d'opposition.</li>
                <li>
                  Les droits relatifs à la prise de décision automatisée et au
                  profilage.
                </li>
              </ul>
            </div>
            <br />
            Si vous souhaitez exercer ce droit, veuillez nous contacter via les
            coordonnées ci-dessous.
            <br />
            <p>
              En outre, si vous êtes un résident européen, nous notons que nous
              traitons vos informations afin d'exécuter les contrats que nous
              pourrions avoir avec vous (par exemple, si vous passez une
              commande par le biais du site), ou autrement pour poursuivre nos
              intérêts commerciaux légitimes énumérés ci-dessus. En outre,
              veuillez noter que vos informations pourraient être transférées en
              dehors de l'Europe, y compris au Canada et aux États-Unis.
            </p>{' '}
            <br />
            <span className='text-3xl font-bold'>
              Liens vers d'autres sites web :
            </span>
            <p>
              Notre site web peut contenir des liens vers d'autres sites web qui
              ne sont pas détenus ou contrôlés par nous. Sachez que nous ne
              sommes pas responsables de ces autres sites web ou des pratiques
              de confidentialité des tiers.
            </p>
            <p>
              {' '}
              Nous vous encourageons à être attentif lorsque vous quittez notre
              site web et à lire les déclarations de confidentialité de chaque
              site web susceptible de collecter des informations personnelles.
            </p>{' '}
            <br />
            <span className='text-3xl font-bold'>
              Sécurité de l'information :
            </span>
            <p>
              Nous sécurisons les informations que vous fournissez sur des
              serveurs informatiques dans un environnement contrôlé et sécurisé,
              protégé contre tout accès, utilisation ou divulgation non
              autorisés. Nous conservons des garanties administratives,
              techniques et physiques raisonnables pour nous protéger contre
              tout accès, utilisation, modification et divulgation non autorisés
              des données personnelles sous son contrôle et sa garde. Toutefois,
              aucune transmission de données sur Internet ou sur un réseau sans
              fil ne peut être garantie.
            </p>{' '}
            <br />
            <span className='text-3xl font-bold'>Divulgation légale :</span>
            <p>
              Nous divulguerons toute information que nous collectons, utilisons
              ou recevons si la loi l'exige ou l'autorise, par exemple pour nous
              conformer à une citation à comparaître ou à une procédure
              judiciaire similaire, et lorsque nous pensons de bonne foi que la
              divulgation est nécessaire pour protéger nos droits, votre
              sécurité ou celle d'autrui, enquêter sur une fraude ou répondre à
              une demande du gouvernement.
            </p>{' '}
            <br />
            <span className='text-3xl font-bold'>
              Informations de contact :
            </span>
            <p>
              Si vous souhaitez nous contacter pour comprendre davantage la
              présente politique ou si vous souhaitez nous contacter concernant
              toute question relative aux droits individuels et à vos
              informations personnelles, vous pouvez envoyer un courriel à
              support@blanc-nicolas.com.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
