import Image from "next/image";

export default function Home() {
  const text5xlClass:string = "text-5xl text-white font-black m-8 text-border-5xl"
  const textLClass:string = "text-l text-black mt-16"
  const descriptionClass:string = "bg-blue-500 h-auto w-[28vw] flex"
  const contentClass:string = "bg-slate-300 w-[72vw] h-auto p-20"
  const skillsTextClass:string = "mt-0 text-l text-black mt-4"
  const skillsSectionImageClass:string = "flex flex-row flex-wrap"
  const skillsImageClass:string = "h-[7vw] w-[7vw] rounded-xl"
  const skillsImageStyle:Object = {height: 'auto', objectFit: 'contain', position: 'relative'}
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
          <section className={skillsSectionImageClass}>
            <Image src="/javascriptLogo.png" alt="JavaScript Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
            <Image src="/typescriptLogo.svg" alt="TypeScript Logo" className={skillsImageClass} width="255" height="255" style={skillsImageStyle} />
          </section>
          <p className={skillsTextClass}>HTML/CSS, Tailwind CSS, Material UI</p>
          <p className={skillsTextClass}>Python, Numpy, Pandas, Matplotlib, Open AI API, Gemini API, LLAMA 2 Local, Pinecone, Turtle, Pygame</p>
          <p className={skillsTextClass}>Windows CMD, Linux Terminal, Git, npm, pip, pyenv</p>
        </section>

        <section></section>
        <section></section>
      </header>
    </>
  )
}