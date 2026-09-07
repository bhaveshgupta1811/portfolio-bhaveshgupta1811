/** Joins truthy class values. Avoids pulling in clsx for six lines of work. */
export function cn(...values) {
  return values.filter(Boolean).join(' ')
}
