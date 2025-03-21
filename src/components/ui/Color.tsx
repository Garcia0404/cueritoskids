export const Color = ({ color, className="" }: { color: string, className?: string }) => {
  return (
    <div className={`border-2 rounded-full w-min h-min flex items-center justify-center ${className}`}>
      <div
        style={{ backgroundColor: color }}
        className="size-4 gap-2 rounded-full"
      ></div>
    </div>
  )
}
