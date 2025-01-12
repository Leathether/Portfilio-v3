import Image from "next/image";
import Skills from "@/elements/module.tsx"

export default function Home() {
  const text5xlClass:string = "text-5xl text-white font-black m-8 text-border-5xl"
  const textLClass:string = "text-l text-black mt-16"
  const descriptionClass:string = "bg-blue-500 h-auto w-[28vw] flex"
  const contentClass:string = "bg-slate-300 w-[72vw] h-auto p-20"
  const skillsTextClass:string = "mt-0 text-l text-black mt-4"
  const skillsSectionImageClass:string = "flex flex-row flex-wrap justify-left"
  const imageSrcAltList:string[][] = [["/javascriptLogo.png","JavaScript Logo"], ["/typescriptLogo.png","TypeScript Logo"], ["/appscriptLogo.png","AppScript Logo"], ["/reactLogo.png","React Logo"], ["/nextjsLogo.svg","Next JS Logo"], ["/htmlLogo.png","HTML Logo"], ["/cssLogo.svg","CSS Logo"], ["/tailwindLogo.png", "Tailwind CSS Logo"], ["/materialuiLogo.png","Material UI Logo"], ["/pythonLogo.png","Python Logo"], ["/numpyLogo.png","Numpy Logo"], ["/openaiLogo.png","Open AI Logo"], ["/geminiLogo.jpeg", "Gemini AI Logo"], ["/groqLogo.png","Groq AI Logo"], ["/llamaLogo.webp","Llama Logo"], ["/pineconeLogo.png","Pinecone Logo"], ["/pygameLogo.png","Pygame Logo"], ["/flaskapiLogo.png","Flask API Logo"], ["/cmdLogo.png","Windows CMD Logo"], ["/ubuntuLogo.png","Ubuntu Logo"], ["/linuxMintLogo.png","Linux Mint Logo"], ["/gitLogo.png","Git Logo"], ["/npmLogo.png","NPM Logo"], ["/pipLogo.png","Python pip Logo"], ["/mySqlLogo.png","My SQL Logo"]      ]
  
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
            
          </section>
          

        </section>
      </header>
    </>
  )
}