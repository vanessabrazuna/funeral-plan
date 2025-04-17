import { Check, ShieldX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  DialogContent, DialogFooter, DialogHeader, DialogTitle 
} from "@/components/ui/dialog"
import { contratoDePlanos } from "@/data/contrato-de-planos"

interface MinutaProps {
  selectedPlano: string | null
  onAgreeAndRegister: () => void
  onClose: () => void
}

type PlanoChave = keyof typeof contratoDePlanos

export function Minuta({ selectedPlano, onAgreeAndRegister, onClose }: MinutaProps) {
  if (!selectedPlano || !(selectedPlano in contratoDePlanos)) {
    return (
      <DialogContent className="text-red-700 p-6 max-w-2xl mx-auto rounded-lg shadow-lg">
      <div className="flex items-center space-x-3">
        <ShieldX className="h-6 w-6 text-red-500" />
        <p className="text-xl font-semibold">
          Plano não encontrado.
        </p>
      </div>
      <p className="mt-4 text-lg">
        O plano selecionado não foi encontrado no sistema. Por favor, tente novamente ou entre em contato com o suporte.
      </p>
      <DialogFooter className="mt-6">
        <Button 
          type="button"
          onClick={onClose} 
          className="mx-auto w-full md:w-96 bg-red-500 hover:bg-red-600 text-white">
          Fechar
        </Button>
      </DialogFooter>
    </DialogContent>
    )
  }
  const plano = contratoDePlanos[selectedPlano as PlanoChave]

  return (
    <DialogContent className="bg-muted text-foreground p-6 max-w-5xl mx-auto h-full md:max-h-[560px] overflow-y-auto overflow-x-hidden rounded-lg shadow-lg">
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold text-start border-b border-foreground pb-4 fixed top-6 left-4 w-full bg-muted z-10">
          Minuta do {plano.nome}
        </DialogTitle>
      </DialogHeader>

      <main className="space-y-6 mt-14">
        {/* Seção de Inscrição do Plano */}
        <section>
          <strong>1. DA INSCRIÇÃO DO PLANO</strong>
          <p className="text-md">{plano.inscricao_do_plano}</p>
        </section>

        {/* Seção de Benefícios */}
        <section>
          <strong>2. DOS BENEFÍCIOS</strong>
          <p className="text-md">{plano.beneficios.descricao_do_beneficio}</p>
          <ul className="space-y-2">
            {Object.entries(plano.beneficios)
              .filter(([key]) => key !== "descricao_do_beneficio")
              .map(([key, beneficio], index) => (
                <li key={index}>{beneficio as string}</li>
              ))}
          </ul>
        </section>
        {/* Seção de Carência */}
        <section>
          <strong>3. DA CARÊNCIA</strong>
          <p className="text-md">{plano.carencia}</p>
        </section>

        {/* Seção de Beneficiários */}
        <section>
          <strong>4. DOS BENEFICIÁRIOS</strong>
          <p className="text-md">{plano.beneficiarios}</p>
        </section>

        {/* Seção de Atendimento */}
        <section>
          <strong>5. DO ATENDIMENTO</strong>
          <p className="text-md">{plano.atendimento.descricao_do_atendimento}</p>
          <ul className="space-y-2">
            <li className="text-sm">{plano.atendimento.nome_associado}</li>
            <li className="text-sm">{plano.atendimento.cpf_associado}</li>
            <li className="text-sm">{plano.atendimento.hora_falecimento}</li>
            <li className="text-sm">{plano.atendimento.endereco_do_corpo}</li>
            <li className="text-sm">{plano.atendimento.nome_do_responsavel_com_telefone_de_contato}</li>
          </ul>
        </section>

        {/* Seção de Kilometragem */}
        <section>
          <strong>6. DA KILOMETRAGEM</strong>
          <p className="text-md">{plano.kilometragem}</p>
        </section>

        {/* Seção de Cessação ou Suspensão dos Benefícios */}
        <section>
          <strong>7. DA CESSAÇÃO OU SUSPENSÃO DOS BENEFÍCIOS</strong>
          <p className="text-md">{plano.cessacao_ou_suspensao_dos_beneficios}</p>
        </section>

        {/* Seção de Sucessão e Cessão de Direitos */}
        <section>
          <strong>8. DA SUCESSÃO E CESSÃO DE DIREITOS</strong>
          <p className="text-md">{plano.sucessao_e_cessao_de_direitos}</p>
        </section>

        {/* Seção de Reajuste de Mensalidades */}
        <section>
          <strong>9. DO REAJUSTE DAS MENSALIDADES, SEGUNDA VIA DE CARNÊ E PENALIDADES POR INADIMPLÊNCIA</strong>
          <p className="text-md">{plano.reajuste_mensalidades_segunda_via_de_carne_e_penalidades_por_inadimplencia}</p>
        </section>

        {/* Seção de Disposições Finais */}
        <section>
          <strong>10. DAS DISPOSIÇÕES FINAIS</strong>
          <p className="text-md">{plano.disposicoes_finais}</p>
        </section>
      </main>

      <div className="flex flex-col justify-center items-center gap-5 my-4">
        <span className="text-xl font-medium">
          Valor do contrato: {plano.valor_do_contrato}
        </span>
        <DialogFooter>
          <Button 
            type="submit" 
            className="flex gap-2 w-full md:w-96"
            onClick={() => {
              onAgreeAndRegister()
              onClose()
            }}
          >
            <Check className="h-4 w-4" />
            Li e concordo e quero me cadastrar
          </Button>
        </DialogFooter>
      </div>
    </DialogContent>
  )
}
