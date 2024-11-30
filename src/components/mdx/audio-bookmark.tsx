
type AudioBookmarkProps = {
  time: string
  text: string
}

export default function AudioBookmark({ time, text }: AudioBookmarkProps) {


  return (
    <button className="w-full text-left py-1.5 group" >
      <span className="text-slate-400 font-medium">›</span>{' '}
      <span className="text-slate-800 font-medium">{time}</span>{' '}
      <span className="text-slate-500 group-hover:text-blue-500 transition duration-150 ease-in-out">{text}</span>
    </button>
  )
}
