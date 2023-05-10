'use client';

import '../../styles/globals.css'
import { Card, CardBody, CardHeader, Typography, Button } from '@material-tailwind/react';
import { MdOutlineShare, MdCalendarMonth, MdLocationOn } from "react-icons/md";
import { ImClock } from "react-icons/im";


export default function Event() {
    return (
        <div className="mx-auto w-full h-full">
            <div className='lg:h-[70%] md:h-1/2 sm:h-1/2 mb-5'>
                <img className='md:w-full md:h-full sm:w-full sm:h-full'
                    src="/img/event-banner/show_djavan.jpeg"
                    alt='Imagem do evento'
                />
            </div>

            <Card className='m-5 relative flex-row'>
                <CardBody>
                    <div className='flex flex-col items-center'>
                        <Typography variant="h4" color="blue-gray" className="m-6 ">
                            Djavan Turne A 2023
                        </Typography>
                        <Button color="purple" size="md" className="flex items-center gap-3 rounded-full">
                            <MdOutlineShare size={'1rem'}/>
                            Compartilhar
                        </Button>
                    </div>

                    <div className="flex flex-wrap mt-8">
                        <MdCalendarMonth color={'#6a1b9a'} size={'1.5rem'}/>
                        <Typography variant="paragraph" color="blue-gray" className="font-semibold ml-2 mr-5">Domingo, 02/04/2023</Typography>
                        
                        <ImClock color={'#6a1b9a'} size={'1.5rem'}/>
                        <Typography variant="paragraph" color="blue-gray" className="font-semibold ml-2 mr-5">21:00 - 00:00</Typography>

                    </div>
                    <div className="flex w-full mt-5">
                        <MdLocationOn color={'#6a1b9a'} size={'1.5rem'}/>
                        <Typography variant="paragraph" color="blue-gray" className="font-semibold ml-2 mr-5">CLASSIC HALL - Av. Gov Agamenon Magalhães S/N, Recife - Pernambuco</Typography>
                    </div>

                    <div className='flex mt-8 text-justify justify-between'>
                        <div className='flex-col w-[50%]'>
                            <Typography variant="h6" color="blue-gray" className="font-semibold mb-2">Descrição</Typography>
                            <Typography variant="paragraph" color="blue-gray" className="font-normal mb-8">
                                O cantor Djavan, que encerrou a turnê Vesúvio no palco do Classic Hall, volta à casa de shows em Olinda, no dia 2 de abril, com sua mais nova turnê, "D". Além das canções do álbum de inéditas, ele traz um repertório recheado de grandes sucessos da sua carreira. As vendas dos ingressos terão início no dia 6 de dezembro na bilheteria do Classic Hall e online através do site Sympla. 
                                O novo trabalho de Djavan conta com 12 faixas inéditas, incluindo a parceria com Milton Nascimento em Beleza Destruída. O disco está disponível nas plataformas digitais pela Sony Music, via Luanda Records. Djavan também reuniu sua família na faixa Iluminado, com as participações de Flávia Viana, Max Viana, João Viana, Sofia Viana, Inácio Viana, Thomas Boljover & Lui Viana. 
                            </Typography>

                            <Typography variant="h6" color="blue-gray" className="font-semibold mb-2">Sobre o produtor</Typography>
                            <Typography variant="paragraph" color="blue-gray" className="font-normal mb-8">
                                Criada pelos sócios Marcio Fraccaroli, Sandi Adamiu e Marilia Toledo, a Paris Cultural é uma empresa cem por cento brasileira dedicada ao desenvolvimento e produção de espetáculos teatrais, musicais e exposições originais focadas em personalidades e temas nacionais. 
                            </Typography>

                            <Typography variant="h6" color="blue-gray" className="font-semibold mb-2">Termos e Condições</Typography>
                            <Typography variant="paragraph" color="blue-gray" className="font-normal mb-8"> 
                                Meia entrada: Estudantes de Ensino Fundamental, Médio, Superior e Pós-graduação; No caso dos Estudantes, é necessária a apresentação do documento de identidade estudantil (carteira de estudante) com data de validade atual na entrada do espetáculo.
                            </Typography>
                        </div>

                        <div>componente dos ingressos</div>

                    </div>

                </CardBody>
            </Card>

        </div>
    )
}
