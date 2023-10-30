export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (<div className={`w-full pl-[80px] pr-[80px] max-w-[1440px] mx-auto ${className}`}>{children}</div>)
}