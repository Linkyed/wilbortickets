import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
   
  export default function Example() {
    return (
    <div className="flex flex-row items-center justify-center w-full px-8 pt-12 pb-12">
        <CheckCircleIcon className="w-16 h-16 text-[#404c76]" />
        <div className="flex flex-col">
            <Typography variant="h4" className="text-[#404c76]">
                Cadastro Finalizado!
            </Typography>

            <Typography variant="h8" className="text-[#404c76]">
                Agora é só entrar em sua conta.
            </Typography>
        </div>
    </div>
    );
  }