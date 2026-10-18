import { useEffect, useRef } from 'react';

// Skills laid out like points in an embedding space: related skills sit close
// together. The cursor acts as a query and the nearest points are "retrieved",
// the same idea behind semantic search.
const CLUSTERS = [
  {
    x: 0.26,
    y: 0.27,
    terms: ['LLM integration', 'AI agents', 'Prompt engineering', 'Structured extraction', 'Text-to-query', 'Local LLMs'],
  },
  {
    x: 0.75,
    y: 0.25,
    terms: ['RAG pipelines', 'Embeddings', 'Semantic search', 'FAISS', 'LangChain', 'ChromaDB', 'Pinecone', 'Document chunking'],
  },
  {
    x: 0.25,
    y: 0.75,
    terms: ['Computer vision', 'OpenCV', 'TensorFlow', 'Medical image analysis', 'Face recognition', 'scikit-learn'],
  },
  {
    x: 0.76,
    y: 0.76,
    terms: ['FastAPI', 'Docker', 'REST APIs', 'CI/CD', 'Model deployment', 'Django'],
  },
  {
    x: 0.5,
    y: 0.5,
    terms: ['Speech-to-text', 'NLP', 'Text categorization', 'Hugging Face'],
  },
];

const TOP_K = 4;

function mulberry32(seed) {
  let s = seed;
  return function next() {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(7);

const POINTS = CLUSTERS.flatMap((cluster) =>
  cluster.terms.map((label, i) => {
    const angle = (i / cluster.terms.length) * Math.PI * 2 + rand() * 0.8;
    const radius = 0.075 + rand() * 0.07;
    return {
      label,
      cx: cluster.x,
      cy: cluster.y,
      ox: Math.cos(angle) * radius,
      oy: Math.sin(angle) * radius,
      phase: rand() * Math.PI * 2,
      speed: 0.6 + rand() * 0.8,
    };
  }),
);

export default function EmbeddingField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const schemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let pointer = null;
    let colors = { ink: '#111', muted: '#666', accent: '#2f44f5' };
    let family = 'sans-serif';

    const readTheme = () => {
      const style = getComputedStyle(document.documentElement);
      colors = {
        ink: style.getPropertyValue('--ink').trim() || colors.ink,
        muted: style.getPropertyValue('--muted').trim() || colors.muted,
        accent: style.getPropertyValue('--accent').trim() || colors.accent,
      };
      family = getComputedStyle(canvas).fontFamily || family;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      if (!w || !h) return;
      const t = reduceQuery.matches ? 0 : time || 0;
      ctx.clearRect(0, 0, w, h);

      const query = pointer || {
        x: w * (0.5 + 0.3 * Math.sin(t * 0.00021 + 0.6)),
        y: h * (0.5 + 0.28 * Math.sin(t * 0.00029 + 1.9)),
      };

      const pts = POINTS.map((p) => {
        const x = (p.cx + p.ox + Math.sin(t * 0.0004 * p.speed + p.phase) * 0.012) * w;
        const y = (p.cy + p.oy + Math.cos(t * 0.00035 * p.speed + p.phase) * 0.012) * h;
        return { label: p.label, x, y, d: Math.hypot(x - query.x, y - query.y) };
      });
      const ranked = [...pts].sort((a, b) => a.d - b.d);
      const top = new Set(ranked.slice(0, TOP_K));
      const reach = Math.min(w, h) * 0.75;

      ctx.lineWidth = 1.25;
      ctx.strokeStyle = colors.accent;
      ranked.slice(0, TOP_K).forEach((p, i) => {
        ctx.globalAlpha = 0.85 - i * 0.15;
        ctx.beginPath();
        ctx.moveTo(query.x, query.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      // Retrieved points are drawn first so their labels always win; other
      // labels are skipped when they would overlap one that is already placed.
      const placed = [];
      const overlaps = (r) =>
        placed.some((o) => r.x < o.x + o.w && r.x + r.w > o.x && r.y < o.y + o.h && r.y + r.h > o.y);
      const small = w < 480;
      const order = [...ranked.slice(0, TOP_K), ...ranked.slice(TOP_K)];

      order.forEach((p) => {
        const hit = top.has(p);
        ctx.globalAlpha = hit ? 1 : 0.55;
        ctx.fillStyle = hit ? colors.accent : colors.muted;
        ctx.beginPath();
        ctx.arc(p.x, p.y, hit ? 4.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();

        const score = Math.max(0, 1 - p.d / reach).toFixed(2);
        const text = hit ? `${p.label}  ${score}` : p.label;
        const size = small ? (hit ? 12 : 11) : hit ? 13 : 12;
        ctx.font = `${hit ? 600 : 400} ${size}px ${family}`;
        const tw = ctx.measureText(text).width;
        const tx = Math.min(Math.max(p.x + 9, 6), w - tw - 6);
        // Retrieved labels may shift up or down to find a free spot; others are skipped.
        const step = size + 10;
        const nudges = hit ? [0, step, -step, 2 * step] : [0];
        const spot = nudges
          .map((dy) => ({ dy, rect: { x: tx - 3, y: p.y + dy - size, w: tw + 6, h: size + 8 } }))
          .find((candidate) => !overlaps(candidate.rect));
        if (!spot && !hit) {
          ctx.globalAlpha = 1;
          return;
        }
        const chosen = spot || { dy: 0, rect: { x: tx - 3, y: p.y - size, w: tw + 6, h: size + 8 } };
        placed.push(chosen.rect);
        ctx.globalAlpha = hit ? 1 : 0.7;
        ctx.fillStyle = hit ? colors.ink : colors.muted;
        ctx.fillText(text, tx, p.y + 4 + chosen.dy);
        ctx.globalAlpha = 1;
      });

      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(query.x, query.y, 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.arc(query.x, query.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const redrawStatic = () => {
      if (reduceQuery.matches) requestAnimationFrame(draw);
    };

    const loop = (time) => {
      if (visible) draw(time);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      redrawStatic();
    };
    const onLeave = () => {
      pointer = null;
      redrawStatic();
    };
    const onTheme = () => {
      readTheme();
      redrawStatic();
    };

    readTheme();
    resize();
    if (reduceQuery.matches) {
      draw(0);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => draw(0));
    } else {
      raf = requestAnimationFrame(loop);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      redrawStatic();
    });
    resizeObserver.observe(canvas);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibilityObserver.observe(canvas);

    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);
    schemeQuery.addEventListener('change', onTheme);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
      schemeQuery.removeEventListener('change', onTheme);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="field__canvas"
      role="img"
      aria-label="Interactive map of skills grouped by topic. The skills closest to your cursor are highlighted with a similarity score."
    />
  );
}
