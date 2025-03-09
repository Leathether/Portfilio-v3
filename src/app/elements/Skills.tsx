
import Image from "next/image"
import { ReactElement } from "react"

// This is for the skills class

export default function Skills(item:any):any {
  const skillsImageClass:string = "h-[5rem] w-[5rem] lg:h-[10rem] lg:w-[10rem] rounded-[1rem] bg-white flex flex-row items-center content-center justify-center"
  const skillsImageStyle:object = {height: '5rem', width: '5rem', objectFit: 'contain'}
  const skillsImageWrapper:string = skillsImageClass + "hover:transition-all hover:duration-1000 hover:ease-in-out hover:h-[10rem] hover:w-[10rem] text-[0px] hover:text-[.9rem] lg:hover:w-[15rem] lg:hover:h-[15rem] text-[rgba(0,0,0,0)] hover:text-[black] mb-[1rem] md:mb-[2rem] lg:mb-[3rem] ml-[0] mr-[0] "
  const textClass:string = " text-black text-inherit font-sans z-[10] h-[5vw] hover:inline"
  let alt1 = JSON.stringify(item.item.alt).split('"')
  let src1 = JSON.stringify(item.item.src).split('"')
  let text1 = JSON.stringify(item.item.text).split('"')
  const alt = alt1[1]
  const x = src1[1]
  const text = text1[1]
  console.log(text)

  return (
    <div className={skillsImageWrapper}>
            <section className={skillsImageClass}>
              <Image src={x} alt={alt} className={skillsImageClass} width="255" height="255" style={skillsImageStyle}>

              </Image>
            </section>
            <h1 className={textClass}>
              {text}
            </h1>
    </div>
    )
}