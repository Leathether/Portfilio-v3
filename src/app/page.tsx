import Image from "next/image";

export default function Home() {
  const text5xlClass:string = "text-5xl text-white font-black m-8 text-border-5xl"
  const textLClass:string = "text-l text-black mt-16"
  const descriptionClass:string = "bg-blue-500 h-auto w-[28vw] flex"
  const contentClass:string = "bg-slate-300 w-[72vw] h-auto p-20"
  const skillsTextClass:string = "mt-0 text-l text-black mt-4"
  const skillsSectionImageClass:string = "flex flex-row flex-wrap justify-left"
  const skillsImageClass:string = "h-[5rem] w-[5rem] rounded-[1rem] m-[1rem] bg-white"
  const skillsImageStyle:Object = {height: '5rem', objectFit: 'contain', position: 'relative'}
  return (
    <>
      <header className="w-full flex flex-row h-auto">
        <section className={descriptionClass}>
          <h1 className={text5xlClass}>Overview</h1>
        </section>
        <section className={contentClass}>
          <p className={textLClass}>Hello, my name is Peter Magenheim and I am a software developer. I have experience in a variety of fields relating to Computer Science, and I love to code. I have gotten several professional jobs done such as a website for Premium Personal Care, and a few for the Headstarter Fellowship.  I have experience working in Full Stack Development, Data Science, Machine Learning, Cyber Security, Operating Systems, Hardware, and a little bit of Cloud Engineering. All of these can show in my projects and what I did with them.</p>
          
          <p className={textLClass}>Skills:</p>
          <p className={skillsTextClass}>JavaScript, Typescript, App Script, React JS, Next JS</p>
          <p className={skillsTextClass}>HTML/CSS, Tailwind CSS, Material UI</p>
          <p className={skillsTextClass}>Python, Numpy, Pandas, Matplotlib, Open AI API, Gemini API, Groq API, LLAMA 2 Local, Pinecone, Turtle, Pygame, Flask API</p>
          <p className={skillsTextClass}>Windows CMD, Ubuntu Terminal, Linux Mint, Git, NPM, pip, pyenv, MySQL</p>
          <section className={skillsSectionImageClass}>
            <Image src="/javascriptLogo.png" alt="JavaScript Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/typescriptLogo.png" alt="TypeScript Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/appscriptLogo.png" alt="AppScript Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/reactLogo.png" alt="React Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/nextjsLogo.svg" alt="Next JS Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/htmlLogo.png" alt="HTML Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/cssLogo.svg" alt="CSS Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/tailwindLogo.png" alt="Tailwind CSS Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/materialuiLogo.png" alt="Material UI Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/pythonLogo.png" alt="Python Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/numpyLogo.png" alt="Numpy Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/openaiLogo.png" alt="Open AI Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/geminiLogo.jpeg" alt="Gemini AI Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/groqLogo.png" alt="Groq AI Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/llamaLogo.webp" alt="Llama Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/pineconeLogo.png" alt="Pinecone Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/pygameLogo.png" alt="Pygame Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/flaskapiLogo.png" alt="Flask API Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/cmdLogo.png" alt="Windows CMD Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/ubuntuLogo.png" alt="Ubuntu Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/linuxMintLogo.png" alt="Linux Mint Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/gitLogo.png" alt="Git Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/npmLogo.png" alt="NPM Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/pipLogo.png" alt="Python pip Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
            <Image src="/mySqlLogo.png" alt="My SQL Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} /> 
          </section>
          

        </section>
      </header>
    </>
  )
}