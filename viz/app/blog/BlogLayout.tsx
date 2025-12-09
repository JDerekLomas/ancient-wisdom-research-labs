import Link from "next/link";
import Comments from "@/components/Comments";

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  tag: string;
  slug: string;
  date?: string;
  nextPost?: { href: string; title: string };
  prevPost?: { href: string; title: string };
}

const tagColors: Record<string, { bg: string; text: string }> = {
  Research: { bg: '#f5f0e8', text: '#9e4a3a' },
  "Research Report": { bg: '#f5f0e8', text: '#9e4a3a' },
  Data: { bg: '#e8f0f5', text: '#546b8a' },
  "Data Visualization": { bg: '#e8f0f5', text: '#546b8a' },
  Methods: { bg: '#f0f5e8', text: '#6b7c5a' },
  Visualization: { bg: '#f5e8f0', text: '#8a5475' },
  Mission: { bg: '#f5f0e8', text: '#9e4a3a' },
  Draft: { bg: '#f5f5f5', text: '#888' },
};

export default function BlogLayout({ children, title, tag, slug, date = "December 2025", nextPost, prevPost }: BlogLayoutProps) {
  const colors = tagColors[tag] || tagColors.Research;

  return (
    <main style={{ background: '#fdfcf9', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        borderBottom: '1px solid #e8e4dc',
        padding: '16px 24px',
      }}>
        <div style={{
          maxWidth: '680px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Link href="/blog" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: '#666',
            textDecoration: 'none',
          }}>
            ← RESEARCH ESSAYS
          </Link>
          <a
            href="https://www.ancientwisdomtrust.org/become-a-patron"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              color: '#fff',
              background: '#9e4a3a',
              padding: '8px 16px',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Support This Work
          </a>
        </div>
      </nav>

      {/* Article */}
      <article style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '60px 24px 80px',
      }}>
        {/* Meta */}
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.05em',
            padding: '4px 10px',
            borderRadius: '4px',
            background: colors.bg,
            color: colors.text,
          }}>
            {tag.toUpperCase()}
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: '#999',
          }}>{date}</span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '42px',
          fontWeight: 400,
          color: '#1a1612',
          lineHeight: 1.2,
          marginBottom: '48px',
        }}>
          {title}
        </h1>

        {/* Content */}
        <div className="prose">
          {children}
        </div>

        {/* Comments */}
        <Comments postSlug={slug} />

        {/* Navigation */}
        {(prevPost || nextPost) && (
          <div style={{
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: '1px solid #e8e4dc',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            {prevPost ? (
              <Link href={prevPost.href} style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#9e4a3a',
                textDecoration: 'none',
              }}>
                ← {prevPost.title}
              </Link>
            ) : <span />}
            {nextPost && (
              <Link href={nextPost.href} style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: '#9e4a3a',
                textDecoration: 'none',
              }}>
                {nextPost.title} →
              </Link>
            )}
          </div>
        )}
      </article>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #e8e4dc',
        padding: '40px 24px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          color: '#888',
        }}>
          Translations at <a href="https://sourcelibrary.org" style={{ color: '#666' }}>Source Library</a> · Support our work at <a href="https://www.ancientwisdomtrust.org/become-a-patron" style={{ color: '#666' }}>Ancient Wisdom Trust</a>
        </p>
      </footer>
    </main>
  );
}
