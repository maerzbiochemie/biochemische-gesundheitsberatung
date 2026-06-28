import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der biochemischen Gesundheitsberatung von Milva März.",
  robots: { index: false },
};

const H2 = "font-display mt-14 text-2xl text-[var(--color-sage-deep)] md:text-3xl";
const H3 = "font-display mt-9 text-xl text-[var(--color-ink)] md:text-2xl";
const P = "mt-3 text-[var(--color-ink-soft)]";

function Address({ name, lines }: { name: string; lines: string[] }) {
  return (
    <div className="mt-4 space-y-0.5 text-[var(--color-ink-soft)]">
      <p className="font-medium text-[var(--color-ink)]">{name}</p>
      {lines.map((l) => (
        <p key={l}>{l}</p>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((li) => (
        <li key={li} className="flex gap-3 text-[var(--color-ink-soft)]">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-sage)]" />
          {li}
        </li>
      ))}
    </ul>
  );
}

export default function DatenschutzPage() {
  return (
    <section className="bg-[var(--color-cream)] pb-24 pt-32 md:pb-32 md:pt-44">
      <div className="container-x max-w-3xl">
        <Reveal>
          <Eyebrow>Rechtliches</Eyebrow>
          <h1 className="font-display mt-7 text-[2.4rem] leading-[1.06] sm:text-5xl">
            Datenschutzerklärung
          </h1>
        </Reveal>

        <Reveal className="mt-8 space-y-4 text-[var(--color-ink-soft)]">
          <p>Liebe Besucherin, lieber Besucher dieser Website,</p>
          <p>
            ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden
            vertraulich und gemäß den geltenden Datenschutzvorschriften behandelt.
          </p>
          <p>
            Mit dieser Datenschutzerklärung informiere ich Sie darüber, welche personenbezogenen
            Daten beim Besuch dieser Website erhoben werden, wozu diese Daten genutzt werden und
            welche Rechte Sie im Zusammenhang mit Ihren personenbezogenen Daten haben.
          </p>
          <p>Wenn Sie Fragen zum Datenschutz haben, können Sie sich jederzeit an mich wenden.</p>
        </Reveal>

        <div>
          {/* 1 */}
          <h2 className={H2}>1. Verantwortliche für die Datenverarbeitung</h2>
          <p className={P}>Diese Datenschutzerklärung gilt für die Datenverarbeitung durch:</p>
          <Address
            name="Milva März"
            lines={[
              "Biochemische Gesundheitsberatung",
              "Jurastraße 27-1",
              "72072 Tübingen-Derendingen",
              "Deutschland",
            ]}
          />
          <p className={P}>
            E-Mail:{" "}
            <a href="mailto:maerz.biochemie@gmail.com" className="link-underline break-all text-[var(--color-sage-deep)]">
              maerz.biochemie@gmail.com
            </a>
          </p>
          <p className={P}>Website: https://biochemische-gesundheitsberatung.com</p>
          <p className={P}>Verantwortlich im Sinne der Datenschutz-Grundverordnung ist Milva März.</p>

          {/* 2 */}
          <h2 className={H2}>2. Welche Daten werden erhoben und wozu werden sie verarbeitet?</h2>
          <p className={P}>Die Nutzung dieser Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich.</p>
          <p className={P}>
            Personenbezogene Daten werden erhoben, wenn Sie mir diese aktiv mitteilen, zum Beispiel
            über das Kontaktformular, per E-Mail oder bei der externen Terminbuchung über Calendly.
          </p>
          <p className={P}>
            Außerdem werden beim Besuch der Website technisch notwendige Zugriffsdaten verarbeitet,
            damit die Website sicher und funktionsfähig ausgeliefert werden kann.
          </p>
          <p className={P}>Nachstehend informiere ich Sie über die einzelnen Datenverarbeitungsvorgänge.</p>

          <h3 className={H3}>a. Beim Besuch dieser Website</h3>
          <p className={P}>
            Wenn Sie diese Website besuchen, werden durch den auf Ihrem Endgerät verwendeten Browser
            automatisch Informationen an den Server beziehungsweise an den technischen Dienstleister
            dieser Website übermittelt.
          </p>
          <p className={P}>Dabei können insbesondere folgende Informationen verarbeitet werden:</p>
          <Bullets
            items={[
              "IP-Adresse des anfragenden Endgeräts",
              "Datum und Uhrzeit des Zugriffs",
              "Name und URL der abgerufenen Datei",
              "Website, von der aus der Zugriff erfolgt",
              "verwendeter Browser",
              "verwendetes Betriebssystem",
              "Name des Internet-Dienstleisters",
              "technische Informationen zur Systemsicherheit und Stabilität",
            ]}
          />
          <p className={P}>Diese Daten werden insbesondere zu folgenden Zwecken verarbeitet:</p>
          <Bullets
            items={[
              "Gewährleistung eines reibungslosen Verbindungsaufbaus der Website",
              "Gewährleistung einer komfortablen Nutzung der Website",
              "Auswertung der Systemsicherheit und -stabilität",
              "Schutz vor Angriffen und Missbrauch",
              "administrative Zwecke",
            ]}
          />
          <p className={P}>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
            Interesse ergibt sich aus den genannten Zwecken, insbesondere aus dem sicheren und
            technisch fehlerfreien Betrieb der Website.
          </p>
          <p className={P}>Diese Daten werden nicht verwendet, um Rückschlüsse auf Ihre Person zu ziehen.</p>

          <h3 className={H3}>b. Hosting, Content Delivery und Server-Logfiles</h3>
          <p className={P}>
            Diese Website wird über Cloudflare gehostet beziehungsweise über das Content-Delivery-
            und Sicherheitsnetzwerk von Cloudflare ausgeliefert.
          </p>
          <p className={P}>Anbieter ist:</p>
          <Address name="Cloudflare, Inc." lines={["101 Townsend Street", "San Francisco, CA 94107", "USA"]} />
          <p className={P}>In der EU vertreten durch:</p>
          <Address
            name="Cloudflare Germany GmbH"
            lines={["c/o Design Offices München Atlas", "Rosenheimer Straße 143C", "81671 München", "Deutschland"]}
          />
          <p className={P}>
            Cloudflare verarbeitet technische Zugriffsdaten, die für die Bereitstellung, Sicherheit
            und Stabilität dieser Website erforderlich sind. Dazu können insbesondere IP-Adresse,
            Browserdaten, Zeitpunkt des Zugriffs und technische Verbindungsdaten gehören.
          </p>
          <p className={P}>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes
            Interesse liegt in der sicheren, stabilen und effizienten Bereitstellung dieser Website.
          </p>
          <p className={P}>
            Mit Cloudflare ist, soweit erforderlich, ein Vertrag zur Auftragsverarbeitung gemäß Art.
            28 DSGVO abzuschließen beziehungsweise abgeschlossen.
          </p>
          <p className={P}>
            Da Cloudflare ein US-Unternehmen ist, kann eine Übermittlung personenbezogener Daten in
            die USA nicht ausgeschlossen werden. Eine solche Übermittlung erfolgt auf Grundlage
            geeigneter Garantien, insbesondere EU-Standardvertragsklauseln und/oder weiterer
            datenschutzrechtlicher Schutzmechanismen.
          </p>
          <p className={P}>
            Weitere Informationen zur Datenverarbeitung durch Cloudflare finden Sie in den
            Datenschutzhinweisen von Cloudflare.
          </p>

          <h3 className={H3}>c. Kontaktformular und E-Mail-Kontakt</h3>
          <p className={P}>
            Wenn Sie mir über das Kontaktformular oder per E-Mail eine Anfrage zukommen lassen,
            werden die von Ihnen übermittelten Angaben verarbeitet, um Ihre Anfrage zu beantworten
            und eine mögliche Zusammenarbeit vorzubereiten.
          </p>
          <p className={P}>Über das Kontaktformular können insbesondere folgende Daten verarbeitet werden:</p>
          <Bullets
            items={[
              "Name",
              "E-Mail-Adresse",
              "Telefonnummer, sofern freiwillig angegeben",
              "Auswahl, ob es sich um eine Anfrage als Privatperson oder als Unternehmen/Fachperson handelt",
              "Inhalt Ihrer Nachricht",
            ]}
          />
          <p className={P}>
            Die Verarbeitung erfolgt, sofern Ihre Anfrage mit der Anbahnung oder Durchführung einer
            Zusammenarbeit zusammenhängt, auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. In allen
            übrigen Fällen erfolgt die Verarbeitung auf Grundlage meines berechtigten Interesses an
            der Beantwortung Ihrer Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <p className={P}>
            Bitte senden Sie über das Kontaktformular keine ausführlichen sensiblen Gesundheitsdaten.
            Solche besonderen Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO werden
            erst im Rahmen eines gesonderten Anamnesebogens und auf gesonderter Grundlage
            strukturiert erhoben.
          </p>
          <p className={P}>
            Für den technischen Versand der über das Formular eingehenden Nachrichten wird der Dienst
            Resend eingesetzt.
          </p>
          <p className={P}>Anbieter ist:</p>
          <Address name="Plus Five Five, Inc. / Resend" lines={["USA"]} />
          <p className={P}>
            Resend verarbeitet die über das Kontaktformular übermittelten Daten in meinem Auftrag zum
            Zweck der technischen Übermittlung Ihrer Nachricht.
          </p>
          <p className={P}>
            Mit Resend ist, soweit erforderlich, ein Vertrag zur Auftragsverarbeitung gemäß Art. 28
            DSGVO abzuschließen beziehungsweise abgeschlossen. Da es sich um ein US-Unternehmen
            handelt, kann eine Übermittlung personenbezogener Daten in die USA erfolgen. Eine solche
            Übermittlung ist auf geeignete Garantien, insbesondere EU-Standardvertragsklauseln
            und/oder weitere datenschutzrechtliche Schutzmechanismen, zu stützen.
          </p>
          <p className={P}>
            Die über das Kontaktformular oder per E-Mail übermittelten Daten werden gelöscht, sobald
            Ihre Anfrage abschließend bearbeitet wurde, sofern keine gesetzlichen
            Aufbewahrungspflichten bestehen oder eine weitere Speicherung aufgrund einer
            anschließenden Zusammenarbeit erforderlich ist.
          </p>

          <h3 className={H3}>d. Terminbuchung über Calendly</h3>
          <p className={P}>
            Für die Buchung eines kostenlosen Erstgesprächs verweise ich über einen externen Link auf
            den Terminbuchungsdienst Calendly.
          </p>
          <p className={P}>Anbieter ist:</p>
          <Address name="Calendly LLC" lines={["115 E Main St, Ste A1B", "Buford, GA 30518", "USA"]} />
          <p className={P}>
            Calendly ist nicht als eingebettetes Widget in diese Website eingebunden. Auf dieser
            Website werden keine Calendly-Skripte, Calendly-Cookies oder sonstige Inhalte von
            Calendly automatisch geladen.
          </p>
          <p className={P}>
            Erst wenn Sie den Calendly-Link aktiv anklicken, verlassen Sie diese Website und werden
            auf die Plattform von Calendly weitergeleitet.
          </p>
          <p className={P}>Bei der Terminbuchung über Calendly können insbesondere folgende Daten verarbeitet werden:</p>
          <Bullets
            items={[
              "Name",
              "E-Mail-Adresse",
              "gewählter Termin",
              "gegebenenfalls Telefonnummer, sofern angegeben",
              "gegebenenfalls Inhalte von Nachrichten oder Formularfeldern",
              "technische Daten wie IP-Adresse, Browserdaten und Buchungsmetadaten",
            ]}
          />
          <p className={P}>
            Die Verarbeitung erfolgt zum Zweck der Terminvereinbarung und Vorbereitung des
            kostenlosen Erstgesprächs.
          </p>
          <p className={P}>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Terminbuchung der Anbahnung
            einer Zusammenarbeit dient. Darüber hinaus kann die Verarbeitung auf Grundlage meines
            berechtigten Interesses an einer einfachen und effizienten Terminorganisation gemäß Art.
            6 Abs. 1 lit. f DSGVO erfolgen.
          </p>
          <p className={P}>
            Calendly verarbeitet personenbezogene Daten auch in den USA. Calendly stellt ein Data
            Processing Addendum bereit. Die Datenübermittlung kann auf geeignete Garantien gestützt
            werden, insbesondere EU-Standardvertragsklauseln und/oder das EU-U.S. Data Privacy
            Framework, soweit dieses anwendbar ist.
          </p>
          <p className={P}>
            Für die Verarbeitung auf der Plattform von Calendly gelten zusätzlich die
            Datenschutzbestimmungen von Calendly.
          </p>
          <p className={P}>
            Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly:{" "}
            <a
              href="https://calendly.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline break-all text-[var(--color-sage-deep)]"
            >
              https://calendly.com/legal/privacy-notice
            </a>
          </p>

          <h3 className={H3}>e. Newsletter</h3>
          <p className={P}>Ein Newsletter wird derzeit nicht angeboten.</p>
          <p className={P}>Es werden auf dieser Website keine Daten zum Zweck eines Newsletter-Versands erhoben.</p>
          <p className={P}>
            Sollte künftig ein Newsletter angeboten werden, wird hierfür eine ausdrückliche
            Einwilligung eingeholt und diese Datenschutzerklärung entsprechend ergänzt.
          </p>

          <h3 className={H3}>f. Social-Media-Links</h3>
          <p className={P}>
            Auf dieser Website können einfache Links zu externen Social-Media-Profilen, insbesondere
            LinkedIn und Instagram, eingebunden sein.
          </p>
          <p className={P}>
            Dabei handelt es sich ausschließlich um normale externe Links. Beim bloßen Besuch dieser
            Website werden dadurch keine personenbezogenen Daten an LinkedIn, Instagram oder andere
            Social-Media-Plattformen übertragen.
          </p>
          <p className={P}>
            Erst wenn Sie einen solchen Link aktiv anklicken, verlassen Sie diese Website. Ab diesem
            Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
          </p>
          <p className={P}>
            Es werden keine Social-Media-Feeds, Like-Buttons, Share-Buttons, Social Plugins, Meta
            Pixel, LinkedIn Insight Tags oder vergleichbare Tracking-Technologien auf dieser Website
            eingebunden.
          </p>

          {/* 3 */}
          <h2 className={H2}>3. Datenweitergabe an Dritte</h2>
          <p className={P}>
            Eine Übermittlung personenbezogener Daten an Dritte findet grundsätzlich nicht statt,
            sofern sie nicht für die genannten Zwecke erforderlich ist, Sie eingewilligt haben oder
            eine gesetzliche Verpflichtung besteht.
          </p>
          <p className={P}>Eine Weitergabe kann insbesondere erfolgen:</p>
          <Bullets
            items={[
              "an technische Dienstleister, die für den Betrieb dieser Website erforderlich sind",
              "an Dienstleister zur Übermittlung von Kontaktformular-Nachrichten",
              "an Calendly, wenn Sie den externen Terminbuchungslink aktiv nutzen",
              "wenn dies zur Erfüllung rechtlicher Verpflichtungen erforderlich ist",
              "wenn dies zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist",
            ]}
          />
          <p className={P}>
            Soweit Dienstleister in meinem Auftrag personenbezogene Daten verarbeiten, erfolgt dies
            auf Grundlage eines Vertrags zur Auftragsverarbeitung gemäß Art. 28 DSGVO, sofern ein
            solcher erforderlich ist.
          </p>

          {/* 4 */}
          <h2 className={H2}>4. Cookies und externe Dienste</h2>
          <h3 className={H3}>a. Cookies</h3>
          <p className={P}>
            Cookies sind kleine Dateien, die Ihr Browser auf Ihrem Endgerät speichern kann. Sie
            können dazu dienen, eine Website technisch funktionsfähig zu machen, Einstellungen zu
            speichern oder Nutzungsverhalten zu analysieren.
          </p>
          <p className={P}>Diese Website verwendet keine Cookies zu Analyse-, Tracking- oder Marketingzwecken.</p>
          <p className={P}>
            Es werden keine Webanalyse-Dienste wie Google Analytics, keine Marketing-Pixel wie Meta
            Pixel, TikTok Pixel oder LinkedIn Insight Tag und keine eingebetteten Social-Media-Inhalte
            verwendet.
          </p>
          <p className={P}>
            Technisch notwendige Cookies oder vergleichbare technische Mechanismen können eingesetzt
            werden, soweit sie für den sicheren und funktionsfähigen Betrieb dieser Website
            erforderlich sind. Dazu können insbesondere Sicherheits- und Schutzfunktionen des
            eingesetzten Hosting- beziehungsweise Sicherheitsdienstleisters Cloudflare gehören.
          </p>
          <p className={P}>
            Die Verarbeitung technisch notwendiger Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit.
            f DSGVO. Das berechtigte Interesse liegt im sicheren und funktionsfähigen Betrieb der
            Website.
          </p>
          <p className={P}>
            Sollten künftig einwilligungspflichtige Cookies oder externe Dienste eingesetzt werden,
            wird zuvor Ihre Einwilligung eingeholt und diese Datenschutzerklärung entsprechend
            ergänzt.
          </p>

          <h3 className={H3}>b. Google Analytics</h3>
          <p className={P}>Google Analytics wird auf dieser Website derzeit nicht eingesetzt.</p>
          <p className={P}>Es werden keine Nutzungsdaten mit Google Analytics erhoben oder ausgewertet.</p>
          <p className={P}>
            Sollte Google Analytics künftig eingesetzt werden, erfolgt dies nur nach vorheriger
            Einwilligung und nach entsprechender Ergänzung dieser Datenschutzerklärung.
          </p>

          <h3 className={H3}>c. Google Ads Conversion Tracking</h3>
          <p className={P}>Google Ads Conversion Tracking wird auf dieser Website derzeit nicht eingesetzt.</p>
          <p className={P}>
            Es werden keine Conversion-Cookies von Google Ads gesetzt und keine entsprechenden
            Nutzungsdaten an Google übermittelt.
          </p>
          <p className={P}>
            Sollte Google Ads Conversion Tracking künftig eingesetzt werden, erfolgt dies nur nach
            vorheriger Einwilligung und nach entsprechender Ergänzung dieser Datenschutzerklärung.
          </p>

          <h3 className={H3}>d. Google Maps</h3>
          <p className={P}>Google Maps wird auf dieser Website derzeit nicht eingebunden.</p>
          <p className={P}>
            Es werden beim Besuch dieser Website keine personenbezogenen Daten durch eine
            Google-Maps-Einbindung an Google übermittelt.
          </p>
          <p className={P}>
            Sollte Google Maps künftig eingebunden werden, erfolgt dies nur nach entsprechender
            datenschutzrechtlicher Prüfung und Ergänzung dieser Datenschutzerklärung.
          </p>

          <h3 className={H3}>e. Keine sonstigen Analyse- und Marketing-Tools</h3>
          <p className={P}>Diese Website verwendet derzeit keine sonstigen Analyse- oder Marketing-Tools.</p>
          <p className={P}>Insbesondere werden nicht eingesetzt:</p>
          <Bullets
            items={[
              "Meta Pixel",
              "TikTok Pixel",
              "LinkedIn Insight Tag",
              "sonstige Tracking- oder Marketingdienste",
            ]}
          />

          <h3 className={H3}>f. Schriftarten</h3>
          <p className={P}>Die auf dieser Website verwendeten Schriftarten werden lokal ausgeliefert.</p>
          <p className={P}>Es erfolgt kein Abruf von Schriftarten über externe Anbieter wie Google Fonts.</p>

          {/* 5 */}
          <h2 className={H2}>5. Ihre Rechte</h2>
          <p className={P}>Sie haben im Rahmen der gesetzlichen Bestimmungen jederzeit das Recht:</p>
          <Bullets
            items={[
              "gemäß Art. 15 DSGVO Auskunft über Ihre von mir verarbeiteten personenbezogenen Daten zu verlangen",
              "gemäß Art. 16 DSGVO die Berichtigung unrichtiger oder die Vervollständigung unvollständiger personenbezogener Daten zu verlangen",
              "gemäß Art. 17 DSGVO die Löschung Ihrer bei mir gespeicherten personenbezogenen Daten zu verlangen",
              "gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen",
              "gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen",
              "gemäß Art. 7 Abs. 3 DSGVO eine einmal erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen",
              "gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen",
              "gemäß Art. 77 DSGVO sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren",
            ]}
          />
          <p className={P}>
            Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an:{" "}
            <a href="mailto:maerz.biochemie@gmail.com" className="link-underline break-all text-[var(--color-sage-deep)]">
              maerz.biochemie@gmail.com
            </a>
          </p>

          {/* 6 */}
          <h2 className={H2}>6. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p className={P}>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie
            der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
            Datenschutzrecht verstößt.
          </p>
          <p className={P}>Für die verantwortliche Stelle ist insbesondere folgende Aufsichtsbehörde zuständig:</p>
          <Address
            name="Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg"
            lines={["Heilbronner Straße 35", "70191 Stuttgart", "Deutschland"]}
          />
          <p className={P}>
            Telefon: 0711 615541-0
            <br />
            E-Mail:{" "}
            <a href="mailto:poststelle@lfdi.bwl.de" className="link-underline break-all text-[var(--color-sage-deep)]">
              poststelle@lfdi.bwl.de
            </a>
            <br />
            Website:{" "}
            <a
              href="https://www.baden-wuerttemberg.datenschutz.de"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline break-all text-[var(--color-sage-deep)]"
            >
              https://www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>

          {/* 7 */}
          <h2 className={H2}>7. Ihr Recht zum Widerspruch</h2>
          <p className={P}>
            Wenn personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet
            werden, haben Sie gemäß Art. 21 DSGVO das Recht, aus Gründen, die sich aus Ihrer
            besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung Ihrer
            personenbezogenen Daten einzulegen.
          </p>
          <p className={P}>
            Wenn Sie von Ihrem Widerspruchsrecht Gebrauch machen möchten, genügt eine E-Mail an:{" "}
            <a href="mailto:maerz.biochemie@gmail.com" className="link-underline break-all text-[var(--color-sage-deep)]">
              maerz.biochemie@gmail.com
            </a>
          </p>

          {/* 8 */}
          <h2 className={H2}>8. Speicherdauer</h2>
          <p className={P}>
            Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen
            Verarbeitungszwecke erforderlich ist.
          </p>
          <p className={P}>
            Anfragen über das Kontaktformular oder per E-Mail werden gelöscht, sobald Ihre Anfrage
            abschließend bearbeitet wurde, sofern keine gesetzlichen Aufbewahrungspflichten bestehen
            oder eine weitere Speicherung aufgrund einer Zusammenarbeit erforderlich ist.
          </p>
          <p className={P}>
            Kommt eine Zusammenarbeit zustande, werden die für die Geschäftsbeziehung erforderlichen
            Daten für die Dauer der Zusammenarbeit gespeichert. Soweit steuer- oder handelsrechtliche
            Aufbewahrungspflichten bestehen, werden die entsprechenden Daten bis zum Ablauf der
            gesetzlichen Fristen aufbewahrt und anschließend gelöscht.
          </p>
          <p className={P}>
            Technische Zugriffsdaten werden nur für einen begrenzten Zeitraum gespeichert und
            anschließend gelöscht, soweit keine weitere Speicherung aus Sicherheitsgründen
            erforderlich ist.
          </p>

          {/* 9 */}
          <h2 className={H2}>9. Datensicherheit</h2>
          <p className={P}>
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte eine SSL- beziehungsweise TLS-Verschlüsselung.
          </p>
          <p className={P}>
            Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile Ihres
            Browsers sowie am Schloss-Symbol in der Browserzeile.
          </p>
          <p className={P}>
            Bei aktiver Verschlüsselung können die Daten, die Sie an mich übermitteln, nicht ohne
            Weiteres von Dritten mitgelesen werden.
          </p>
          <p className={P}>
            Darüber hinaus werden geeignete technische und organisatorische Maßnahmen eingesetzt, um
            personenbezogene Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder
            vollständigen Verlust, Zerstörung oder unbefugten Zugriff Dritter zu schützen.
          </p>
          <p className={P}>Ein lückenloser Schutz der Datenübertragung im Internet kann jedoch nicht garantiert werden.</p>
          <p className={P}>
            Wenn Sie dieses Risiko nicht eingehen möchten, kommunizieren Sie bitte nicht über das
            Internet mit mir.
          </p>

          {/* 10 */}
          <h2 className={H2}>10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p className={P}>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juni 2026.</p>
          <p className={P}>
            Durch die Weiterentwicklung dieser Website, die Änderung eingesetzter Dienste oder
            aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann eine
            Anpassung dieser Datenschutzerklärung erforderlich werden.
          </p>
          <p className={P}>
            Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website unter
            folgender Adresse abgerufen werden:{" "}
            <a
              href="https://biochemische-gesundheitsberatung.com/datenschutz"
              className="link-underline break-all text-[var(--color-sage-deep)]"
            >
              https://biochemische-gesundheitsberatung.com/datenschutz
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
