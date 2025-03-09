import Image from 'next/image';
import Skills from '@/app/elements/Skills'

export default function Home() {
  const text5xlClass:string = 'text-5xl text-white font-black m-8 text-border-5xl'
  const textLClass:string = 'text-l text-black mt-16'
  const descriptionClass:string = 'bg-blue-500 h-auto w-[28vw] flex flex-col'
  const contentClass:string = 'bg-slate-300 w-[72vw] h-auto p-20'
  const skillsTextClass:string = 'mt-0 text-l text-black mt-4'
  const skillsSectionImageClass:string = 'flex flex-row flex-wrap justify-left'
  const imageSrcAltList = [{'src':'/javascriptLogo.png','alt':'JavaScript Logo','text':'Javascript: 500+ Hours'}, 
    {'src':'/typescriptLogo.png','alt':'TypeScript Logo', 'text':'Typescript: 400+ Hours'}, 
    {'src':'/appscriptLogo.png','alt':'AppScript Logo', 'text':'Google App Script: 20 Hours'}, 
    {'src':'/reactLogo.png','alt':'React Logo', 'text':'React JS: 400+ Hours'}, 
    {'src':'/nextjsLogo.svg','alt':'Next JS Logo', 'text':'Next JS: 400+ Hours'}, 
    {'src':'/htmlLogo.png','alt':'HTML Logo','text':'HTML: 600+ Hours'}, 
    {'src':'/cssLogo.svg','alt':'CSS Logo','text':'CSS: 600+ Hours'}, 
    {'src':'/tailwindLogo.png', 'alt':'Tailwind CSS Logo','text':'Tailwind CSS: 300+ Hours'},
    {'src':'/materialuiLogo.png','alt':'Material UI Logo', 'text':'Material UI: 40 Hours'}, 
    {'src':'/pythonLogo.png','alt':'Python Logo', 'text':'Python: 500+ Hours'}, 
    {'src':'/numpyLogo.png','alt':'Numpy Logo', 'text':'Python Numpy: 80+ Hours'}, 
    {'src':'/openaiLogo.png','alt':'Open AI Logo', 'text':'Open AI API: 100+ Hours'}, 
    {'src':'/geminiLogo.jpeg','alt': 'Gemini AI Logo', 'text':'Gemini API: 20+ Hours'}, 
    {'src':'/groqLogo.png','alt':'Groq AI Logo','text':'Groq API: 60+ Hours'}, 
    {'src':'/llamaLogo.webp','alt':'Llama Logo','text':'LLAMA AI: 80+ Hours'}, 
    {'src':'/pineconeLogo.png','alt':'Pinecone Logo', 'text':'Pinecone API: 60+ Hours'}, 
    {'src':'/pygameLogo.png','alt':'Pygame Logo','text':'Python Pygame: 200+ Hours'}, 
    {'src':'/flaskapiLogo.png','alt':'Flask API Logo', 'text':'Python Flask API: 100+ Hours'}, 
    {'src':'/cmdLogo.png','alt':'Windows CMD Logo','text':'Windows Terminal: 100+ Hours'}, 
    {'src':'/ubuntuLogo.png','alt':'Ubuntu Logo', 'text':'Ubuntu Terminal: 100+ Hours'}, 
    {'src':'/linuxMintLogo.png','alt':'Linux Mint Logo','text':'Linux Mint: 200+ Hours'}, 
    {'src':'/gitLogo.png','alt':'Git Logo', 'text':'Git: 200+ Hours'}, 
    {'src':'/npmLogo.png','alt':'NPM Logo', 'text':'NPM: 400+ Hours'}, 
    {'src':'/pipLogo.png','alt':'Python pip Logo','text':'Python PIP: 200+ Hours'}, 
    {'src':'/mySqlLogo.png','alt':'My SQL Logo','text':'MySQL: 100+ Hours'}      ]
  
  return (
    <>
      <header className='w-full flex flex-row h-auto'>
        <section className={descriptionClass}>
          <h1 className={text5xlClass}>Overview</h1>
          <Image src="/portrait.jpg" alt="Peter Magenheim" className="w-[28vw] mt-[3vw]" width="255" height="255" ></Image>
        </section>
        <section className={contentClass}>
          <p className={textLClass}>Hello, my name is Peter Magenheim and I am a software developer. I am also a student at Mount St. Joseph Univerity studying Computer Science - Application Development with a minor in Mathematics. I currently have a job at the university where I am a developer.</p>
          <br></br><br></br>

          <h1 className={text5xlClass}>Skills:</h1>
          <section className={skillsSectionImageClass}>{
              imageSrcAltList.map((item,index) => (<Skills item={item} key={index}></Skills>))
              }
          </section>
          

        </section>
      </header>
    </>
  )
}