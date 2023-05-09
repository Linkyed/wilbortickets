import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function formatPhone(value:string) {
return value
.replace(/[^0-9]/g, "")
.replace(/^([0-9]{1,2})$/, "($1)")
.replace(/^([0-9]{2})([0-9]{1})$/, "($1)$2")
.replace(/^([0-9]{2})([0-9]{1})([0-9]{1,4})$/, "($1)$2 $3")
.replace(/^([0-9]{2})([0-9]{1})([0-9]{4})([0-9]{1,4})$/, "($1)$2 $3-$4")
}

function formatCPF(value:string) {
return value
.replace(/[^0-9]/g, "")
.replace(/^([0-9]{3})([0-9]{1,3})$/, "$1.$2")
.replace(/^([0-9]{3})([0-9]{3})([0-9]{1,3})$/, "$1.$2.$3")
.replace(/^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{1,2})$/, "$1.$2.$3-$4")
}

export default function Personal() {

const [CPF, setCPF] = React.useState("");
const [phone, setPhone] = React.useState("");

return (
  <form className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
    <div className="flex flex-col gap-6">
      <Input size="lg" 
        label="E-mail*" 
        containerProps={{ className: "min-w-[72px]" }}
      />   
      <Input size="lg" 
        label="Senha*" 
        containerProps={{ className: "min-w-[72px]" }}
      />
      <Input size="lg" 
        label="Confirmação da Senha*" 
        containerProps={{ className: "min-w-[72px]" }}
      />
    </div>
  </form>
);
}