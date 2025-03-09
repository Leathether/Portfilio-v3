import Image from 'next/image';
import Skills from '@/app/elements/Skills'

export default function Home() {
  const text5xlClass:string = 'text-[1rem] text-white font-black m-8 text-border-5xl'
  const textLClass:string = 'text-l text-[#FFFFFF] font-black w-fit text-center'
  const descriptionClass:string = 'bg-[#BE3144] h-auto md:w-[28vw] lg:w-[28vw] flex flex-col'
  const contentClass:string = 'bg-[#09122C] md:w-[72vw] lg:w-[72vw] h-auto'
  const skillsTextClass:string = 'mt-0 text-l text-black mt-4'
  const skillsSectionImageClass:string = 'justify-left grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'
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
    {'src':'/mySqlLogo.png','alt':'My SQL Logo','text':'MySQL: 100+ Hours'},  
    {'src':'/cppLogo.png','alt':'C++ Logo','text':'C++: ~5 Hours'}      ]
  
  return (
    <section className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      <header className='w-full flex flex-row h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <section className={descriptionClass}>
          <h1 className={text5xlClass}>Overview</h1>
          <Image src="/portrait.jpg" alt="Peter Magenheim" className="w-[28vw] mt-[3vw]" width="255" height="255" ></Image>
        </section>
        <section className={contentClass}>
          <section className='w-[72vw] h-auto bg-[#09122C] grid sm:grid-cols-1 lg:grid-cols-2 p-[3vw]'>
            <p className={textLClass}>Hello, my name is Peter Magenheim and I am a software developer. I am also a student at Mount St. Joseph Univerity studying Computer Science - Application Development with a minor in Mathematics. I currently have a job at the university where I am a developer.</p>
            <section className='w-[68vw] bg-[#09122C]'>
              <iframe 
                className='w-[62vw] h-[40vw] lg:w-[30vw] lg:h-[20vw] lg:ml-[2vw]'
                src="https://www.youtube.com/embed/oUMm0oQ_3rs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </section>
            <br></br><br></br>
          </section>
          <h1 className={text5xlClass}>Skills:</h1>
          <section className={skillsSectionImageClass}>{
              imageSrcAltList.map((item,index) => (<Skills item={item} key={index}></Skills>))
              }
          </section>
          

        </section>
      </header>
    </section>
  )
}