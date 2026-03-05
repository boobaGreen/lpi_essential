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
  const sectionCount = data?.sections?.length ?? 0

  if (!data || !data.sections || data.sections.length === 0) return null

  return (
    <div style={{ margin: '32px 0' }}>

      {/* ── TRIGGER CARD ── */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ y: -3, boxShadow: `0 8px 32px ${topicColor}30` }}
        whileTap={{ scale: 0.98 }}
        animate={!isExpanded ? {
          boxShadow: [
            `0 0 0px ${topicColor}00`,
            `0 4px 24px ${topicColor}45`,
            `0 0 0px ${topicColor}00`,
          ],
        } : {}}
        transition={!isExpanded ? {
          duration: 2.8,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: 'easeInOut',
        } : { duration: 0.25 }}
        style={{
          width: '100%',
          background: isExpanded
            ? `linear-gradient(135deg, ${topicColor}20 0%, ${topicColor}08 100%)`
            : `linear-gradient(135deg, rgba(255,255,255,0.07) 0%, ${topicColor}14 100%)`,
          border: `2px solid ${isExpanded ? topicColor + '80' : topicColor + '45'}`,
          borderRadius: isExpanded ? '14px 14px 0 0' : '14px',
          cursor: 'pointer',
          padding: 0,
          overflow: 'hidden',
          textAlign: 'left',
          transition: 'border-color 0.3s ease, border-radius 0.3s ease, background 0.3s ease',
        }}
      >
        {/* Top accent bar — vivid gradient stripe */}
        {!isExpanded && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{
              height: '3px',
              background: `linear-gradient(90deg, ${topicColor}, ${topicColor}60, transparent)`,
              transformOrigin: 'left',
            }}
          />
        )}

        <div style={{
          display: 'flex', alignItems: 'center', gap: '14px',
          padding: '18px 20px',
        }}>
          {/* Icon container */}
          <motion.div
            animate={!isExpanded ? {
              rotate: [0, -8, 8, -5, 0],
            } : { rotate: 0 }}
            transition={!isExpanded ? {
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 4,
              ease: 'easeInOut',
            } : {}}
            style={{
              width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `${topicColor}20`,
              border: `2px solid ${topicColor}50`,
              fontSize: '1.3rem',
            }}
          >
            📚
          </motion.div>

          {/* Text content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Badge row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '4px',
                padding: '2px 10px', borderRadius: '99px',
                background: `${topicColor}25`,
                border: `1px solid ${topicColor}60`,
                fontSize: '0.68rem', fontWeight: 800,
                color: topicColor, textTransform: 'uppercase', letterSpacing: '0.1em',
              }}>
                {isExpanded ? '▲ ' : '▼ '}{t('deepDiveBadge') || 'Deep Dive'}
              </span>
              <span style={{
                fontSize: '0.7rem', color: 'var(--color-text-muted)',
                fontWeight: 600,
              }}>
                {sectionCount} {t('deepDiveSections') || 'sezioni'}
              </span>
            </div>
            {/* Title */}
            <div style={{
              fontWeight: 700, fontSize: '0.95rem',
              color: isExpanded ? topicColor : 'var(--color-text-primary)',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              transition: 'color 0.3s ease',
            }}>
              {data.title}
            </div>
            {/* Subtitle — only when collapsed */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    fontSize: '0.78rem', color: 'var(--color-text-muted)',
                    marginTop: '2px', overflow: 'hidden',
                  }}
                >
                  {t('deepDiveHint') || 'Approfondisci gli argomenti avanzati →'}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {/* Explicit CTA pill */}
            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: '6px 14px', borderRadius: '8px',
                    background: topicColor,
                    color: '#0a0e1a',
                    fontSize: '0.75rem', fontWeight: 800,
                    letterSpacing: '0.05em',
                    display: 'none', // hidden on mobile, shown via CSS
                  }}
                  className="deep-dive-cta"
                >
                  {t('expand') || 'Apri'}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chevron circle */}
            <motion.div
              animate={isExpanded
                ? { scale: 1 }
                : { scale: [1, 1.18, 1, 1.18, 1] }
              }
              transition={isExpanded
                ? { duration: 0.3 }
                : { duration: 1.4, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }
              }
              style={{
                width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isExpanded ? topicColor : `${topicColor}18`,
                border: `2px solid ${isExpanded ? topicColor : topicColor + '60'}`,
                boxShadow: isExpanded ? 'none' : `0 0 12px ${topicColor}50`,
                transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ display: 'flex', color: isExpanded ? '#0a0e1a' : topicColor }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.button>

      {/* ── EXPANDED CONTENT ── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '24px 20px',
              background: `linear-gradient(180deg, ${topicColor}08 0%, transparent 60px)`,
              borderRadius: '0 0 14px 14px',
              border: `2px solid ${topicColor}45`,
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
