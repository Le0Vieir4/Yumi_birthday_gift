"use client"
import { Card,  CardHeader, CardTitle, CardContent ,CardDescription, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "./ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useChat } from 'ai/react'
import Image from "next/image"
import mygif from '/assets/giphy01.gif'
import bg from '../../assets/background_aphelios.jpg'
import apheliosAvatar from '../../assets/aphelios.png'
import yumiIcon from '../../assets/yumiIcon.png'

export function Chat() {
  
 const { messages, input, handleInputChange, handleSubmit } = useChat({
  api:'api/chat'
 })

  return(
    <div className="flex flex-col items-center justify-center">
        <div className="relative w-full">
        <div className="absolute -z-10 w-full">
          <Image 
           src={bg} 
           alt="Background"
           quality={95}
           priority={true}
           sizes="100vw"
           className="w-full xl:h-[1200px] md:h-[1000px] xl: sm:h-[920px] object-cover"
           /> 
        </div>
      </div>
      <Card className=" w-[540px] lg:w-[920px] lg:mt-20 md:mt-12 sm:mt-20 shadow-md bg-transparent shadow-red-400 border-2 border-blue-400">
    
        <CardHeader className="flex flex-1 justify-center items-center">
          <CardTitle className=" pb-2 text-5xl font-extrabold bg-gradient-to-tr from-yellow-400 to-yellow-800 text-transparent bg-clip-text"> League of Aphelios</CardTitle>
          <CardDescription className="text-2xl bg-gradient-to-l from-[#912012] font-extrabold to-white text-transparent bg-clip-text"> Parabéns Yumi, bata um papinho com o  aphelios como presente!!</CardDescription>
        </CardHeader>
          <CardContent> 
            <ScrollArea className=" w-full overflow-y-auto sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[650px]pr-4">
            
            <div className=" gap-2 flex flex-row mb-4" >
              <div className="sm:w-[80px] lg:w-[80px]">
                <Image src={apheliosAvatar} width={80} alt="avatar" className="rounded-full drop-shadow-xl border-2 border-blue-500"/>
              </div>
              <div className="bg-slate-200 text-justify lg:max-w-[650px] sm:max-w-[350px] lg:text-[17px] lg:px-6 sm:px-4 sm:py-1 shadow-md rounded-md">
                <p className="leading-relaxed">Oi yumizinha, aqui é o Aphelios, vim te dar os parabéns e te desejar tudo de bom e melhor pra sua vida! agr pergunte me qualquer coisa que quiser e te darei a resposta!</p>  
              </div>
              
            </div>

            <div className="w-full gap-2 flex flex-row mb-4">
              <div className="sm:w-[80px]">
                <Image src={yumiIcon} alt="avatar" className="rounded-full drop-shadow-xl border-2 border-violet-500"/>
              </div>
              <div className="bg-slate-200 border text-justify lg:max-w-[650px] sm:max-w-[350px] lg:text-[17px] lg:px-6 sm:px-2 sm:py-1 shadow-md rounded-md">
                <p className="leading-relaxed"><Image unoptimized src={mygif} alt='gif' width={150} height={150}/></p>  
              </div>
              </div>
            
            { messages.map(message => {
              return(
                <div key={message.id} className="flex flex-row mb-3">
                  <div className="flex flex-col gap-2 w-full">
                    
                    <div className="flex gap-2 flex-row-reverse">
                      {message.role === 'user' && (
                        <div className=" gap-2 flex flex-row-reverse">
                          <div className="w-[80px]">
                            <Image src={yumiIcon} alt="avatar" className="rounded-full drop-shadow-xl border-2 border-blue-500 "/>
                          </div>
                          <div className="bg-slate-200 border text-justify lg:max-w-[650px] sm:max-w-[350px] flex items-center lg:text-[17px] lg:px-6 sm:px-2 shadow-md rounded-md">
                            <p className="leading-relaxed">{message.content}</p>  
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      {message.role === 'assistant' && (
                        <div className="flex flex-row gap-2">
                          <div className="sm:w-[80px] lg:w-[80px]">
                            <Image src={apheliosAvatar} alt="avatar" className="rounded-full drop-shadow-xl border-2 border-blue-500 object-contain"/>
                          </div>
                          <div className="bg-slate-200 border lg:max-w-[650px] sm:max-w-[350px] text-justify flex items-center lg:text-[17px] lg:px-6 sm:px-2 shadow-md rounded-md">
                            <p className="leading-relaxed">{message.content}</p>  
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
               
            )})}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2 " onSubmit={handleSubmit}>
            <div className="flex flex-row gap-2 bg-white rounded-md w-full p-4">
              <Input placeholder="Pergunte-me algo ☺️ " value={input} onChange={handleInputChange} className="border"/>
              <Button type="submit"  className="bg-gradient-to-tr from-slate-300 to-blue-400 hover:from-slate-400 hover:to-blue-500"> 
                <span className="bg-gradient-to-tr from-slate-700 to-slate-900 bg-clip-text text-transparent ">
                  Enviar
                </span> 
              </Button>
            </div>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}