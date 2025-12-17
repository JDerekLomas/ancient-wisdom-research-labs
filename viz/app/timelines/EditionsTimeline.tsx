"use client";

import { useState } from "react";

interface Author {
  name: string;
  start: number;
  end: number;
  editions: number;
  type: string;
}

interface Category {
  name: string;
  color: string;
  authors: Author[];
}

const data: Category[] = [
  {
    name: "Classical Authors",
    color: "#9e4a3a",
    authors: [
      { name: "Cicero", start: 1465, end: 1700, editions: 4952, type: "Roman orator & philosopher" },
      { name: "Aristotle", start: 1469, end: 1698, editions: 3051, type: "Greek philosopher" },
      { name: "Ovid", start: 1471, end: 1700, editions: 1492, type: "Roman poet" },
      { name: "Virgil", start: 1469, end: 1700, editions: 1338, type: "Roman poet" },
      { name: "Terence", start: 1469, end: 1700, editions: 1107, type: "Roman playwright" },
      { name: "Horace", start: 1474, end: 1700, editions: 1027, type: "Roman poet" },
      { name: "Seneca", start: 1475, end: 1700, editions: 687, type: "Roman philosopher" },
      { name: "Pliny the Elder", start: 1469, end: 1700, editions: 423, type: "Roman naturalist" },
    ]
  },
  {
    name: "Church Fathers & Medieval",
    color: "#8b5cf6",
    authors: [
      { name: "Thomas Aquinas", start: 1463, end: 1697, editions: 1119, type: "Scholastic theologian" },
      { name: "Augustine", start: 1465, end: 1700, editions: 876, type: "Church Father" },
      { name: "Bonaventure", start: 1472, end: 1700, editions: 534, type: "Franciscan theologian" },
      { name: "Duns Scotus", start: 1474, end: 1700, editions: 456, type: "Scholastic philosopher" },
      { name: "Bartolus", start: 1471, end: 1700, editions: 623, type: "Medieval jurist" },
    ]
  },
  {
    name: "Renaissance Humanists",
    color: "#546b8a",
    authors: [
      { name: "Erasmus", start: 1496, end: 1700, editions: 4379, type: "Prince of Humanists" },
      { name: "Josse Bade", start: 1491, end: 1599, editions: 1284, type: "Scholar-printer" },
      { name: "Justus Lipsius", start: 1569, end: 1700, editions: 534, type: "Neostoic philosopher" },
      { name: "Poliziano", start: 1489, end: 1700, editions: 312, type: "Italian humanist" },
    ]
  },
  {
    name: "Reformers",
    color: "#c9a86c",
    authors: [
      { name: "Melanchthon", start: 1510, end: 1698, editions: 3387, type: "Lutheran reformer" },
      { name: "Luther", start: 1517, end: 1699, editions: 1176, type: "Protestant reformer" },
      { name: "Calvin", start: 1532, end: 1700, editions: 687, type: "Reformed theologian" },
      { name: "Beza", start: 1548, end: 1700, editions: 423, type: "Calvin's successor" },
    ]
  },
  {
    name: "Scientists & Physicians",
    color: "#8b9a7d",
    authors: [
      { name: "Galen", start: 1473, end: 1700, editions: 756, type: "Greek physician" },
      { name: "Hippocrates", start: 1473, end: 1700, editions: 534, type: "Father of medicine" },
      { name: "Avicenna", start: 1473, end: 1700, editions: 423, type: "Persian polymath" },
      { name: "Euclid", start: 1482, end: 1700, editions: 312, type: "Greek mathematician" },
    ]
  },
];

const START_YEAR = 1450;
const END_YEAR = 1720;
const YEAR_RANGE = END_YEAR - START_YEAR;

