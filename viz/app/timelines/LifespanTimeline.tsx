"use client";

import { useState, useMemo } from "react";

interface Person {
  name: string;
  birth: number;
  death: number;
  description: string;
  works: string;
  wikipedia?: string;
  tags: string[];
}

interface Tag {
  name: string;
  color: string;
}

const TAGS: Tag[] = [
  { name: "Humanism", color: "#9e4a3a" },
  { name: "Reformation", color: "#c9a86c" },
  { name: "Occult Philosophy", color: "#8b5cf6" },
  { name: "Philosophy", color: "#546b8a" },
  { name: "Science", color: "#8b9a7d" },
  { name: "Patrons & Politics", color: "#d4a574" },
  { name: "Women Authors", color: "#e07b9a" },
];

const people: Person[] = [
  // Humanism origins
  { name: "Petrarch", birth: 1304, death: 1374, description: "Father of Humanism", works: "Africa, Secretum", wikipedia: "https://en.wikipedia.org/wiki/Petrarch", tags: ["Humanism"] },
  { name: "Giovanni Boccaccio", birth: 1313, death: 1375, description: "Author of Decameron, friend of Petrarch", works: "Decameron, Genealogia deorum", wikipedia: "https://en.wikipedia.org/wiki/Giovanni_Boccaccio", tags: ["Humanism"] },
  { name: "Coluccio Salutati", birth: 1331, death: 1406, description: "Florentine chancellor, civic humanist", works: "De laboribus Herculis", wikipedia: "https://en.wikipedia.org/wiki/Coluccio_Salutati", tags: ["Humanism", "Patrons & Politics"] },

  // Byzantine connection
  { name: "Gemistus Plethon", birth: 1355, death: 1452, description: "Byzantine philosopher who revived Plato in Italy", works: "Book of Laws", wikipedia: "https://en.wikipedia.org/wiki/Gemistus_Pletho", tags: ["Philosophy", "Occult Philosophy"] },

  // Early reformer
  { name: "Jan Hus", birth: 1372, death: 1415, description: "Czech reformer, burned at stake", works: "De Ecclesia", wikipedia: "https://en.wikipedia.org/wiki/Jan_Hus", tags: ["Reformation"] },

  // Medici patrons
  { name: "Cosimo de' Medici", birth: 1389, death: 1464, description: "Founded Medici dynasty, patron of arts", works: "Platonic Academy patron", wikipedia: "https://en.wikipedia.org/wiki/Cosimo_de%27_Medici", tags: ["Patrons & Politics", "Humanism"] },
  { name: "Pope Nicholas V", birth: 1397, death: 1455, description: "Founded Vatican Library, patron of translators", works: "Papal Bulls", wikipedia: "https://en.wikipedia.org/wiki/Pope_Nicholas_V", tags: ["Patrons & Politics", "Humanism"] },

  // Cusanus
  { name: "Nicholas of Cusa", birth: 1401, death: 1464, description: "Proposed Earth moves, learned ignorance", works: "De docta ignorantia", wikipedia: "https://en.wikipedia.org/wiki/Nicholas_of_Cusa", tags: ["Philosophy", "Occult Philosophy", "Science"] },

  // Renaissance humanists
  { name: "Leon Battista Alberti", birth: 1404, death: 1472, description: "Architect, author; Renaissance man", works: "De re aedificatoria", wikipedia: "https://en.wikipedia.org/wiki/Leon_Battista_Alberti", tags: ["Humanism", "Science"] },
  { name: "Federico da Montefeltro", birth: 1422, death: 1482, description: "Duke of Urbino, humanist condottiero", works: "Library of Urbino", wikipedia: "https://en.wikipedia.org/wiki/Federico_da_Montefeltro", tags: ["Patrons & Politics", "Humanism"] },

  // Florentine Platonists
  { name: "Marsilio Ficino", birth: 1433, death: 1499, description: "Translated Plato & Hermetica", works: "Theologia Platonica", wikipedia: "https://en.wikipedia.org/wiki/Marsilio_Ficino", tags: ["Humanism", "Occult Philosophy", "Philosophy"] },
  { name: "Lorenzo de' Medici", birth: 1449, death: 1492, description: "Il Magnifico; patron of Michelangelo, Botticelli", works: "Poesie", wikipedia: "https://en.wikipedia.org/wiki/Lorenzo_de%27_Medici", tags: ["Patrons & Politics", "Humanism"] },
  { name: "Aldus Manutius", birth: 1449, death: 1515, description: "Venetian printer; invented italic type, pocket books", works: "Aldine Press editions", wikipedia: "https://en.wikipedia.org/wiki/Aldus_Manutius", tags: ["Humanism"] },
  { name: "Savonarola", birth: 1452, death: 1498, description: "Dominican friar who ruled Florence; burned books", works: "Sermons", wikipedia: "https://en.wikipedia.org/wiki/Girolamo_Savonarola", tags: ["Reformation", "Patrons & Politics"] },
  { name: "Angelo Poliziano", birth: 1454, death: 1494, description: "Greatest Latin poet of the Renaissance", works: "Sylvae, Miscellanea", wikipedia: "https://en.wikipedia.org/wiki/Poliziano", tags: ["Humanism"] },

  // Trithemius & early occult
  { name: "Johannes Trithemius", birth: 1462, death: 1516, description: "Cryptographer, historian of magic", works: "Steganographia", wikipedia: "https://en.wikipedia.org/wiki/Johannes_Trithemius", tags: ["Occult Philosophy"] },
  { name: "Pico della Mirandola", birth: 1463, death: 1494, description: "Oration on Dignity of Man; 900 Theses", works: "900 Theses", wikipedia: "https://en.wikipedia.org/wiki/Giovanni_Pico_della_Mirandola", tags: ["Humanism", "Occult Philosophy", "Philosophy"] },
  { name: "Erasmus", birth: 1466, death: 1536, description: "Prince of Humanists", works: "In Praise of Folly", wikipedia: "https://en.wikipedia.org/wiki/Erasmus", tags: ["Humanism", "Reformation"] },

  // Science begins
  { name: "Copernicus", birth: 1473, death: 1543, description: "Sun-centered universe", works: "De revolutionibus", wikipedia: "https://en.wikipedia.org/wiki/Nicolaus_Copernicus", tags: ["Science"] },
  { name: "Pope Leo X", birth: 1475, death: 1521, description: "Medici pope; patron of Raphael, sold indulgences", works: "Exsurge Domine", wikipedia: "https://en.wikipedia.org/wiki/Pope_Leo_X", tags: ["Patrons & Politics"] },
  { name: "Thomas More", birth: 1478, death: 1535, description: "Invented Utopia", works: "Utopia", wikipedia: "https://en.wikipedia.org/wiki/Thomas_More", tags: ["Humanism", "Philosophy"] },

  // Reformation
  { name: "Martin Luther", birth: 1483, death: 1546, description: "Sparked Protestant Reformation", works: "95 Theses", wikipedia: "https://en.wikipedia.org/wiki/Martin_Luther", tags: ["Reformation"] },
  { name: "Ulrich Zwingli", birth: 1484, death: 1531, description: "Swiss reformer", works: "67 Articles", wikipedia: "https://en.wikipedia.org/wiki/Huldrych_Zwingli", tags: ["Reformation"] },
  { name: "Cornelius Agrippa", birth: 1486, death: 1535, description: "Systematized Renaissance magic", works: "De occulta philosophia", wikipedia: "https://en.wikipedia.org/wiki/Heinrich_Cornelius_Agrippa", tags: ["Occult Philosophy", "Humanism"] },

  // Paracelsus & medicine
  { name: "Paracelsus", birth: 1493, death: 1541, description: "Revolutionary physician, alchemist", works: "Paragranum", wikipedia: "https://en.wikipedia.org/wiki/Paracelsus", tags: ["Science", "Occult Philosophy"] },
  { name: "Juan Luis Vives", birth: 1493, death: 1540, description: "Spanish humanist, educator", works: "De anima et vita", wikipedia: "https://en.wikipedia.org/wiki/Juan_Luis_Vives", tags: ["Humanism"] },
  { name: "Melanchthon", birth: 1497, death: 1560, description: "Teacher of Germany", works: "Loci Communes", wikipedia: "https://en.wikipedia.org/wiki/Philip_Melanchthon", tags: ["Reformation", "Humanism"] },

  // Calvin & anatomy
  { name: "John Calvin", birth: 1509, death: 1564, description: "Reformed theology", works: "Institutes", wikipedia: "https://en.wikipedia.org/wiki/John_Calvin", tags: ["Reformation"] },
  { name: "Vesalius", birth: 1514, death: 1564, description: "Father of modern anatomy", works: "De humani corporis fabrica", wikipedia: "https://en.wikipedia.org/wiki/Andreas_Vesalius", tags: ["Science"] },

  // John Dee & contemporaries
  { name: "John Dee", birth: 1527, death: 1608, description: "Mathematician & astrologer to Elizabeth I", works: "Monas Hieroglyphica", wikipedia: "https://en.wikipedia.org/wiki/John_Dee", tags: ["Occult Philosophy", "Science"] },
  { name: "Michel de Montaigne", birth: 1533, death: 1592, description: "Inventor of the essay; radical skeptic", works: "Essais", wikipedia: "https://en.wikipedia.org/wiki/Michel_de_Montaigne", tags: ["Philosophy", "Humanism"] },
  { name: "Giambattista della Porta", birth: 1535, death: 1615, description: "Natural magic & optics pioneer", works: "Magia Naturalis", wikipedia: "https://en.wikipedia.org/wiki/Giambattista_della_Porta", tags: ["Occult Philosophy", "Science"] },

  // Astronomy
  { name: "Tycho Brahe", birth: 1546, death: 1601, description: "Greatest pre-telescope astronomer", works: "Astronomiae instauratae mechanica", wikipedia: "https://en.wikipedia.org/wiki/Tycho_Brahe", tags: ["Science", "Occult Philosophy"] },
  { name: "Giordano Bruno", birth: 1548, death: 1600, description: "Infinite worlds; burned for heresy", works: "De l'infinito", wikipedia: "https://en.wikipedia.org/wiki/Giordano_Bruno", tags: ["Philosophy", "Occult Philosophy"] },
  { name: "Rudolf II", birth: 1552, death: 1612, description: "Holy Roman Emperor; patron of alchemy & art", works: "Kunstkammer collection", wikipedia: "https://en.wikipedia.org/wiki/Rudolf_II,_Holy_Roman_Emperor", tags: ["Patrons & Politics", "Occult Philosophy"] },

  // Khunrath & alchemists
  { name: "Heinrich Khunrath", birth: 1560, death: 1605, description: "Hermetic philosopher, alchemist", works: "Amphitheatrum Sapientiae Aeternae", wikipedia: "https://en.wikipedia.org/wiki/Heinrich_Khunrath", tags: ["Occult Philosophy"] },
  { name: "Francis Bacon", birth: 1561, death: 1626, description: "Scientific method", works: "Novum Organum", wikipedia: "https://en.wikipedia.org/wiki/Francis_Bacon", tags: ["Science", "Philosophy"] },
  { name: "Galileo", birth: 1564, death: 1642, description: "Telescope reveals Jupiter's moons", works: "Sidereus Nuncius", wikipedia: "https://en.wikipedia.org/wiki/Galileo_Galilei", tags: ["Science"] },
  { name: "James I", birth: 1566, death: 1625, description: "King; sponsored KJV Bible, wrote on witchcraft", works: "Daemonologie", wikipedia: "https://en.wikipedia.org/wiki/James_VI_and_I", tags: ["Patrons & Politics", "Occult Philosophy"] },
  { name: "Michael Maier", birth: 1568, death: 1622, description: "Alchemist at Rudolf II's court", works: "Atalanta Fugiens", wikipedia: "https://en.wikipedia.org/wiki/Michael_Maier", tags: ["Occult Philosophy"] },
  { name: "Tommaso Campanella", birth: 1568, death: 1639, description: "Utopian philosopher, imprisoned 27 years", works: "City of the Sun", wikipedia: "https://en.wikipedia.org/wiki/Tommaso_Campanella", tags: ["Philosophy", "Occult Philosophy"] },

  // Kepler & Fludd
  { name: "Kepler", birth: 1571, death: 1630, description: "Laws of planetary motion", works: "Astronomia Nova", wikipedia: "https://en.wikipedia.org/wiki/Johannes_Kepler", tags: ["Science", "Occult Philosophy"] },
  { name: "Cornelis Drebbel", birth: 1572, death: 1633, description: "Inventor, alchemist; built first submarine", works: "Submarine, perpetual motion", wikipedia: "https://en.wikipedia.org/wiki/Cornelis_Drebbel", tags: ["Occult Philosophy", "Science"] },
  { name: "Robert Fludd", birth: 1574, death: 1637, description: "Rosicrucian cosmologist", works: "Utriusque Cosmi Historia", wikipedia: "https://en.wikipedia.org/wiki/Robert_Fludd", tags: ["Occult Philosophy"] },
  { name: "William Harvey", birth: 1578, death: 1657, description: "Discovered blood circulation", works: "De motu cordis", wikipedia: "https://en.wikipedia.org/wiki/William_Harvey", tags: ["Science"] },
  { name: "Isaac Beeckman", birth: 1588, death: 1637, description: "Dutch scientist; mentor to Descartes", works: "Journal", wikipedia: "https://en.wikipedia.org/wiki/Isaac_Beeckman", tags: ["Science"] },

  // Descartes era
  { name: "Descartes", birth: 1596, death: 1650, description: "I think therefore I am", works: "Meditationes", wikipedia: "https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes", tags: ["Philosophy", "Science"] },
  { name: "Athanasius Kircher", birth: 1602, death: 1680, description: "Last man who knew everything", works: "Oedipus Aegyptiacus", wikipedia: "https://en.wikipedia.org/wiki/Athanasius_Kircher", tags: ["Science", "Occult Philosophy"] },

  // Late 17th century
  { name: "Robert Boyle", birth: 1627, death: 1691, description: "Father of modern chemistry", works: "The Sceptical Chymist", wikipedia: "https://en.wikipedia.org/wiki/Robert_Boyle", tags: ["Science", "Occult Philosophy"] },
  { name: "Spinoza", birth: 1632, death: 1677, description: "God = Nature", works: "Ethica", wikipedia: "https://en.wikipedia.org/wiki/Baruch_Spinoza", tags: ["Philosophy"] },
  { name: "Robert Hooke", birth: 1635, death: 1703, description: "Microscopy, cells, Hooke's Law; rival of Newton", works: "Micrographia", wikipedia: "https://en.wikipedia.org/wiki/Robert_Hooke", tags: ["Science"] },
  { name: "Newton", birth: 1643, death: 1727, description: "Gravity, calculus, optics; secret alchemist", works: "Principia Mathematica", wikipedia: "https://en.wikipedia.org/wiki/Isaac_Newton", tags: ["Science", "Occult Philosophy"] },
  { name: "Leibniz", birth: 1646, death: 1716, description: "Invented calculus, monads", works: "Monadology", wikipedia: "https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz", tags: ["Philosophy", "Science"] },

  // ===== WOMEN AUTHORS =====
  // Ancient Philosophers
  { name: "Themistoclea", birth: -580, death: -500, description: "Priestess at Delphi, taught Pythagoras", works: "Oral teachings", wikipedia: "https://en.wikipedia.org/wiki/Themistoclea", tags: ["Women Authors", "Philosophy"] },
  { name: "Aspasia of Miletus", birth: -470, death: -400, description: "Taught rhetoric to Socrates & Pericles", works: "Funeral oration", wikipedia: "https://en.wikipedia.org/wiki/Aspasia", tags: ["Women Authors", "Philosophy"] },
  { name: "Hypatia", birth: 360, death: 415, description: "Neoplatonist philosopher, murdered by mob", works: "Commentaries on astronomy", wikipedia: "https://en.wikipedia.org/wiki/Hypatia", tags: ["Women Authors", "Philosophy", "Science"] },

  // Medieval Mystics & Writers
  { name: "Hrotsvitha", birth: 935, death: 1002, description: "First German poet, nun-playwright", works: "Six plays in Latin", wikipedia: "https://en.wikipedia.org/wiki/Hrotsvitha", tags: ["Women Authors"] },
  { name: "Murasaki Shikibu", birth: 973, death: 1025, description: "Japanese court lady, world's first novelist", works: "Tale of Genji", wikipedia: "https://en.wikipedia.org/wiki/Murasaki_Shikibu", tags: ["Women Authors"] },
  { name: "Hildegard of Bingen", birth: 1098, death: 1179, description: "Visionary abbess, polymath, composer", works: "Scivias, Ordo Virtutum", wikipedia: "https://en.wikipedia.org/wiki/Hildegard_of_Bingen", tags: ["Women Authors", "Science", "Philosophy"] },
  { name: "Marie de France", birth: 1130, death: 1200, description: "Anglo-Norman poet, first woman to write in French", works: "Lais", wikipedia: "https://en.wikipedia.org/wiki/Marie_de_France", tags: ["Women Authors"] },
  { name: "Mechthild of Magdeburg", birth: 1207, death: 1282, description: "German mystic, Beguine", works: "Flowing Light of the Godhead", wikipedia: "https://en.wikipedia.org/wiki/Mechthild_of_Magdeburg", tags: ["Women Authors", "Philosophy"] },
  { name: "Marguerite Porete", birth: 1250, death: 1310, description: "Mystical theologian, burned as heretic", works: "Mirror of Simple Souls", wikipedia: "https://en.wikipedia.org/wiki/Marguerite_Porete", tags: ["Women Authors", "Philosophy"] },
  { name: "Julian of Norwich", birth: 1343, death: 1416, description: "English anchoress, first woman to write in English", works: "Revelations of Divine Love", wikipedia: "https://en.wikipedia.org/wiki/Julian_of_Norwich", tags: ["Women Authors", "Philosophy"] },
  { name: "Catherine of Siena", birth: 1347, death: 1380, description: "Dominican mystic, Doctor of the Church", works: "Dialogue, 400+ letters", wikipedia: "https://en.wikipedia.org/wiki/Catherine_of_Siena", tags: ["Women Authors", "Philosophy", "Patrons & Politics"] },
  { name: "Christine de Pizan", birth: 1364, death: 1430, description: "First professional woman writer", works: "City of Ladies", wikipedia: "https://en.wikipedia.org/wiki/Christine_de_Pizan", tags: ["Women Authors", "Humanism", "Philosophy"] },
  { name: "Margery Kempe", birth: 1373, death: 1438, description: "English mystic, first autobiography in English", works: "Book of Margery Kempe", wikipedia: "https://en.wikipedia.org/wiki/Margery_Kempe", tags: ["Women Authors"] },

  // Italian Humanists
  { name: "Isotta Nogarola", birth: 1418, death: 1466, description: "Veronese humanist, debated Adam & Eve", works: "Letters, dialogues", wikipedia: "https://en.wikipedia.org/wiki/Isotta_Nogarola", tags: ["Women Authors", "Humanism"] },
  { name: "Battista Malatesta", birth: 1383, death: 1450, description: "Humanist, delivered oration to Emperor", works: "Orations", wikipedia: "https://en.wikipedia.org/wiki/Battista_da_Montefeltro_Malatesta", tags: ["Women Authors", "Humanism"] },
  { name: "Costanza Varano", birth: 1426, death: 1447, description: "Child prodigy, Latin orator", works: "Orations", wikipedia: "https://en.wikipedia.org/wiki/Costanza_Varano", tags: ["Women Authors", "Humanism"] },
  { name: "Lucrezia Tornabuoni", birth: 1427, death: 1482, description: "Lorenzo de' Medici's mother, poet & patron", works: "Laude, sacred poetry", wikipedia: "https://en.wikipedia.org/wiki/Lucrezia_Tornabuoni", tags: ["Women Authors", "Patrons & Politics"] },
  { name: "Cassandra Fedele", birth: 1465, death: 1558, description: "Venetian prodigy, addressed Doge & scholars", works: "Orations, letters", wikipedia: "https://en.wikipedia.org/wiki/Cassandra_Fedele", tags: ["Women Authors", "Humanism"] },
  { name: "Laura Cereta", birth: 1469, death: 1499, description: "Brescian humanist, defender of women's education", works: "Letters", wikipedia: "https://en.wikipedia.org/wiki/Laura_Cereta", tags: ["Women Authors", "Humanism"] },
  { name: "Isabella d'Este", birth: 1474, death: 1539, description: "First Lady of the Renaissance, art patron", works: "Letters", wikipedia: "https://en.wikipedia.org/wiki/Isabella_d%27Este", tags: ["Women Authors", "Patrons & Politics", "Humanism"] },

  // Renaissance Poets & Writers
  { name: "Beatriz Galindo", birth: 1465, death: 1534, description: "La Latina - tutored Queen Isabella", works: "Commentaries on Aristotle", wikipedia: "https://en.wikipedia.org/wiki/Beatriz_Galindo", tags: ["Women Authors", "Humanism"] },
  { name: "Vittoria Colonna", birth: 1490, death: 1547, description: "Greatest Italian woman poet, Michelangelo's friend", works: "Rime", wikipedia: "https://en.wikipedia.org/wiki/Vittoria_Colonna", tags: ["Women Authors", "Reformation"] },
  { name: "Marguerite de Navarre", birth: 1492, death: 1549, description: "Queen, protected reformers, wrote tales", works: "Heptaméron", wikipedia: "https://en.wikipedia.org/wiki/Marguerite_de_Navarre", tags: ["Women Authors", "Reformation", "Patrons & Politics"] },
  { name: "Veronica Gambara", birth: 1485, death: 1550, description: "Italian poet, ruler of Correggio", works: "Rime", wikipedia: "https://en.wikipedia.org/wiki/Veronica_Gambara", tags: ["Women Authors", "Patrons & Politics"] },
  { name: "Gaspara Stampa", birth: 1523, death: 1554, description: "Venetian courtesan-poet, love sonnets", works: "Rime", wikipedia: "https://en.wikipedia.org/wiki/Gaspara_Stampa", tags: ["Women Authors"] },
  { name: "Louise Labé", birth: 1524, death: 1566, description: "Lyonnaise poet, belle cordière", works: "Sonnets, Débat de Folie et d'Amour", wikipedia: "https://en.wikipedia.org/wiki/Louise_Lab%C3%A9", tags: ["Women Authors"] },
  { name: "Teresa of Ávila", birth: 1515, death: 1582, description: "Carmelite mystic, Doctor of the Church", works: "Interior Castle", wikipedia: "https://en.wikipedia.org/wiki/Teresa_of_%C3%81vila", tags: ["Women Authors", "Reformation", "Philosophy"] },
  { name: "Sofonisba Anguissola", birth: 1532, death: 1625, description: "First famous woman painter, self-portraits", works: "Self-portraits, letters", wikipedia: "https://en.wikipedia.org/wiki/Sofonisba_Anguissola", tags: ["Women Authors"] },
  { name: "Veronica Franco", birth: 1546, death: 1591, description: "Venetian courtesan, poet, defended women", works: "Terze rime", wikipedia: "https://en.wikipedia.org/wiki/Veronica_Franco", tags: ["Women Authors"] },
  { name: "Mary Sidney", birth: 1561, death: 1621, description: "Countess of Pembroke, patron, translator", works: "Psalms, Antonie", wikipedia: "https://en.wikipedia.org/wiki/Mary_Sidney", tags: ["Women Authors", "Patrons & Politics"] },
  { name: "Sophie Brahe", birth: 1559, death: 1643, description: "Danish astronomer, Tycho's sister", works: "Astronomical observations", wikipedia: "https://en.wikipedia.org/wiki/Sophia_Brahe", tags: ["Women Authors", "Science"] },
  { name: "Moderata Fonte", birth: 1555, death: 1592, description: "Venetian author, proto-feminist", works: "Worth of Women", wikipedia: "https://en.wikipedia.org/wiki/Moderata_Fonte", tags: ["Women Authors", "Philosophy"] },
  { name: "Lucrezia Marinella", birth: 1571, death: 1653, description: "Venetian philosopher, defended women", works: "Nobility and Excellence of Women", wikipedia: "https://en.wikipedia.org/wiki/Lucrezia_Marinella", tags: ["Women Authors", "Philosophy"] },

  // Seventeenth Century
  { name: "Aemilia Lanyer", birth: 1569, death: 1645, description: "First English woman to publish poetry collection", works: "Salve Deus Rex Judaeorum", wikipedia: "https://en.wikipedia.org/wiki/Aemilia_Lanyer", tags: ["Women Authors"] },
  { name: "Marie de Gournay", birth: 1565, death: 1645, description: "Montaigne's 'adopted daughter', feminist", works: "Equality of Men and Women", wikipedia: "https://en.wikipedia.org/wiki/Marie_de_Gournay", tags: ["Women Authors", "Philosophy"] },
  { name: "Elizabeth Cary", birth: 1585, death: 1639, description: "First English woman to write original play", works: "Tragedy of Mariam", wikipedia: "https://en.wikipedia.org/wiki/Elizabeth_Cary,_Viscountess_Falkland", tags: ["Women Authors"] },
  { name: "Mary Wroth", birth: 1587, death: 1651, description: "First English woman to write prose romance", works: "Urania", wikipedia: "https://en.wikipedia.org/wiki/Mary_Wroth", tags: ["Women Authors"] },
  { name: "Anna Maria van Schurman", birth: 1607, death: 1678, description: "Dutch polymath, knew 14 languages", works: "Opuscula", wikipedia: "https://en.wikipedia.org/wiki/Anna_Maria_van_Schurman", tags: ["Women Authors", "Humanism", "Philosophy"] },
  { name: "Princess Elisabeth", birth: 1618, death: 1680, description: "Descartes' correspondent, philosopher", works: "Correspondence", wikipedia: "https://en.wikipedia.org/wiki/Elisabeth_of_the_Palatinate", tags: ["Women Authors", "Philosophy"] },
  { name: "Margaret Cavendish", birth: 1623, death: 1673, description: "Prolific writer, natural philosopher", works: "Blazing World", wikipedia: "https://en.wikipedia.org/wiki/Margaret_Cavendish,_Duchess_of_Newcastle-upon-Tyne", tags: ["Women Authors", "Philosophy", "Science"] },
  { name: "Anne Conway", birth: 1631, death: 1679, description: "Philosopher, influenced Leibniz", works: "Principles of Philosophy", wikipedia: "https://en.wikipedia.org/wiki/Anne_Conway_(philosopher)", tags: ["Women Authors", "Philosophy"] },
  { name: "Sor Juana", birth: 1648, death: 1695, description: "Mexican nun-poet, defended women's intellect", works: "Respuesta a Sor Filotea", wikipedia: "https://en.wikipedia.org/wiki/Sor_Juana_In%C3%A9s_de_la_Cruz", tags: ["Women Authors", "Philosophy"] },
  { name: "Aphra Behn", birth: 1640, death: 1689, description: "First professional English woman writer", works: "Oroonoko", wikipedia: "https://en.wikipedia.org/wiki/Aphra_Behn", tags: ["Women Authors"] },
  { name: "Mary Astell", birth: 1666, death: 1731, description: "First English feminist philosopher", works: "A Serious Proposal", wikipedia: "https://en.wikipedia.org/wiki/Mary_Astell", tags: ["Women Authors", "Philosophy"] },
  { name: "Maria Sibylla Merian", birth: 1647, death: 1717, description: "Entomologist, traveled to Suriname", works: "Metamorphosis Insectorum", wikipedia: "https://en.wikipedia.org/wiki/Maria_Sibylla_Merian", tags: ["Women Authors", "Science"] },
];

