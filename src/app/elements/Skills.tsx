"use client"
import Image from "next/image"
import { ReactElement } from "react"

// This is for the skills class

export default function Skills(item:any):any {
  const skillsImageClass:string = "h-[5vw] w-[5vw] rounded-[1vw] m-[1vw] bg-white flex flex-row items-center justify-center"
  const skillsImageStyle:object = {height: '5vw', width: '4vw', objectFit: 'contain'}
  const skillsImageWrapper:string = skillsImageClass + "hover:h-[10vw] hover:w-[19vw]"
  let alt1 = JSON.stringify(item.item.alt).split('"')
  let src1 = JSON.stringify(item.item.src).split('"')
  const alt = alt1[1]
  const x = src1[1]
  console.log(x)

  return (
    <div className={skillsImageWrapper}>
            <section className={skillsImageClass}>
              <Image src={x} alt={alt} className={skillsImageClass} width="255" height="255" style={skillsImageStyle}>

              </Image>
            </section>
              <header>

              </header>
              <p>

              </p>
    </div>
    )
}