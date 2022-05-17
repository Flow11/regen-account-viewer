import clsx from 'clsx'

type Props = {
  className?: string
}

const Loader = ({ className }: Props) => {
  const circleCommonClasses = 'h-2.5 w-2.5 bg-green-600 rounded-full'

  return (
    <div className={clsx('flex', className)}>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
      <div className={`${circleCommonClasses} animate-bounce400`} />
    </div>
  )
}

export default Loader
