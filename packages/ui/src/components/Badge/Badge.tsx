import defaultTheme from '../../lib/theme/defaultTheme'
import useStyles from '../../lib/theme/use-styles'

interface Props {
  color?: BadgeColor
  children: string | React.ReactNode
  size?: 'large' | 'small'
  dot?: boolean
  className?: string
}

export type BadgeColor = keyof typeof defaultTheme.badge.color

function Badge({ color = 'brand', children, size, dot, className }: Props) {
  const __styles = useStyles('badge')

  let classes = [__styles.base]
  if (color) {
    classes.push(__styles.color[color])
  }
  if (size === 'large') {
    classes.push(__styles.size.large)
  }
  if (className) {
    classes.push(className)
  }

  return (
    <span className={classes.join(' ')}>
      {dot && (
        <svg
          className={`${__styles.dot} ${__styles.color[color]}`}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      )}

      {children}
    </span>
  )
}
export default Badge
