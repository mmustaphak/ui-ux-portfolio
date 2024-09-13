export default function Paragraph({children, ClassName}) {
  return (
    <p className={`${ClassName} mt-2 text-[0.75rem] mx-auto max-w-[512px] md:max-w-[760px] md:text-xl md:leading-[normal] md:mt-4 lg:mt-8 lg:max-w-[1320px] lg:text-[2rem]`}>{children}</p>
  )
}