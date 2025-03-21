export const Color = ({ color, className }: { color: string, className: string }) => {
  return (
    <div className={`border-1 rounded-full w-min p-0.5 ${className}`}>
      <div style={{ backgroundColor: color }} className={`size-5 rounded-full border border-white/20`} ></div >
    </div>
  )
}