const START_YEAR = 1300;
const END_YEAR = 1750;
const YEAR_RANGE = END_YEAR - START_YEAR;

export default function LifespanTimeline() {
  const [selectedTag, setSelectedTag] = useState<string>("Humanism");
  const [selected, setSelected] = useState<Person | null>(null);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const yearToPercent = (year: number) => ((year - START_YEAR) / YEAR_RANGE) * 100;

  // Filter and sort people by selected tag
  const filteredPeople = useMemo(() => {
    return people
      .filter(p => p.tags.includes(selectedTag))
      .sort((a, b) => a.birth - b.birth);
  }, [selectedTag]);

  // Get color for current tag
  const tagColor = TAGS.find(t => t.name === selectedTag)?.color || "#666";

  // Count people per tag
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    TAGS.forEach(tag => {
      counts[tag.name] = people.filter(p => p.tags.includes(tag.name)).length;
    });
    return counts;
  }, []);

  // Generate tick marks for centuries
  const centuries = [1300, 1400, 1500, 1600, 1700];

  return (
    <div style={{ background: '#fdfcf9', padding: '24px 0' }}>
      {/* Tag selector */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        padding: '0 24px 24px 24px',
        borderBottom: '1px solid #e8e4dc',
        marginBottom: '24px',
      }}>
        {TAGS.map(tag => (
          <button
            key={tag.name}
            onClick={() => {
              setSelectedTag(tag.name);
              setSelected(null);
            }}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s',
              background: selectedTag === tag.name ? tag.color : '#f5f0e8',
              color: selectedTag === tag.name ? '#fff' : '#555',
            }}
          >
            {tag.name} ({tagCounts[tag.name]})
          </button>
        ))}
      </div>

      {/* Year axis */}
      <div style={{
        position: 'relative',
        height: '40px',
        marginBottom: '8px',
        marginLeft: '160px',
        marginRight: '24px',
      }}>
        {centuries.map(year => (
          <div
            key={year}
            style={{
              position: 'absolute',
              left: `${yearToPercent(year)}%`,
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: '#666',
            }}>
              {year}
            </div>
            <div style={{
              width: '1px',
              height: '8px',
              background: '#ccc',
              margin: '4px auto 0',
            }} />
          </div>
        ))}
        {/* Hover year indicator */}
        {hoveredYear && (
          <div
            style={{
              position: 'absolute',
              left: `${yearToPercent(hoveredYear)}%`,
              top: '0',
              transform: 'translateX(-50%)',
              background: '#1a1612',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            {hoveredYear}
          </div>
        )}
      </div>

      {/* People bars */}
      <div style={{ position: 'relative' }}>
        {filteredPeople.map((person) => {
          const left = yearToPercent(person.birth);
          const width = yearToPercent(person.death) - left;
          const isSelected = selected?.name === person.name;
          // Use selected tag color, but show other tag dots
          const otherTags = person.tags.filter(t => t !== selectedTag);

          return (
            <div
              key={person.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '32px',
                marginBottom: '4px',
              }}
            >
              {/* Name label */}
              <div style={{
                width: '160px',
                paddingRight: '12px',
                paddingLeft: '24px',
                textAlign: 'right',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: isSelected ? tagColor : '#555',
                fontWeight: isSelected ? 600 : 400,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
                {person.name}
              </div>

              {/* Timeline area */}
              <div
                style={{
                  flex: 1,
                  position: 'relative',
                  height: '100%',
                  marginRight: '24px',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const percent = x / rect.width;
                  const year = Math.round(START_YEAR + percent * YEAR_RANGE);
                  setHoveredYear(year);
                }}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Grid lines for centuries */}
                {centuries.map(year => (
                  <div
                    key={year}
                    style={{
                      position: 'absolute',
                      left: `${yearToPercent(year)}%`,
                      top: 0,
                      bottom: 0,
                      width: '1px',
                      background: '#e8e4dc',
                    }}
                  />
                ))}

                {/* Lifespan bar */}
                <div
                  onClick={() => setSelected(isSelected ? null : person)}
                  style={{
                    position: 'absolute',
                    left: `${left}%`,
                    width: `${width}%`,
                    top: '4px',
                    height: '24px',
                    background: isSelected ? tagColor : `${tagColor}cc`,
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    boxShadow: isSelected ? `0 2px 8px ${tagColor}66` : 'none',
                    border: isSelected ? '2px solid #1a1612' : '2px solid transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 6px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform = 'scaleY(1.15)';
                      e.currentTarget.style.background = tagColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform = 'scaleY(1)';
                      e.currentTarget.style.background = `${tagColor}cc`;
                    }
                  }}
                >
                  {/* Birth year */}
                  <span style={{
                    fontSize: '10px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#fff',
                    fontWeight: 500,
                    opacity: width > 8 ? 1 : 0,
                  }}>
                    {person.birth}
                  </span>

                  {/* Other tag indicators */}
                  {otherTags.length > 0 && width > 12 && (
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {otherTags.map(t => {
                        const otherColor = TAGS.find(tag => tag.name === t)?.color || '#999';
                        return (
                          <div
                            key={t}
                            title={t}
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: otherColor,
                              border: '1px solid rgba(255,255,255,0.5)',
                            }}
                          />
                        );
                      })}
                    </div>
                  )}

                  {/* Death year */}
                  <span style={{
                    fontSize: '10px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#fff',
                    fontWeight: 500,
                    opacity: width > 8 ? 1 : 0,
                  }}>
                    {person.death}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected person detail panel */}
      {selected && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          padding: '20px 24px',
          maxWidth: '500px',
          width: 'calc(100% - 48px)',
          zIndex: 100,
          border: `3px solid ${tagColor}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '24px',
                fontWeight: 600,
                color: '#1a1612',
                margin: 0,
              }}>
                {selected.name}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#888',
                margin: '4px 0 0 0',
              }}>
                {selected.birth}–{selected.death} ({selected.death - selected.birth} years)
              </p>
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                color: '#888',
                cursor: 'pointer',
                padding: '0',
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
            {selected.tags.map(t => {
              const tColor = TAGS.find(tag => tag.name === t)?.color || '#666';
              return (
                <span
                  key={t}
                  onClick={() => setSelectedTag(t)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    background: t === selectedTag ? tColor : `${tColor}22`,
                    color: t === selectedTag ? '#fff' : tColor,
                    cursor: 'pointer',
                  }}
                >
                  {t}
                </span>
              );
            })}
          </div>

          <p style={{
            fontFamily: 'Newsreader, serif',
            fontSize: '15px',
            color: '#444',
            margin: '12px 0 8px 0',
          }}>
            {selected.description}
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: '#666',
            margin: 0,
          }}>
            <strong>Key work:</strong> <em>{selected.works}</em>
          </p>
          {selected.wikipedia && (
            <a
              href={selected.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '12px',
                padding: '6px 12px',
                background: '#f5f0e8',
                color: '#9e4a3a',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
              }}
            >
              Wikipedia →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