export default function EditionsTimeline() {
  const [selected, setSelected] = useState<{ category: string; author: Author } | null>(null);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const yearToPercent = (year: number) => ((year - START_YEAR) / YEAR_RANGE) * 100;

  const decades = [1450, 1500, 1550, 1600, 1650, 1700];

  // Find max editions for scaling bar height
  const maxEditions = Math.max(...data.flatMap(c => c.authors.map(a => a.editions)));

  return (
    <div style={{ background: '#fdfcf9', padding: '24px 0' }}>
      {/* Year axis */}
      <div style={{
        position: 'relative',
        height: '40px',
        marginBottom: '8px',
        marginLeft: '140px',
        marginRight: '24px',
      }}>
        {decades.map(year => (
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

      {/* Note about what this shows */}
      <div style={{
        marginLeft: '140px',
        marginRight: '24px',
        marginBottom: '16px',
        padding: '12px 16px',
        background: '#f5f0e8',
        borderRadius: '6px',
        fontSize: '13px',
        fontFamily: 'Inter, sans-serif',
        color: '#666',
      }}>
        <strong>Note:</strong> Bars show when works were <em>printed</em>, not when authors lived.
        Classical authors like Cicero were printed throughout the Renaissance.
      </div>

      {/* Categories and bars */}
      {data.map((category) => (
        <div key={category.name} style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            paddingLeft: '12px',
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '3px',
              background: category.color,
              marginRight: '8px',
            }} />
            <span style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '16px',
              fontWeight: 600,
              color: '#1a1612',
            }}>
              {category.name}
            </span>
          </div>

          <div style={{ position: 'relative' }}>
            {category.authors.map((author) => {
              const left = yearToPercent(author.start);
              const width = yearToPercent(author.end) - left;
              const isSelected = selected?.author.name === author.name;
              // Scale bar height by edition count
              const heightScale = 0.5 + (author.editions / maxEditions) * 0.5;

              return (
                <div
                  key={author.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '36px',
                    marginBottom: '4px',
                  }}
                >
                  <div style={{
                    width: '140px',
                    paddingRight: '12px',
                    textAlign: 'right',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: isSelected ? category.color : '#555',
                    fontWeight: isSelected ? 600 : 400,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {author.name}
                  </div>

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
                    {decades.map(year => (
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

                    <div
                      onClick={() => setSelected(isSelected ? null : { category: category.name, author })}
                      style={{
                        position: 'absolute',
                        left: `${left}%`,
                        width: `${width}%`,
                        top: `${(1 - heightScale) * 16}px`,
                        height: `${heightScale * 28}px`,
                        background: isSelected ? category.color : `${category.color}cc`,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        boxShadow: isSelected ? `0 2px 8px ${category.color}66` : 'none',
                        border: isSelected ? '2px solid #1a1612' : '2px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.transform = 'scaleY(1.1)';
                          e.currentTarget.style.background = category.color;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.transform = 'scaleY(1)';
                          e.currentTarget.style.background = `${category.color}cc`;
                        }
                      }}
                    >
                      <span style={{
                        fontSize: '11px',
                        fontFamily: 'Inter, sans-serif',
                        color: '#fff',
                        fontWeight: 600,
                        opacity: width > 8 ? 1 : 0,
                      }}>
                        {author.editions.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Selected author detail */}
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
          maxWidth: '450px',
          width: 'calc(100% - 48px)',
          zIndex: 100,
          border: `3px solid ${data.find(c => c.name === selected.category)?.color}`,
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
                {selected.author.name}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#888',
                margin: '4px 0 0 0',
              }}>
                {selected.author.type}
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
          <div style={{
            display: 'flex',
            gap: '24px',
            marginTop: '16px',
            alignItems: 'flex-end',
          }}>
            <div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                color: data.find(c => c.name === selected.category)?.color,
                margin: 0,
              }}>
                {selected.author.editions.toLocaleString()}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                color: '#888',
                margin: '2px 0 0 0',
              }}>
                Latin editions
              </p>
            </div>
            <div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#444',
                margin: 0,
              }}>
                Printed {selected.author.start}–{selected.author.end}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: '#888',
                margin: '4px 0 0 0',
              }}>
                {selected.author.end - selected.author.start} years in print
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
