import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ChevronDown, Lightbulb, AlertTriangle, Info, Terminal, GitBranch } from 'lucide-react'

// ─── Block Renderers ───

function HeadingBlock({ block, topicColor }) {
  const fontSize = block.level === 2 ? '1.35rem' : '1.1rem'
  return (
    <h3 style={{ fontSize, color: topicColor, display: 'flex', alignItems: 'center', gap: '10px', margin: '28px 0 12px' }}>
      {block.emoji && <span style={{ fontSize: '1.4em' }}>{block.emoji}</span>}
      {block.text}
    </h3>
  )
}

function ParagraphBlock({ block }) {
  return (
    <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, fontSize: '0.95rem', margin: '8px 0' }}>
      {block.text}
    </p>
  )
}

function TableBlock({ block, topicColor }) {
  return (
    <div style={{ overflowX: 'auto', margin: '16px 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
        <thead>
          <tr>
            {block.headers.map((h, i) => (
              <th key={i} style={{
                textAlign: 'left', padding: '10px 14px',
                background: `${topicColor}20`, color: topicColor,
                borderBottom: `2px solid ${topicColor}40`, fontWeight: 700,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: '9px 14px', color: 'var(--color-text-secondary)',
                  borderBottom: '1px solid var(--color-border)',
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function InfoboxBlock({ block, t }) {
  const variants = {
    tip: { icon: <Lightbulb size={18} />, border: '#10b981', bg: 'rgba(16,185,129,0.08)', label: t('extSuggestion') },
    warning: { icon: <AlertTriangle size={18} />, border: '#f59e0b', bg: 'rgba(245,158,11,0.08)', label: t('extWarning') },
    note: { icon: <Info size={18} />, border: '#3b82f6', bg: 'rgba(59,130,246,0.08)', label: t('extNote') },
    exam: { icon: <BookOpen size={18} />, border: '#a855f7', bg: 'rgba(168,85,247,0.08)', label: t('extExamTip') },
  }
  const v = variants[block.variant] || variants.note
  return (
    <div style={{
      margin: '16px 0', padding: '16px 18px', borderLeft: `4px solid ${v.border}`,
      background: v.bg, borderRadius: '0 8px 8px 0',
    }}>
      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: v.border, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        {v.label}
      </div>
      <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
        {block.title && <strong>{block.title}: </strong>}
        {block.content}
      </div>
    </div>
  )
}

function CodeBlock({ block }) {
  return (
    <div style={{
      margin: '14px 0', background: '#0d1117', borderRadius: '10px',
      border: '1px solid rgba(139,92,246,0.3)', overflow: 'hidden',
    }}>
      {block.title && (
        <div style={{ padding: '8px 14px', background: 'rgba(139,92,246,0.1)', fontSize: '0.78rem', color: '#a78bfa', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Terminal size={14} /> {block.title}
        </div>
      )}
      <pre style={{ padding: '14px 16px', margin: 0, fontSize: '0.85rem', overflowX: 'auto', fontFamily: "'Fira Code', 'Cascadia Code', monospace" }}>
        <code>
          <span style={{ color: '#10b981' }}>{block.prompt}</span>
          {block.output && (
            <>
              {'\n'}
              <span style={{ color: '#9ca3af' }}>{block.output}</span>
            </>
          )}
        </code>
      </pre>
    </div>
  )
}

function TimelineBlock({ block, topicColor }) {
  return (
    <div style={{ margin: '20px 0', paddingLeft: '24px', borderLeft: `3px solid ${topicColor}40` }}>
      {block.events.map((ev, i) => (
        <div key={i} style={{ position: 'relative', marginBottom: '20px', paddingLeft: '20px' }}>
          <div style={{
            position: 'absolute', left: '-33px', top: '2px',
            width: '20px', height: '20px', borderRadius: '50%',
            background: topicColor, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.6rem', fontWeight: 900, color: '#0d1117',
          }}>{i + 1}</div>
          <div style={{ fontWeight: 800, color: topicColor, fontSize: '0.9rem' }}>{ev.year} — {ev.title}</div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', margin: '4px 0 0', lineHeight: 1.6 }}>{ev.desc}</p>
        </div>
      ))}
    </div>
  )
}

function DiagramBlock({ block, topicColor }) {
  return (
    <div style={{ margin: '20px 0', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
      {block.title && (
        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: topicColor, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GitBranch size={16} /> {block.title}
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
        {block.boxes.map((box, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{
              padding: '10px 18px', borderRadius: '10px',
              background: `${box.color || topicColor}20`,
              border: `2px solid ${box.color || topicColor}60`,
              fontWeight: 700, fontSize: '0.88rem', color: box.color || topicColor, minWidth: '100px',
            }}>{box.label}</div>
            {box.children && (
              <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                <div style={{ width: '2px', height: '12px', background: `${box.color || topicColor}40` }} />
                {box.children.map((child, ci) => (
                  <div key={ci} style={{
                    padding: '5px 14px', borderRadius: '8px', fontSize: '0.8rem',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}>{child}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ComparisonBlock({ block, topicColor }) {
  return (
    <div className="comparison-block" style={{ margin: '16px 0' }}>
      <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#10b981', marginBottom: '10px' }}>{block.left.title}</div>
        <ul style={{ margin: 0, paddingLeft: '18px', listStyle: 'none' }}>
          {block.left.items.map((item, i) => (
            <li key={i} style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', padding: '3px 0' }}>✅ {item}</li>
          ))}
        </ul>
      </div>
      <div style={{ alignSelf: 'center', textAlign: 'center', fontWeight: 900, fontSize: '1.2rem', color: 'var(--color-text-muted)', padding: '4px' }}>VS</div>
      <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
        <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ef4444', marginBottom: '10px' }}>{block.right.title}</div>
        <ul style={{ margin: 0, paddingLeft: '18px', listStyle: 'none' }}>
          {block.right.items.map((item, i) => (
            <li key={i} style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', padding: '3px 0' }}>🔸 {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function StoryBlock({ block }) {
  return (
    <div style={{
      margin: '16px 0', padding: '18px 20px', borderRadius: '12px',
      background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.06))',
      border: '1px solid rgba(139,92,246,0.2)',
    }}>
      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#a78bfa', marginBottom: '8px' }}>
        📖 {block.title}
      </div>
      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
        {block.text}
      </p>
    </div>
  )
}

function ListBlock({ block, topicColor }) {
  return (
    <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
      {block.items.map((item, i) => (
        <li key={i} style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', padding: '4px 0', lineHeight: 1.6 }}>
          {typeof item === 'string' ? item : (
            <><strong style={{ color: topicColor }}>{item.term}</strong> — {item.desc}</>
          )}
        </li>
      ))}
    </ul>
  )
}

// ─── Block Dispatcher ───

function RenderBlock({ block, topicColor, index, t }) {
  const renderers = {
    heading: HeadingBlock,
    paragraph: ParagraphBlock,
    table: TableBlock,
    infobox: InfoboxBlock,
    code: CodeBlock,
    timeline: TimelineBlock,
    diagram: DiagramBlock,
    comparison: ComparisonBlock,
    story: StoryBlock,
    list: ListBlock,
  }
  const Component = renderers[block.type]
  if (!Component) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.5) }}
    >
      <Component block={block} topicColor={topicColor} t={t} />
    </motion.div>
  )
}

// ─── Main Component ───

export default function ExtendedContent({ data, topicColor, t }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!data || !data.sections || data.sections.length === 0) return null

  return (
    <div style={{ margin: '24px 0' }}>
      {/* Toggle Button — bouncy deep dive */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        animate={!isExpanded ? {
          scale: [1, 1.025, 1, 1.025, 1],
          boxShadow: [
            `0 0 0px ${topicColor}00`,
            `0 0 12px ${topicColor}60`,
            `0 0 0px ${topicColor}00`,
            `0 0 12px ${topicColor}60`,
            `0 0 0px ${topicColor}00`,
          ],
        } : { scale: 1, boxShadow: `0 0 0px ${topicColor}00` }}
        transition={!isExpanded ? {
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        } : { duration: 0.2 }}
        style={{
          width: '100%', padding: '16px 20px',
          background: isExpanded
            ? `${topicColor}15`
            : `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, ${topicColor}0d 100%)`,
          border: `2px solid ${isExpanded ? topicColor + '60' : topicColor + '35'}`,
          borderRadius: '14px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          color: isExpanded ? topicColor : 'var(--color-text-secondary)',
          transition: 'all 0.3s ease',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 700, fontSize: '1rem' }}>
          <BookOpen size={20} style={{ color: topicColor }} />
          {t('deepDiveLabel') || '📚 Deep Dive'} — {data.title}
        </span>
        {/* Right side CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* "Apri" label — only when collapsed */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.span
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: [0.6, 1, 0.6], x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ opacity: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }, x: { duration: 0.2 } }}
                style={{
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.08em',
                  color: topicColor, textTransform: 'uppercase',
                }}
              >
                {t('expand') || 'Apri'}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Bouncy chevron inside glowing ring */}
          <motion.div
            animate={isExpanded
              ? { scale: 1, boxShadow: `0 0 0px ${topicColor}00` }
              : {
                  scale: [1, 1.15, 1, 1.15, 1],
                  boxShadow: [
                    `0 0 0px ${topicColor}00`,
                    `0 0 10px ${topicColor}90`,
                    `0 0 0px ${topicColor}00`,
                    `0 0 10px ${topicColor}90`,
                    `0 0 0px ${topicColor}00`,
                  ],
                }
            }
            transition={isExpanded
              ? { duration: 0.3 }
              : { duration: 1.6, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }
            }
            style={{
              width: '34px', height: '34px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: isExpanded ? `${topicColor}25` : `${topicColor}12`,
              border: `2px solid ${isExpanded ? topicColor + 'aa' : topicColor + '50'}`,
            }}
          >
            <motion.span
              animate={isExpanded
                ? { rotate: 180, y: 0 }
                : { rotate: 0, y: [0, 4, 0, 4, 0] }
              }
              transition={isExpanded
                ? { duration: 0.35, ease: 'easeInOut' }
                : { y: { duration: 1.2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' } }
              }
              style={{ display: 'flex', color: isExpanded ? topicColor : topicColor + 'cc' }}
            >
              <ChevronDown size={20} />
            </motion.span>
          </motion.div>
        </div>
      </motion.button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '24px 20px', marginTop: '2px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '0 0 12px 12px',
              border: `1px solid ${topicColor}20`,
              borderTop: 'none',
            }}>
              {data.sections.map((block, i) => (
                <RenderBlock key={i} block={block} topicColor={topicColor} index={i} t={t} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
