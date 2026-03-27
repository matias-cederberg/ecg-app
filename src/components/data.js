export const ecgList = [
{
  name: 'Sinusrytmi',
  pages: [
    { description: 'EKG perustuu klassiseen elektrofysiologiaan, jonka kehitti Willem Einthoven 1924. \n\n Sydämen normaalia rytmiä kutsutaan sinusrytmiksi. Normaali sydämen rytmi käynnistyy sinussolmukkeessa, josta sähköinen aktivaatio leviää eteisiin. Eteisten aktivoituessa EKG:ssä nähdään eteisaktivaatioita kuvaava P-aalto. Sinussolmuke on sydämen varsinainen tahdistaja, ja se sijaitsee oikean eteisen yläosassa takaseinämässä yläonttolaskimon suun läheisyydessä. Kun sinussolmuke toimii normaalisti ja rytmi käynnistyy sieltä, puhutaan normaalirytmistä eli sinusrytmistä. Eteisten sähköistä aktivoitumista kutsutaan depolarisaatioksi, mikä käynnistää eteisten lihassolujen supistumisen. Tämän seurauksena molemmat eteiset supistuvat ja täyttävät kammiot ennen kammioiden supistumista.' },
    { heartRate: 76,
      image: '/ecg-app/graphs/sinusrytmi.png',
      points: [
        // P
        { elevation: 0.00, amplitude: 0.07, duration: 0.13 },
        // P-Q
        { elevation: 0.00, amplitude: 0.00, duration: 0.05 },
        // Q
        { elevation: -0.10, amplitude: 0.00, duration: 0.04 },
        // R
        { elevation: 0.90, amplitude: 0.00, duration: 0.03 },
        // S
        { elevation: 0.00, amplitude: 0.00, duration: 0.03 },
        // S-T
        { elevation: 0.00, amplitude: 0.00, duration: 0.15 },
        // T
        { elevation: 0.00, amplitude: 0.16, duration: 0.24 },
      ]
    }
  ]
},
{
  name: 'Sinusbradykardia',
  pages: [
    { description: 'Sinusbradykardia on sinusrytmi, jossa syketaajuus on alle 60 lyöntiä minuutissa. Eteisaktivaatio tapahtuu kuten normaalissa sinusrytmissä. P-aalto on normaalin muotoinen, edeltää jokaista QRS-kompleksia ja PQ-aika on vähintään 120 ms. Sinusbradykardia on tavallista unen aikana sekä henkilöillä, joilla vagaalinen tonus on suuri, kuten urheilijoilla ja terveillä nuorilla aikuisilla.' },
    { heartRate: 42,
      image: '/ecg-app/graphs/sinusbradykardia.png',
      points: [
        // P
        { elevation: 0.00, amplitude: 0.10, duration: 0.08 },
        // P-Q
        { elevation: 0.00, amplitude: 0.00, duration: 0.04 },
        // Q
        { elevation: -0.10, amplitude: 0.00, duration: 0.02 },
        // R
        { elevation: 0.90, amplitude: 0.00, duration: 0.015 },
        // S
        { elevation: 0.00, amplitude: 0.00, duration: 0.015 },
        // S-T
        { elevation: 0.00, amplitude: 0.00, duration: 0.08 },
        // T
        { elevation: 0.00, amplitude: 0.16, duration: 0.12 },
      ]
    }
  ]
},
{
  name: 'Sinustakykardia',
  pages: [
    { description: 'Sinustakykardia on sinusrytmi, jossa syketiheys on yli 100 kertaa minuutissa. Eteisaktivaatio tapahtuu kuten sinusrytmissä ja P-aallot ovat normaalit, myös PP-välit ovat yleensä säännölliset. P-aaltoja seuraa QRS-kompleksi ja P-aaltojen morfologia on normaali.P-aallon korkeus voi myös kasvaa sekä PR-väli voi lyhentyä  syketiheyden kasvaessa. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/sinustakykardia.png',
    points: [] }
  ]
},
{
  name: 'Sinusrytmi + SVES',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/sinusPlusSves.png',
    points: [] }
  ]
},
{
  name: 'Sinusrytmi + VES',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/sinusPlusVes.png',
    points: [] }
  ]
},
{
  name: 'Kupletti',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/kupletti.png',
    points: [] }
  ]
},
{
  name: 'Tripletti',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/tripletti.png',
    points: [] }
  ]
},
{
  name: 'R-On-T',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Bigemenia',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Trigemenia',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Flimmeri',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/flimmeri.png',
    points: [] }
  ]
},
{
  name: 'Flutteri',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/flutteri.png',
    points: [] }
  ]
},
{
  name: 'SVT',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/svt.png',
    points: [] }
  ]
},
{
  name: 'VT',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/vt.png',
    points: [] }
  ]
},
{
  name: 'VF',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/vf.png',
    points: [] }
  ]
},
{
  name: 'TDP',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/tdp.png',
    points: [] }
  ]
},
{
  name: 'ASY',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/asy.png',
    points: [] }
  ]
},
{
  name: 'Agonaalinen rytmi',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/agonaalinen.png',
    points: [] }
  ]
},
{
  name: 'PEA',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/pea.png',
    points: [] }
  ]
},
{
  name: 'Junktionaalinen rytmi',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/junktionaalinen.png',
    points: [] }
  ]
},
{
  name: 'Eteistahdistus',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
      image: '/ecg-app/graphs/eteistahdistus.png',
    points: [] }
  ]
},
{
  name: 'Kammiotahdistus',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Eteis-kammiotahdistus',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'I asteen AV-katkos',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'II asteen AV-katkos Mobitz 1',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'II asteen AV-katkos Mobitz 2',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'III asteen AV-katkos',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'RBBB',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'LBBB',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Sinus + ST-tason nousu',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Sinus + ST-tason lasku',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'T-inversio',
  pages: [
    { description: '[Ei kuvausta]', },
    { heartRate: 60,
    points: [] }
  ]
},
];