'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface CommentsProps {
  postSlug: string;
}

export default function Comments({ postSlug }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    loadComments();
  }, [postSlug]);

  async function loadComments() {
    setLoading(true);
    const { data, error } = await supabase
      .from('blog_comments')
      .select('id, author_name, content, created_at')
      .eq('post_slug', postSlug)
      .eq('approved', true)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setComments(data);
    }
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setSubmitting(true);
    const { error } = await supabase
      .from('blog_comments')
      .insert({
        post_slug: postSlug,
        author_name: name.trim(),
        author_email: email.trim() || null,
        content: content.trim(),
      });

    if (!error) {
      setSuccess(true);
      setName('');
      setContent('');
      setEmail('');
      loadComments();
      setTimeout(() => setSuccess(false), 3000);
    }
    setSubmitting(false);
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <section style={{
      marginTop: '64px',
      paddingTop: '48px',
      borderTop: '1px solid #e8e4dc',
    }}>
      <h2 style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: '28px',
        fontWeight: 400,
        color: '#1a1612',
        marginBottom: '32px',
      }}>
        Discussion
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} style={{
        background: '#f8f6f3',
        padding: '24px',
        borderRadius: '8px',
        marginBottom: '40px',
      }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: '#666',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: '#666',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Email (optional, not published)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            fontWeight: 500,
            color: '#666',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Comment *
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            style={{
              width: '100%',
              padding: '10px 14px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          style={{
            background: submitting ? '#ccc' : '#9e4a3a',
            color: '#fff',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            cursor: submitting ? 'not-allowed' : 'pointer',
          }}
        >
          {submitting ? 'Posting...' : 'Post Comment'}
        </button>

        {success && (
          <p style={{
            marginTop: '12px',
            color: '#2e7d32',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
          }}>
            Comment posted successfully!
          </p>
        )}
      </form>

      {/* Comments List */}
      {loading ? (
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#888',
        }}>
          Loading comments...
        </p>
      ) : comments.length === 0 ? (
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          color: '#888',
          fontStyle: 'italic',
        }}>
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} style={{
              marginBottom: '24px',
              paddingBottom: '24px',
              borderBottom: '1px solid #e8e4dc',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '8px',
              }}>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#333',
                }}>
                  {comment.author_name}
                </span>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#999',
                }}>
                  {formatDate(comment.created_at)}
                </span>
              </div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#444',
                margin: 0,
                whiteSpace: 'pre-wrap',
              }}>
                {comment.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
