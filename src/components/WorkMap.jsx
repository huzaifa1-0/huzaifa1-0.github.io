import { useMemo, useState } from 'react';
import { nodes, topics } from '../data/resume';

/* Connect every point to its two nearest neighbours, once per pair. */
function nearestLinks(items, count = 2) {
  const seen = new Set();
  const links = [];
  items.forEach((a) => {
    items
      .filter((b) => b.id !== a.id)
      .map((b) => ({ b, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .sort((p, q) => p.d - q.d)
      .slice(0, count)
      .forEach(({ b }) => {
        const key = [a.id, b.id].sort().join('|');
        if (!seen.has(key)) {
          seen.add(key);
          links.push([a, b]);
        }
      });
  });
  return links;
}

const WorkMap = () => {
  const [selectedId, setSelectedId] = useState(nodes[0].id);
  const [topic, setTopic] = useState(null);

  const links = useMemo(() => nearestLinks(nodes), []);
  const matches = (node) => !topic || node.topics.includes(topic);
  const selected = nodes.find((node) => node.id === selectedId);
  const isExternal = selected.href.startsWith('http');

  const chooseTopic = (id) => {
    const next = topic === id ? null : id;
    setTopic(next);
    if (next && !selected.topics.includes(next)) {
      const first = nodes.find((node) => node.topics.includes(next));
      if (first) setSelectedId(first.id);
    }
  };

  return (
    <div className="work-map" role="group" aria-labelledby="work-map-hint">
      <p className="work-map__hint" id="work-map-hint">
        My work, placed by topic. Closer means more related. Pick a point, or filter by topic.
      </p>

      <div className="work-map__topics">
        {topics.map((item) => (
          <button
            key={item.id}
            type="button"
            className="work-map__topic"
            aria-pressed={topic === item.id}
            onClick={() => chooseTopic(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="work-map__field">
        <svg className="work-map__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {links.map(([a, b]) => (
            <line
              key={`${a.id}-${b.id}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              data-active={matches(a) && matches(b) ? 'true' : 'false'}
            />
          ))}
        </svg>

        {nodes.map((node, index) => (
          <button
            key={node.id}
            type="button"
            className="work-map__node"
            style={{ '--x': node.x, '--y': node.y, '--i': index }}
            data-side={node.x > 55 ? 'left' : 'right'}
            data-dim={matches(node) ? 'false' : 'true'}
            aria-current={selectedId === node.id ? 'true' : undefined}
            aria-label={`${node.title}. ${node.where}.`}
            onClick={() => setSelectedId(node.id)}
          >
            <span className="work-map__dot" />
            <span className="work-map__label">{node.label}</span>
          </button>
        ))}
      </div>

      <div className="work-map__detail" aria-live="polite">
        <p className="work-map__detail-title">{selected.title}</p>
        <p className="work-map__detail-where">{selected.where}</p>
        <p className="work-map__detail-text">{selected.summary}</p>
        <a
          className="text-link"
          href={selected.href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {selected.linkLabel}
        </a>
      </div>
    </div>
  );
};

export default WorkMap;
