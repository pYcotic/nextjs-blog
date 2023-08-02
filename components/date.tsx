import { parseISO, formatDistanceToNow } from 'date-fns'

export default function TimeAgo({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  const timeAgo = formatDistanceToNow(date, { addSuffix: true })

  return <span>{timeAgo}</span>
}