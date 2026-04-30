export const ecgList = [
{
  name: 'Sinusrytmi',
  pages: [
    { description: 'EKG perustuu klassiseen elektrofysiologiaan, jonka kehitti Willem Einthoven 1924. \n\n Sydämen normaalia rytmiä kutsutaan sinusrytmiksi. Normaali sydämen rytmi käynnistyy sinussolmukkeessa, josta sähköinen aktivaatio leviää eteisiin. Eteisten aktivoituessa EKG:ssä nähdään eteisaktivaatioita kuvaava P-aalto. Sinussolmuke on sydämen varsinainen tahdistaja, ja se sijaitsee oikean eteisen yläosassa takaseinämässä yläonttolaskimon suun läheisyydessä. Kun sinussolmuke toimii normaalisti ja rytmi käynnistyy sieltä, puhutaan normaalirytmistä eli sinusrytmistä. Eteisten sähköistä aktivoitumista kutsutaan depolarisaatioksi, mikä käynnistää eteisten lihassolujen supistumisen. Tämän seurauksena molemmat eteiset supistuvat ja täyttävät kammiot ennen kammioiden supistumista.' },
    { description: 'P-aallon kesto ilmoittaa ajan, mikä kuluu eteisten depolarisaatioon. Molempien eteisten depolarisoitumisen jälkeen, EKG-käyrä palaa perusviivalle. Eteisten jälkeen aktivoituu johtoratajärjestelmä: eteis-kammiosolmuke, Hisin kimppu, johtoradat sekä Purkinjen säikeet. Näiden synnyttämä sähkövirta ei näy kehon pinnalta rekisteröidyssä EKG:ssä, sillä niiden massa on hyvin pieni. QRS-kompleksi on seuraavana vuorossa joka syntyy kammioiden depolarisaatiosta. Kompleksia seuraa isoelektrinen ST-väli ja T-aalto, joka kuvaa kammioiden repolarisaatiota. Koko tätä sykliä kutsutaan sinusrytmiksi.'},
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
    { description: 'Sinustakykardia on sinusrytmi, jossa syketiheys on yli 100 kertaa minuutissa. Eteisaktivaatio tapahtuu kuten sinusrytmissä ja P-aallot ovat normaalit, myös PP-välit ovat yleensä säännölliset. P-aaltoja seuraa QRS-kompleksi ja P-aaltojen morfologia on normaali. P-aallon korkeus voi myös kasvaa sekä PR-väli voi lyhentyä  syketiheyden kasvaessa.'},
    { description: 'Eteislisälyönnin aiheuttama QRS-kompleksi on yleensä normaalin sinusrytmin QRS-kompleksin kaltainen, mutta voi olla myös oikean tai vasemman haarakatkoksen muotoinen distaalisen johtoradan toiminnallisen katkoksen takia. Lisälyöntejä voi olla täysin terveillä sekä sydänsairailla ihmisillä. Eteislisälyönnit eivät ole käytännössä koskaan vaarallisia. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/sinustakykardia.png',
    points: [] }
  ]
},
{
  name: 'Sinusrytmi + SVES',
  pages: [
    { description: 'Eteislisälyönti eli Supraventrikulaarinen ExtraSystole (SVES), englanniksi premature atrial contraction (PAC) ) synnyttää impulssin, jonka varhaisin todettavissa oleva aktivaatio kohdistuu sydämen oikeaan tai vasempaan eteiseen. Eteislisälyönti aktivoi ensin molemmat eteiset ja sen jälkeen eteis-kammiosolmukkeen sekä lopulta sydämen molemmat kammiot. Aktivaation johtuminen eteisistä kammioihin edellyttää, että eteis-kammiosolmuke ja distaalinen johtorata eivät ole refraktaarisia eli kykenevät depolarisoitumaan. Johtuminen voi olla normaalia, hidastunutta tai sitten ei eteislisälyönti johdu ollenkaan kammioihin.' },
    { heartRate: 60,
      image: '/ecg-app/graphs/sinusPlusSves.png',
    points: [] }
  ]
},
{
  name: 'Sinusrytmi + VES',
  pages: [
    { description: 'Kammiolisälyönneillä (VES) tarkoitetaan leveää QRS-kompleksia, joka on yli 120ms. On ennenaikainen, yleensä normaalia pidempikestoinen, muodoltaan terävä tai poikkeava ja jota ei edellä ennenaikainen P-aalto. Yhdenmuotoinen kammiolisälyönti eli unifokaalinen kammiolisälyönti tulee aina samasta paikasta kammiota. Monimuotoinen eli multifokaalinen, sekä ennenaikaisuudeltaan vaihteleva kammiolisälyöntisyys syntyy todennäköisesti useassa eri paikkaa sydämessä.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/sinusPlusVes.png',
    points: [] }
  ]
},
{
  name: 'Kupletti',
  pages: [
    { description: 'Kupletilla (couplet) tai lisälyöntipari tarkoitetaan tilaa, jossa kammiolisälyönnit esiintyvät pareittain.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/kupletti.png',
    points: [] }
  ]
},
{
  name: 'Tripletti',
  pages: [
    { description: 'Tripletillä taas tarkoitetaan kolmen lisälyönnin muodostamaa sarjaa.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/tripletti.png',
    points: [] }
  ]
},
{
  name: 'R-On-T',
  pages: [
    { description: 'Hyvin ennenaikaiset kammiolisälyönnit osuvat jo T-aallon päälle ja näitä kutsutaan ”R-On-T”-lisälyönneiksi. Kammiolisälyöntien varhaisuudella katsotaankin olevan yhteyttä niiden vaarallisuuteen.  Näitä pidetään lisälyönneistä vaarallisimpina, sillä ne saattavat joissain tilanteissa, kuten voimakkaassa iskemiassa käynnistää kammiotakykardian = VT tai kammiovärinän = VF.  Kaikki tällaiset lisälyönnit eivät ole vaarallisia varsinkaan terveessä sydämessä. ', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Bigemenia',
  pages: [
    { description: 'Bigemenialla tarkoitetaan tilaa, jossa jokaista normaalia sinussolmukkeen tahdittamaa kammioaktivaatiota seuraa kammiolisälyönti. Tällöin joka toinen kammiolyönti on lisälyönti.', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Trigemenia',
  pages: [
    { description: 'Trigemenialla tarkoitetaan rytmiä, jossa joka kolmas kammiolyönti on lisälyönti.', },
    { heartRate: 60,
    points: [] }
  ]
},
{
  name: 'Flimmeri',
  pages: [
    { description: 'Eteisvärinä (Flimmeri/FA) on yleisin rytmihäiriö yksittäisten lisälyöntien jälkeen. Eteisvärinä aiheutuu kammioiden nopeasta sekä epäsäännöllisestä supistelusta. Eteisvärinä on yleensä helposti tunnistettavissa EKG:ssä ja perusviiva on epätasainen eikä eteisaaltoja erotu. QRS-kompleksi on yleensä kapea ja niiden väli on epäsäännöllinen. QRS-kompleksin taajuus on yleensä nopeahko, noin 80 – 120 kertaa minuutissa. ', },
    { description: 'Eteisvärinässä eteisten toiminta on nopeaa ja järjestymätöntä, mikä on sille tyypillistä. Eteiset supistelevat epätahdissa jopa 600 kertaa minuutissa sähköisten aaltojen kulkiessa kaaosmaisesti eteisissä. Eteisvärinät voidaan jakaa kolmeen eri tyyppiin; kohtauksittaiseen (paroksysmaalinen), jatkuvaan (persistoiva) sekä pysyvään (krooninen) eteisvärinään. Valtaosa eteisvärinää sairastavista on yli 65-vuotiaita, keski-ikä on 75 vuotta. Miehillä on lähes kaksinkertainen riski sairastua eteisvärinään verrattuna naisiin. Esiintyvyys vaihtelee iän sekä sydän- ja muiden perussairauksien mukaan. Esimerkiksi sydämen vajaatoiminta lisää eteisvärinän yleisyyttä.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/flimmeri.png',
    points: [] }
  ]
},
{
  name: 'Flutteri',
  pages: [
    { description: 'Eteislepatus (FLU/Flatteri) on eteisvärinän jälkeen tavallisin ja tärkein eteisperäinen rytmihäiriö. Useilla potilailla esiintyy eteislepatusta että eteisvärinää. Eteislepatus syntyy eteisperäisten lisälyöntien aiheuttamina, kuten eteisvärinässäkin. Eteislepatuksessa eteisten taajuus on rytmihäiriön aikana säännöllinen toisin kuin eteisvärinässä. Eteislepatuksen oireet ovat hyvin samanlaisia kuin eteisvärinässä. ', },
    { description: 'Tyypillisen eteislepatuksen tunnistaa EKG:stä alaseinäkytkennöissä II, III ja aVF näkyvästä säännöllisestä sekä sahalaitamaisesta F-aallosta (”flutter wave”). Kammiovaste on useimmiten säännöllinen 80 – 170 kertaa minuutissa. Eteislepatus liittyy eriasteiseen sydämen vajaatoimintaan kammiovasteesta riippuen.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/flutteri.png',
    points: [] }
  ]
},
{
  name: 'SVT',
  pages: [
    { description: 'Supraventrikulaarinen takykardia eli SVT on rytmihäiriö, jossa sydämen rytmi on normaalia fysiologista sinusrytmiä nopeampi. SVT vaatii syntyäkseen tai pysyäkseen yllä sydämen eteisiä tai eteis-kammiosolmuketta tai niitä molempia. Tavallisimmin kohtaus alkaa äkillisesti ja myös loppuu melko äkkiä. SVT-kohtaus saattaa kestää lyhimmillään muutamia kymmeniä sekunteja ja pisimmillään tunteja tai päiviä. ', },
    { description: 'SVT on nopeavauhtinen takykardia, yli 200 kertaa minuutissa. Tämä saattaa varsinkin sydänsairaalla johtaa angina pectoris –kohtaukseen, tajuttomuuteen tai muuhun rytmihäiriöön, kuten esimerkiksi eteisvärinään. SVT-kohtaukselle on tavallista, että se alkaa jonkin vagaalista ärsytystä aiheuttavan liikkeen seurauksena, kuten esimerkiksi kumartuessa, yskiessä, syödessä, haukotellessa, pelästyessä tai sitten kovan fyysisen suorituksen jälkeen, jolloin sympaattinen tasapaino muuttuu. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/svt.png',
    points: [] }
  ]
},
{
  name: 'VT',
  pages: [
    { description: 'Kammiotakykardia eli VT määritellään leveäkomplesiseksi takykardiaksi, johon kuuluu vähintään kolme perättäistä kammiolyöntiä (VES), joiden taajuus on yli 120 kertaa minuutissa. Kammiotakykardiassa QRS-kompleksit ovat leveät ja niiden muoto on epänormaali, P-aaltoja on yleensä vaikea erottaa. Kammiotakykardioiden syntyalue on kammiolihaksessa. Erikoistapauksina voidaan pitää takykardioita, jotka syntyvät johtoradan kammionpuoleisella alueella.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/vt.png',
    points: [] }
  ]
},
{
  name: 'VF',
  pages: [
    { description: 'Kammiovärinä eli VF on yleisin sydänpysähdyksen aiheuttava rytmihäiriö, jonka taajuus on 250 – 600 lyöntiä minuutissa. Kammiovärinä voidaankin määritellä tilaksi, jossa kammiolihaksen eri osat aktivoituvat toisistaan riippumatta. Kammiovärinässä sydämen sähköinen toiminta on täysin kaoottinen, joka näkyy EKG:ssä epäsäännöllisenä, kaoottisena ja epänormaaleina heilahduksina, joiden koko ja leveys vaihtelevat. Kammiovärinässä sydän lakkaa pumppaamasta verta noin 10 sekunnin kuluttua, jota seuraa kliininen sydämenpysähdys ja tajuttomuus.  ', },
    { description: 'Mikäli rytmihäiriötä ei saada käännettyä 3 – 5 minuutin kuluessa, potilas yleensä menehtyy. Ainoa tehokas hoito on synkronoimaton defibrillaatio 200 – 300 J. PPE:tä (painelu-puhalluselvytys) tulee jatkaa kunnes normaali rytmi on palautunut tai elvytys päätetään lopettaa tuloksettomana. Kammiovärinä liittyy yleensä sepelvaltimotautiin tai akuuttiin sydäninfarktiin sekä sen jälkitilaan. Myös rytmihäiriöt kuten kammiotiheälyöntisyys tai nopea eteisvärinä voivat johtaa kammiovärinään. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/vf.png',
    points: [] }
  ]
},
{
  name: 'TDP',
  pages: [
    { description: 'Kääntyvien kärkien kammiotakykardia on vaarallinen kammioperäinen rytmihäiriö, jossa kammioheilahduksen sähköinen akseli kiertää sukkulamaisesti lyönnistä toiseen. Kääntyvien kärkien kammiotakykardian muotoja ovat perinnöllinen sekä hankittu pitkä QT –oireyhtymä. Periytyvässä muodossa poikkeavuus on solutasolla, kun taas hankittu muoto voi johtua eri sairauksista, QT-aikaa pidentävästä lääkityksestä tai kaliumin ja magnesiumin puutteesta. EKS:ssä on pidentynyt QT-aika ja kääntyvien kärkien takykardia, joka voi vaihdella sinusrytmin kanssa edestakaisin.', },
    { description: 'Kammiolepatus on hyvin tiheä, eikä heilahduksissa erotu diastolevaihetta. Heilahdus voi harvoin olla myös yhdenmuotoinen. Kammion syketaajuus voi olla 150 – 230 lyöntiä minuutissa. Pitkittynyt takykardiakohtaus voi aiheuttaa tajuttomuuskohtauksen ja joskus johtaa jopa kammiovärinän kautta sydämenpysähdykseen. Potilas voi menehtyä, ellei hän pääse pikaisesti hoitoon.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/tdp.png',
    points: [] }
  ]
},
{
  name: 'ASY',
  pages: [
    { description: 'Sydämenpysähdys ja hengityksen pysähtyminen johtavat hoitamattomina elimistön toiminnan palautumattomiin muutoksiin. Tällöin sydämen pumppaustoiminta lakkaa, verenkierto pysähtyy ja elimistöön syntyy hapenpuute. Hapenpuute vaikuttaa ensimmäisenä aivojen toimintaan ja tajuttomuus seuraa 10–15 sekunnin kuluessa. Jos aivojen verenkierto ei palaudu muutamassa minuutissa, alkaa kehittyä pysyviä muutoksia. ', },
    { description: 'Sydämen oman verenkierron, sepelvaltimokierron häiriön seurauksena sydämen supistumistoiminta lakkaa ja viimein myös sähköinen toiminta pysähtyy. Asystolesta puhutaan silloin kun sydän ei lyö enää. Eli jos sydän lyö vaikka 10 sekunnin jälkeen, niin voidaan puhua 10s. sykevälikatkoksesta.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/asy.png',
    points: [] }
  ]
},
{
  name: 'Agonaalinen rytmi',
  pages: [
    { description: 'Kuolemaa edeltävä rytmihäiriö,  joka on peräisin kammioiden alueelta. Hyvin hidas rytmi, alle 20-30 lyöntiä minuutissa, jopa 10-20 lyöntiä minuutissa. QRS-kompleksi matala ja leveä. Agonaalinen rytmi on merkki laajasta sydänlihaksen vauriosta, mikä johtaa sydänpysähdykseen (asystoleen).', },
    { heartRate: 60,
      image: '/ecg-app/graphs/agonaalinen.png',
    points: [] }
  ]
},
{
  name: 'PEA',
  pages: [
    { description: 'Sykkeetön rytmi, jossa sähköinen toiminta jatkuu, mutta mekaaninen supistus puuttuu, joten näin ollen tunnistettava pulssi puuttuu. QRS-heilahdukset usein leveitä ja epämuotoisia. Sydän ei pumppaa verta. On ei-defibrilloitava rytmi.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/pea.png',
    points: [] }
  ]
},
{
  name: 'Junktionaalinen rytmi',
  pages: [
    { description: 'Korvausrytmit ovat sydämen turvaverkko, joten niiden toimintaa ei saa estää. Korvausrytmit kehittyvät katkoksen tai bradykardian vuoksi. Sydämessä on useita toissijaisia ektooppisia tahdistinalueita, jotka voivat tahdistaa sydämen toimintaa mikäli sen johtuminen tai syntyminen estyy jostain syystä.', },
    { description: 'Jos junktioon ei SA-katkoksen tai sinuspysähdyksen vuoksi tule impulsseja, se alkaa tahdistaa sydämen toimintaa. Syntyvät QRS-kompleksit ovat muodoltaan samanlaisia kuin normaalistikin, mutta niiden taajuus on pienempi, noin 40 – 60 lyöntiä minuutissa. Junktionaaliselle rytmille on tyypillistä, että P-aallon sähköinen polariteetti kääntyy päinvastaiseen sinusrytmin P-aaltoon verrattuna. Invertoitunut P-aalto saattaa esiintyä QRS-kompleksin edellä, jäljessä tai siihen sulautuneena. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/junktionaalinen.png',
    points: [] }
  ]
},
{
  name: 'Eteistahdistus',
  pages: [
    { description: 'Tahdistimen perustehtävä on saada aikaan sydämen supistus, jos sitä ei tapahdu luonnollisesti. Eteistahdistin on nimensä mukaisesti eteisiä tahdistava ja tunnistava tahdistin. EKG:ssä tahdistimen antama jännitepiikki näkyy tahdistuspiikkinä ja sitä seuraa P-aalto. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/eteistahdistus.png',
    points: [] }
  ]
},
{
  name: 'Kammiotahdistus',
  pages: [
    { description: 'Kammiotahdistin tahdistaa ja tunnistaa vain kammioita. Kammiotahdistusta käytetään yleensä tilanteissa, joissa tahdistuksen tarve on hyvin vähäistä. Sydän toimii valtaosan ajasta normaalisti ja tahdistusta tarvitaan vain tarvittaessa hetkelliset estämään hidaslyöntisyyskohtaukset. Tahdistimen antama jännitepiikki näkyy EKG:ssä tahdistuspiikkinä ja sitä seuraa QRS-kompleksi.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/kammiotahdistus.png',
    points: [] }
  ]
},
{
  name: 'Eteis-kammiotahdistus',
  pages: [
    { description: 'Eteis-kammiotahdistin tahdistaa ja tunnistaa nimensä mukaisesti eteisiä ja kammioita. Tätä kutsutaan myös fysiologiseksi tahdistimeksi. Eteis-kammiotahdistinta käytetään potilailla, joilla on eteis-kammiojohtumisen häiriö. Tahdistimen antama jännitepiikki näkyy EKG:ssä tahdistinpiikkinä ja sitä seuraa P-aalto ja QRS-kompleksi. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/eteiskammiotahdistus.png',
    points: [] }
  ]
},
{
  name: 'I asteen AV-katkos',
  pages: [
    { description: 'Ensimmäisen asteen eteis-kammiokatkoksessa kaikki eteisaallot johtuvat kammioihin, mutta niiden herätteen kulku viivästyy eteis-kammiosolmukkeessa. Ensimmäisen asteen eteis-kammiokatkoksessa PQ-aika on yli 200ms. Joskus PQ-aika saattaa olla pidempi kuin PP-väli, jolloin kammioon johtunut P-aalto nähdään EKG:ssä ennen edeltävää QRS-heilahdusta.', },
    { description: 'QRS-heilahdus on tavallisesti normaalin muotoinen ja kapea. Mikäli QRS-heilahdus on leveä, haarakatkoksen tapainen, johtuminen on usein hidastunut Hisin kimpussa. Joten katkos voi olla osa muuta sydänsairautta. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/iAsteenAv.png',
    points: [] }
  ]
},
{
  name: 'II asteen AV-katkos Mobitz 1',
  pages: [
    { description: 'Toisen asteen eteis-kammiokatkoksessa vain osa eteisaalloista johtuu kammioihin. Katkos voi olla joko Mobitz 1- tai 2-tyyppinen. Molemmissa tapauksissa katkos on ajoittainen ja toistuva sekä se voi aiheuttaa useita peräkkäisiä johtumattomia P-aaltoja. Mobitz 1 –tyypin katkoksessa (Wenckebach-katkos) PQ-aika pitenee asteittain, kunnes yksi P-aalto jää johtumatta kammioihin. Johtumishäiriö on solmukkeessa, sen varsinaisessa runko-osasssa. Tämä katkos katsotaan hyvänlaatuiseksi ja se aiheuttaa harvoin vaikeita oireita. Mobitz 1 voi esiintyä sekä tervesydämisillä että sydänsairailla.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/iiAsteenAvMobitz1.png',
    points: [] }
  ]
},
{
  name: 'II asteen AV-katkos Mobitz 2',
  pages: [
    { description: 'Mobitz 2 –tyypin toisen asteen katkoksessa kaikki P-aallot eivät johdu kammioon. Tavallista on, että P-aallot tulevat säännöllisesti ja aina yhtä pitkä PQ-aika ennen kammioon johtumista.  Johtumishäiriö paikantuu Hisin kimpun alkuosaan tai sen jälkeen. QRS-heilahdus on usein leveä ja se voi olla haarakatkoksen muotoinen. Mobitz 2 –katkos aiheuttaa hidaslyöntisyyttä, mutta syke on säännöllinen. Tämä tila ei parane itsestään ja se enteilee täydellistä eteis-kammiokatkosta.', },
    { heartRate: 60,
      image: '/ecg-app/graphs/iiAsteenAvMobitz2.png',
    points: [] }
  ]
},
{
  name: 'III asteen AV-katkos',
  pages: [
    { description: 'Kolmannen asteen eteis-kammiokatkoksessa (totaaliblokissa) ei yksikään eteisaalto johdu kammioon. Kammioiden oma luontainen hidas tahdistusrytmi ylläpitää korvaavaa pumppaustoimintaa. Kolmannen asteen eteis-kammiokatkoksessa rytmi on tasainen ja syke voi olla niin alhainen, että se ei pysty ylläpitämään riittävää verenkiertoa. ', },
    { description: 'Kammioheilahdus on useimmiten levä, sillä korvausrytmi syntyy kammiolihaksen alueella. Joskus korvausrytmi on kapea ja tällöin johtumishäiriön syntyalue sijaitsee lähellä Hisin kimppua. Kolmannen asteen eteis-kammiokatkos eli täydellinen eteis-kammiokatkos voi olla synnynnäinen tai hankittu. ', },
    { heartRate: 60,
      image: '/ecg-app/graphs/iiiAsteenKatkos.png',
    points: [] }
  ]
},

];

// {
//   name: 'RBBB',
//   pages: [
//     { description: '[Ei kuvausta]', },
//     { heartRate: 60,
//     points: [] }
//   ]
// },
// {
//   name: 'LBBB',
//   pages: [
//     { description: '[Ei kuvausta]', },
//     { heartRate: 60,
//     points: [] }
//   ]
// },
// {
//   name: 'Sinus + ST-tason nousu',
//   pages: [
//     { description: '[Ei kuvausta]', },
//     { heartRate: 60,
//     points: [] }
//   ]
// },
// {
//   name: 'Sinus + ST-tason lasku',
//   pages: [
//     { description: '[Ei kuvausta]', },
//     { heartRate: 60,
//     points: [] }
//   ]
// },
// {
//   name: 'T-inversio',
//   pages: [
//     { description: '[Ei kuvausta]', },
//     { heartRate: 60,
//     points: [] }
//   ]
// },