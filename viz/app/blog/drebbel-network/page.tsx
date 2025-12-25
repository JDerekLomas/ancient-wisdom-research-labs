import BlogLayout from "../BlogLayout";

export default function DrebbelNetwork() {
  return (
    <BlogLayout
      title="The World of Cornelis Drebbel: A Social Network"
      tag="Visualization"
      slug="drebbel-network"
      date="December 2025"
      prevPost={{ href: "/blog/cornelis-drebbel", title: "Cornelis Drebbel: The Dutch Alchemist Who Invented the Future" }}
    >
      <p style={{
        fontFamily: 'Newsreader, Georgia, serif',
        fontSize: '22px',
        lineHeight: 1.6,
        color: '#444',
        marginBottom: '32px',
      }}>
        Cornelis Drebbel moved through three distinct worlds: the artistic circles of the
        Dutch Golden Age, the alchemical court of Rudolf II in Prague, and the scientific
        networks of Jacobean England. This visualization maps his connections across
        these spheres — from Goltzius to Galileo, from Sendivogius to Shakespeare.
      </p>

      <figure style={{
        margin: '40px 0',
        textAlign: 'center',
      }}>
        <a href="/drebbel_network.html" target="_blank">
          <div style={{
            background: 'linear-gradient(135deg, rgba(224,123,57,0.2) 0%, rgba(155,89,182,0.2) 50%, rgba(52,152,219,0.2) 100%)',
            borderRadius: '12px',
            padding: '60px 40px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '28px',
              color: '#c9a227',
              marginBottom: '16px',
            }}>
              Interactive Network Visualization
            </p>
            <p style={{
              fontSize: '16px',
              color: '#666',
            }}>
              35+ figures across Netherlands, Prague, and England
            </p>
          </div>
        </a>
        <figcaption style={{
          marginTop: '12px',
          fontSize: '14px',
          color: '#666',
          fontStyle: 'italic'
        }}>
          <a href="/drebbel_network.html" target="_blank" style={{ color: '#9e4a3a' }}>
            → Open interactive visualization
          </a>
        </figcaption>
      </figure>

      <h2>Three Worlds</h2>

      <p>
        Unlike most Renaissance figures who stayed within one geographic or intellectual sphere,
        Drebbel&apos;s life spanned three distinct networks:
      </p>

      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#e07b39', marginBottom: '8px' }}>
              Netherlands (1572–1604)
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
              The Haarlem Academy under Goltzius. Lens grinding in Middelburg with Lippershey.
              Marriage into the Goltzius family. His first publications in Alkmaar.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#9b59b6', marginBottom: '8px' }}>
              Prague (1610–1612)
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
              Rudolf II&apos;s court of wonders. Collaboration with Sendivogius on oxygen.
              The Hermetic tradition of Dee and Khunrath. Imprisonment and release.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#3498db', marginBottom: '8px' }}>
              England (1604–1633)
            </h3>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
              Patronage of James I and Prince Henry. Stage effects for Ben Jonson.
              Influence on Bacon&apos;s utopia. Legacy through Boyle and the Royal Society.
            </p>
          </div>
        </div>
      </figure>

      <h2>Key Connections</h2>

      <h3>The Haarlem Academy</h3>

      <p>
        Drebbel&apos;s artistic training came from <strong>Hendrik Goltzius</strong> (1558–1617),
        the virtuoso engraver who led the &quot;Haarlem Mannerists&quot; with <strong>Karel van Mander</strong>
        and <strong>Cornelis Corneliszoon</strong>. Goltzius wasn&apos;t just Drebbel&apos;s teacher — he
        became his brother-in-law when Drebbel married <strong>Sophia Goltzius</strong> in 1595.
        The two even bought a house together in 1603, allegedly for alchemical experiments.
      </p>

      <h3>The Prague Alchemists</h3>

      <p>
        At Rudolf II&apos;s court, Drebbel encountered <strong>Michael Sendivogius</strong>, who had
        discovered that heating saltpeter releases a &quot;food of life&quot; gas (oxygen). This knowledge
        became crucial for Drebbel&apos;s submarine. Though <strong>Heinrich Khunrath</strong> had died
        in 1605 and <strong>John Dee</strong> in 1608, their Hermetic philosophy permeated the court
        Drebbel entered.
      </p>

      <h3>The English Scientists</h3>

      <p>
        <strong>Francis Bacon</strong> knew Drebbel personally — he was on the commission that
        approved Drebbel&apos;s lodgings at Eltham Palace. Salomon&apos;s House in <em>New Atlantis</em>
        echoes Drebbel&apos;s inventions. <strong>Constantijn Huygens</strong> bought one of Drebbel&apos;s
        microscopes and called the view through it &quot;a new theater of nature.&quot; His son
        <strong>Christiaan Huygens</strong> credited Drebbel with inventing the compound microscope.
        <strong>Robert Boyle</strong> investigated the submarine and called Drebbel &quot;a deservedly
        famous mechanician and chymist.&quot;
      </p>

      <h3>The Kuffler Legacy</h3>

      <p>
        Drebbel&apos;s sons-in-law <strong>Abraham</strong> and <strong>Johannes Sibertus Kuffler</strong>
        carried his work forward. They established the famous Bow Dye Works using Drebbel&apos;s
        scarlet recipe. Johannes may have taught <strong>Robert Hooke</strong> the art of glass
        grinding. The grandson <strong>Augustus Kuffler</strong> preserved family alchemical
        knowledge in a manuscript now at Cambridge.
      </p>

      <h2>The Rosicrucian Question</h2>

      <p>
        Was Drebbel a Rosicrucian? The evidence is suggestive:
      </p>

      <ul>
        <li><strong>Joachim Morsius</strong>, deeply involved in Rosicrucian networks, edited Drebbel&apos;s <em>De Quinta Essentia</em></li>
        <li><strong>Edward Dyer</strong>, friend of John Dee, was &quot;reputed to have had a connection&quot; with Drebbel</li>
        <li>Drebbel&apos;s inventions inspired Bacon&apos;s Salomon&apos;s House, which later Rosicrucian writers claimed as their own</li>
        <li>His philosophy of the elements fits the Hermetic-alchemical tradition that fed into Rosicrucianism</li>
      </ul>

      <p>
        No membership list survives (the Rosicrucians were deliberately obscure), but Drebbel
        moved in exactly the circles where Rosicrucianism emerged.
      </p>

      <h2>Explore the Network</h2>

      <p>
        The interactive visualization shows all 35+ figures and their connections:
      </p>

      <ul>
        <li><strong>Drag nodes</strong> to explore the network structure</li>
        <li><strong>Click any figure</strong> to see their biography and connections</li>
        <li><strong>Filter by connection type</strong> (teacher, family, patron, etc.)</li>
        <li><strong>Scroll to zoom</strong> in and out</li>
      </ul>

      <figure style={{
        textAlign: 'center',
        margin: '40px 0',
      }}>
        <a
          href="/drebbel_network.html"
          target="_blank"
          style={{
            display: 'inline-block',
            background: '#9e4a3a',
            color: '#fff',
            padding: '16px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '18px',
          }}
        >
          Open the Drebbel Network →
        </a>
      </figure>

      <h2>Sources</h2>

      <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
        <li style={{ marginBottom: '8px' }}>
          <a href="https://drebbel.net" style={{ color: '#9e4a3a' }}>Drebbel.net</a> — Comprehensive archive maintained by Drebbel&apos;s descendants
        </li>
        <li style={{ marginBottom: '8px' }}>
          Tierie, Gerrit. <em>Cornelis Drebbel (1572-1633)</em>. Amsterdam, 1932.
        </li>
        <li style={{ marginBottom: '8px' }}>
          Colie, Rosalie. &quot;Cornelis Drebbel and Salomon de Caus: Two Jacobean Models for Salomon&apos;s House.&quot;
          <em>Huntington Library Quarterly</em> 18.3 (1955).
        </li>
        <li style={{ marginBottom: '8px' }}>
          Heisler, Ron. &quot;The Forgotten English Roots of Rosicrucianism.&quot;
          <em>The Hermetic Journal</em>, 1992.
        </li>
        <li style={{ marginBottom: '8px' }}>
          <a href="https://en.wikipedia.org/wiki/Michael_Sendivogius" style={{ color: '#9e4a3a' }}>
            Wikipedia: Michael Sendivogius
          </a> — On the oxygen/saltpeter discovery
        </li>
      </ul>
    </BlogLayout>
  );
}
