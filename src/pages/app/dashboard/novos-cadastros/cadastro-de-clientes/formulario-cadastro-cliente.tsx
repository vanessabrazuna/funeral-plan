import { useState } from 'react'
import { format, parse } from 'date-fns'
import { FileText, Hospital } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller, useWatch  } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog } from '@/components/ui/dialog'

import { 
  cadastroDeClienteValidacao,
  type FormDataSchema 
} from '@/utils/cadastro-de-cliente-validacao'
import { cadastroDeCliente } from "@/api/cadastro-de-cliente"
import { Minuta } from './minuta'

export function FormularioCadastroCliente() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlano, setSelectedPlano] = useState<string | null>(null)

  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<FormDataSchema>({
    resolver: zodResolver(cadastroDeClienteValidacao),
  })

  const { mutateAsync: cadastroDeClienteFn } = useMutation({
    mutationFn: cadastroDeCliente,
  })

  const adesao = useWatch({
    control,
    name: "adesao",
  })

  const planoFuneral = useWatch({
    control,
    name: "plano_funeral",
  })

  async function lidarComCadastroDeClientes(data: FormDataSchema) {
    try {
      console.log("Dados enviados para o backend:", data)

      const formattedDataNascimento = format(data.data_nascimento, 'dd-MM-yyyy')
      const formattedDataVencimento = format(data.data_vencimento, 'dd-MM-yyyy')
      const formattedDataPagamentoAdesao = data.data_pagamento_adesao 
        ? format(data.data_pagamento_adesao, 'dd-MM-yyyy') 
        : "Data não fornecida"

      const dataNascimentoAsDate = parse(formattedDataNascimento, 'dd-MM-yyyy', new Date())
      const dataVencimentoAsDate = parse(formattedDataVencimento, 'dd-MM-yyyy', new Date())
      const dataPagamentoAdesaoAsDate = parse(formattedDataPagamentoAdesao, 'dd-MM-yyyy', new Date())

      await cadastroDeClienteFn({
        name: data.name,
        cpf_cnpj: data.cpf_cnpj,
        rg: data.rg,
        identidade_imagem: data.identidade_imagem,
        email: data.email,
        phone_fixo: data.phone_fixo,
        phone: data.phone,
        cep: data.cep,
        address: {
          street_address: data.address.street_address,
          number_address: data.address.number_address,
          complement: data.address.complement,
          reference_point: data.address.reference_point,
          district: data.address.district,
          city: data.address.city,
          state: data.address.state,
        },
        sexo: data.sexo,
        estado_civil: data.estado_civil,
        data_nascimento: dataNascimentoAsDate,
        telemedicinaChecked: data.telemedicinaChecked,
        plano_funeral: data.plano_funeral,
        vencimento_boletos: data.vencimento_boletos,
        data_vencimento: dataVencimentoAsDate,
        adesao: data.adesao,
        data_pagamento_adesao: dataPagamentoAdesaoAsDate,
        comprovante_pagamento_adesao: data.comprovante_pagamento_adesao,
      })
      console.log("Dados enviados com sucesso:", data)

      toast.success("Cadastro realizado com sucesso!")
    } catch (error) {
      console.log("Erros encontrados:", errors)

      toast.error("Erro ao realizar cadastro")
    }
  }
  console.log("Erros de formulário:", errors)

  async function verificarValidacoesAntesDeAbrirModal() {
    try {
      await handleSubmit(() => {
        if (!planoFuneral) {
          toast.error("Selecione um plano funeral antes de visualizar a minuta.")
          return
        }
        setSelectedPlano(planoFuneral)
        setIsModalOpen(true)
      })()
    } catch {
      toast.error("Preencha os campos obrigatórios antes de visualizar a minuta.")
    }
  }
  
  return (
    <form
      className="space-y-8"
      onSubmit={handleSubmit(lidarComCadastroDeClientes)}
    >
      <div className="flex items-center md:justify-end space-x-2">
        <input
          id="telemedicinaChecked"
          type="checkbox"
          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          {...register("telemedicinaChecked")}
        />
        <label
          htmlFor="telemedicinaChecked"
          className="text-sm font-medium leading-relaxed peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex justify-center items-center gap-1"
        >
          <Hospital className="h-4 w-4" />
          Telemedicina
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
        <div className="flex flex-col items-start space-y-2 md:min-h-[5rem] lg:min-h-[3rem]">
          <Label htmlFor="plano_funeral">
            Plano funeral <span className="text-red-500">*</span>
          </Label>
          <select
            id="plano_funeral"
            className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring-2 focus:ring-2 focus:ring-violet-600 rounded-md transition-all duration-200 flex h-10 w-full items-center justify-between border border-input bg-background px-2 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none"
            aria-label="Plano funeral"
            {...register("plano_funeral")}
          >
            <option value="">
              Plano funeral
            </option>
            <option value="plano_jardim_da_saudade">Plano Jardim da Saudade</option>
            <option value="plano_jardim_da_saudade_4">Plano Jardim da Saudade 4</option>
            <option value="plano_individual">Plano Individual Cemitério Público</option>
            <option value="plano_familiar">Plano Familiar em Grupo</option>
            <option value="plano_cremacao">Plano Cremação</option>
            <option value="plano_com_skeklnah">Jardim com Skeklnah</option>
          </select>
          {errors.plano_funeral && (
            <span className="text-red-500 text-sm">
              {errors.plano_funeral.message}
            </span>
          )}
        </div>

        <div className="flex flex-col items-start justify-end space-y-2 md:min-h-[5rem] lg:min-h-[3rem]">
          <Label htmlFor="vencimento_boletos">
            Vencimento dos boleto <span className="text-red-500">*</span>
          </Label>
          <select
            id="vencimento_boletos"
            className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring-2 focus:ring-2 focus:ring-violet-600 rounded-md transition-all duration-200 flex h-10 w-full items-center justify-between border border-input bg-background px-2 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none"
            aria-label="Vencimento dos boleto"
            {...register("vencimento_boletos")}
          >
            <option value="">
              Vencimento dos boleto
            </option>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="28">28</option>
          </select>
          {errors.vencimento_boletos && (
            <span className="text-red-500 text-sm">
              {errors.vencimento_boletos.message}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-2 md:min-h-[5rem] lg:min-h-[3rem]">
          <Label htmlFor="data_vencimento">
            Data vencimento 1º boleto <span className="text-red-500">*</span>
          </Label>
          <Input
            id="data_vencimento"
            type="date"
            {...register("data_vencimento", { valueAsDate: true })}
          />
          {errors.data_vencimento?.message && (
            <span className="text-red-500 text-sm">{errors.data_vencimento.message}</span>
          )}
        </div>

        <div className="flex flex-col items-start justify-end space-y-2 md:min-h-[5rem] lg:min-h-[3rem]">
          <Label htmlFor="adesao">
            Pagou Adesão? <span className="text-red-500">*</span>
          </Label>
          <select
            id="adesao"
            className="ring-1 ring-violet-400 dark:ring-0 dark:focus:ring-2 focus:ring-2 focus:ring-violet-600 rounded-md transition-all duration-200 flex h-10 w-full items-center justify-between border border-input bg-background px-2 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none"
            aria-label="adesao"
            {...register("adesao")}
          >
            <option value="">
              Sim / Não
            </option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
          {errors.adesao && (
            <span className="text-red-600 text-sm">
              {errors.adesao.message}
            </span>
          )}
        </div>
      </div>

      {adesao === "sim" && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="data_pagamento_adesao">
              Data de pagamento da adesão <span className="text-red-500">*</span>
            </Label>
            <Input
              id="data_pagamento_adesao"
              type="date"
              {...register("data_pagamento_adesao", { valueAsDate: true })}
            />
            {errors.data_pagamento_adesao && (
              <span className="text-red-500 text-sm">
                {errors.data_pagamento_adesao.message?.toString()}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="comprovante_pagamento_adesao">
              Comprovante de pagamento da adesão <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="comprovante_pagamento_adesao"
              control={control}
              render={({ field }) => (
                <Input
                  id="comprovante_pagamento_adesao"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    field.onChange(file);
                  }}
                />
              )}
            />
            {errors.comprovante_pagamento_adesao && (
              <span className="text-red-500 text-sm">
                {errors.comprovante_pagamento_adesao.message?.toString()}
              </span>
            )}
          </div>
        </div>
      )}

      <h2 className="text-2xl font-semibold tracking-tight mb-3">Titular</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-5">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="name">
            Nome <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Digite seu nome completo"
            {...register("name")}
          />
          {errors.name?.message && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="cpf_cnpj">
            CPF/CNPJ <span className="text-red-500">*</span>
          </Label>
          <Input
            id="cpf_cnpj"
            type="text"
            placeholder="Digite seu CPF ou CNPJ"
            {...register("cpf_cnpj")}
            disabled={isSubmitting}
          />
          {errors.cpf_cnpj?.message && (
            <span className="text-red-500 text-sm">{errors.cpf_cnpj.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="data_nascimento">
            Data de nascimento <span className="text-red-500">*</span>
          </Label>
          <Input
            id="data_nascimento"
            type="date"
            {...register("data_nascimento", { valueAsDate: true })}
            disabled={isSubmitting}
          />
          {errors.data_nascimento?.message && (
            <span className="text-red-500 text-sm">{errors.data_nascimento.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="identidade_imagem">Identidade</Label>
          <Controller
            name="identidade_imagem"
            control={control}
            render={({ field }) => (
              <Input
                id="identidade_imagem"
                type="file"
                accept="image/jpeg, image/png"
                disabled={isSubmitting} 
                onChange={(e) => {
                  const file = e.target.files?.[0] || null
                  field.onChange(file)
                }}
              />
            )}
          />
          {errors.identidade_imagem?.message && (
            <span className="text-red-500 text-sm">{errors.identidade_imagem.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="rg">RG</Label>
          <Input
            id="rg"
            type="text"
            placeholder="Digite seu RG"
            {...register("rg")}
            disabled={isSubmitting}
          />
          {errors.rg?.message && (
            <span className="text-red-500 text-sm">{errors.rg.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            {...register("email")}
            disabled={isSubmitting}
          />
          {errors.email?.message && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="phone_fixo">Telefone fixo</Label>
          <Input
            id="phone_fixo"
            type="tel"
            placeholder="Digite seu telefone fixo"
            {...register("phone_fixo")}
            disabled={isSubmitting}
          />
          {errors.phone_fixo?.message && (
            <span className="text-red-500 text-sm">{errors.phone_fixo.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="phone">
            Celular <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Digite seu celular"
            {...register("phone")}
            disabled={isSubmitting}
          />
          {errors.phone?.message && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="cep">
            CEP <span className="text-red-500">*</span>
          </Label>
          <Input
            id="cep"
            type="text"
            placeholder="Digite seu CEP"
            {...register("cep")}
            disabled={isSubmitting}
          />
          {errors.cep?.message && (
            <span className="text-red-500 text-sm">{errors.cep.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="address.street_address">
            Rua <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address.street_address"
            type="text"
            placeholder="Digite sua rua"
            {...register("address.street_address")}
            disabled={isSubmitting}
          />
          {errors.address?.street_address?.message && (
            <span className="text-red-500 text-sm">{errors.address.street_address.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="address.number_address">Número</Label>
          <Input
            id="address.number_address"
            type="text"
            placeholder="Digite seu número"
            {...register("address.number_address")}
            disabled={isSubmitting}
          />
          {errors.address?.number_address?.message && (
            <span className="text-red-500 text-sm">{errors.address.number_address.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="address.complement">Complemento</Label>
          <Input
            id="address.complement"
            type="text"
            placeholder="Digite o complemento se houver"
            {...register("address.complement")}
            disabled={isSubmitting}
          />
          {errors.address?.complement?.message && (
            <span className="text-red-500 text-sm">{errors.address.complement.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="address.reference_point">
            Ponto de referência <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address.reference_point"
            type="text"
            placeholder="Digite seu ponto de referência"
            {...register("address.reference_point")}
            disabled={isSubmitting}
          />
          {errors.address?.reference_point?.message && (
            <span className="text-red-500 text-sm">{errors.address.reference_point.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="address.district">
            Bairro <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address.district"
            type="text"
            placeholder="Digite seu bairro"
            {...register("address.district")}
            disabled={isSubmitting}
          />
          {errors.address?.district?.message && (
            <span className="text-red-500 text-sm">{errors.address.district.message}</span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Label htmlFor="address.city">
            Cidade <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address.city"
            type="text"
            placeholder="Digite sua cidade"
            {...register("address.city")}
            disabled={isSubmitting}
          />
          {errors.address?.city?.message && (
            <span className="text-red-500 text-sm">{errors.address.city.message}</span>
          )}
        </div>

        <div className="flex flex-col items-start justify-end space-y-2 lg:mb-7 md:mb-12">
          <Label htmlFor="state">
            Estado <span className="text-red-500">*</span>
          </Label>
          <select
            id="state"
            className="md:w-[11.7rem] lg:w-[16.25rem] ring-1 ring-violet-400 dark:ring-0 dark:focus:ring-2 focus:ring-2 focus:ring-violet-600 rounded-md transition-all duration-200 flex h-10 w-full items-center justify-between border border-input bg-background px-2 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 cursor-default opacity-70 focus:overflow-y-hidden custom-scrollbar"
            aria-label="Selecione o estado"
            {...register("address.state")}
            disabled={isSubmitting}
          >
            <option value="">
              Selecione o estado
            </option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
          {errors?.address?.state && (
            <span className="text-red-500 text-sm">{errors.address.state.message}</span>
          )}
        </div>

        <div className="flex flex-col items-start justify-end space-y-2">
          <Label htmlFor="sexo">Sexo</Label>
          <select
            id="sexo"
            className="md:w-[11.7rem] lg:w-[16.25rem] ring-1 ring-violet-400 dark:ring-0 dark:focus:ring-2 focus:ring-2 focus:ring-violet-600 rounded-md transition-all duration-200 flex h-10 w-full items-center justify-between border border-input bg-background px-2 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 cursor-default opacity-70 focus:overflow-y-hidden"
            aria-label="Selecione o gênero"
            {...register("sexo")}
            disabled={isSubmitting}
          >
            <option value="">
              Selecione o gênero
            </option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="OUT">Outros</option>
          </select>
        </div>

        <div className="flex flex-col items-start justify-end space-y-2">
          <Label htmlFor="estado_civil">Estado Civil</Label>
          <select
            id="estado_civil"
            className="md:w-[11.7rem] lg:w-[16.25rem] ring-1 ring-violet-400 dark:ring-0 dark:focus:ring-2 focus:ring-2 focus:ring-violet-600 rounded-md transition-all duration-200 flex h-10 w-full items-center justify-between border border-input bg-background px-2 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 cursor-default opacity-70 focus:overflow-y-hidden"
            aria-label="Selecione o estado civil"
            {...register("estado_civil")}
            disabled={isSubmitting}
          >
            <option value="">
              Selecione
            </option>
            <option value="solteiro">Solteiro(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viuvo">Viúvo(a)</option>
            <option value="separado">Separado(a)</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <Button
            type="button"
            onClick={verificarValidacoesAntesDeAbrirModal}
            className="flex gap-2 w-full md:w-96"
            disabled={isSubmitting}
          >
            <FileText className="h-4 w-4" />
            Prévia do contrato - Minuta
          </Button>
          {isModalOpen && 
            <Minuta
              selectedPlano={selectedPlano}
              onAgreeAndRegister={handleSubmit(lidarComCadastroDeClientes)} 
              onClose={() => setIsModalOpen(false)} 
            />
            }
        </Dialog>
      </div>
    </form>
  )
}