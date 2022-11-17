import stylesBadge from './Badge.module.css';

export const Badge = ({ children }) => (
  <p className={stylesBadge.badge}>{children}</p>
);
