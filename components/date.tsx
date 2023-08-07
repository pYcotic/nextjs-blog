import { parseISO, formatDistanceToNow } from 'date-fns'

interface TimeAgoProps {
  dateString: string;
  className?: string;
}

export default function TimeAgo({ dateString, className }: TimeAgoProps) {
  const date = parseISO(dateString)
  const timeAgo = formatDistanceToNow(date, { addSuffix: true })

  return <span className={className}>{timeAgo}</span>
}