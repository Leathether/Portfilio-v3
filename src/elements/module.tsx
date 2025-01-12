"use client"
import Image from "next/image"


// This is for the skills class

export default function Skills(logoUrl:string, alt:string = "image") {
  const skillsImageClass:string = "h-[5rem] w-[5rem] rounded-[1rem] m-[1rem] bg-white"
  const skillsImageStyle:Object = {height: '5rem', objectFit: 'contain', position: 'relative'}
  const skillsImageWrapper:string = skillsImageClass + "hover:h-[15rem] hover:w-[25rem]"

  return (
    <section>
      <Image src={logoUrl} alt={alt} className={skillsImageClass} width="255" height="255" style={skillsImageStyle}>

      </Image>
      <header>

      </header>
      <p>

      </p>
    </section>
  )
}