'use client'
import React, { useState } from 'react';
import UPayContext from '../../../use/UPayContext';
import { Input, Button } from '../../ClientSide';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type CardFormData = z.infer<typeof cardSchema>;

const cardSchema = z.object({
    cardNumber: z.string().min(19, { message: 'Numero do cartão deve conter 16 dígitos' }),
    name: z.string().min(3, { message: 'Nome deve conter no mínimo 3 caracteres' }),
    date: z.string().min(5, { message: 'Data deve conter no mínimo 5 caracteres' }),
    cvv: z.string().min(3, { message: 'CVV deve conter no mínimo 3 caracteres' }),

})



function formatDate(value: string) {
    return value
        .replace(/[^0-9]/g, "")
        .replace(/^([2-9])$/g, "0$1")
        .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
        .replace(/^0{1,}/g, "0")
        .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}

export default function Cardform() {

    const { register, handleSubmit, formState: { errors } } = useForm<CardFormData>({
        resolver: zodResolver(cardSchema),
    })

    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [cvv, setCvv] = useState("");
    const { setInfoCard } = UPayContext();




    const handleCardNumber = (e: any) => {
        const number = e.target.value;

        setInfoCard({
            cardNumber: number.replace(/[^0-9]/g, '').replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, ''),
            name: name,
            date: date,
            cvv: cvv,
            fucus: true
        })
        setCardNumber(number.replace(/[^0-9]/g, '').replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, ''));

    }

    const handleName = (e: any) => {
        const name = e.target.value.replace(/[^a-zA-Z ]/g, "");
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: date,
            cvv: cvv,
            fucus: true
        });
        setName(name);
    }

    const handleCvv = (e: any) => {
        const cvv = e.target.value.replace(/[^0-9]/g, "");
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: date,
            cvv: cvv,
            fucus: false
        })
        setCvv(cvv);
    }


    const handleDate = (e: any) => {
        const dateFormated = formatDate(e.target.value);
        setInfoCard({
            cardNumber: cardNumber,
            name: name,
            date: dateFormated,
            cvv: cvv,
            fucus: true
        });
        setDate(dateFormated);
    }

    const onSubmit = (data: any) => console.log(data);


    return (
        <div className="flex w-92 h-full items-start justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-1'>
                <Input {...register("name")} size='md' label='Nome do Titular' value={name} maxLength={20}
                onChange={(e) => { handleName(e) }} containerProps={{ className: "md:min-w-[90px]" }} onClick={(e)=>handleName(e)}/>
                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                <Input {...register("cardNumber")} label='Número do Cartão' maxLength={19} value={cardNumber} type='text' 
                containerProps={{ className: "md:min-w-[90px]" }} onChange={(e) => { handleCardNumber(e) }} onClick={(e)=>handleCardNumber(e)}/>
                {errors.cardNumber && <span className="text-red-500 text-xs">{errors.cardNumber.message}</span>}
                <div className="my-1 flex-col flex md:flex-row items-center gap-3  ">
                    <Input {...register("date")} label='Validade(MM/AA)' value={formatDate(date)} onChange={(e) => { handleDate(e) }} 
                    maxLength={5} containerProps={{ className: "md:min-w-[90px]" }}onClick={(e) => { handleDate(e)}} />
                    <Input {...register("cvv")} label="CVV" value={cvv} onChange={(e) => { handleCvv(e) }} maxLength={4} 
                    containerProps={{ className: "md:min-w-[90px]" }} onClick={(e)=>handleCvv(e)}/>
                </div>
                {errors.date && <span className="text-red-500 text-xs">{errors.date.message}</span>}
                {errors.cvv && <span className="text-red-500 text-xs">{errors.cvv.message}</span>}
                <Button type='submit' fullWidth>Salvar</Button>;
            </form>
        </div>
    )
}
