export const ecgList = [
{
  name: 'Sinusrytmi',
  pages: [
    { description: 'EKG perustuu klassiseen elektrofysiologiaan, jonka kehitti Willem Einthoven 1924. \n\n Sydämen normaalia rytmiä kutsutaan sinusrytmiksi. Normaali sydämen rytmi käynnistyy sinussolmukkeessa, josta sähköinen aktivaatio leviää eteisiin. Eteisten aktivoituessa EKG:ssä nähdään eteisaktivaatioita kuvaava P-aalto. Sinussolmuke on sydämen varsinainen tahdistaja, ja se sijaitsee oikean eteisen yläosassa takaseinämässä yläonttolaskimon suun läheisyydessä. Kun sinussolmuke toimii normaalisti ja rytmi käynnistyy sieltä, puhutaan normaalirytmistä eli sinusrytmistä. Eteisten sähköistä aktivoitumista kutsutaan depolarisaatioksi, mikä käynnistää eteisten lihassolujen supistumisen. Tämän seurauksena molemmat eteiset supistuvat ja täyttävät kammiot ennen kammioiden supistumista.' },
    { heartRate: 76,
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
    { description: '' },
    { heartRate: 42,
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
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Sinusrytmi + SVES',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Sinusrytmi + VES',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Kupletti',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Tripletti',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'R-On-T',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Bigemenia',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Trigemenia',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Flimmeri',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Flutteri',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'SVT',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'VT',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'VF',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'TDP',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'ASY',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Agonaalinen rytmi',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'PEA',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Junktionaalinen rytmi',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Eteistahdistus',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Kammiotahdistus',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Eteis-kammiotahdistus',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'I asteen AV-katkos',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'II asteen AV-katkos Mobitz 1',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'II asteen AV-katkos Mobitz 2',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'III asteen AV-katkos',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'RBBB',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'LBBB',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Sinus + ST-tason nousu',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Sinus + ST-tason lasku',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'T-inversio',
  pages: [
    { description: '', },
    { heartRate: 60,
    points: [] }
  ]
},
];