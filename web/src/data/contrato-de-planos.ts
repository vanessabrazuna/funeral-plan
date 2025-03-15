type PlanoChave =
  | "plano_jardim_da_saudade"
  | "plano_jardim_da_saudade_4"
  | "plano_individual"
  | "plano_familiar"
  | "plano_cremacao"
  | "plano_com_skeklnah"

interface Beneficios {
  descricao_do_beneficio: string
  [key: string]: string
}

interface Atendimento {
  descricao_do_atendimento: string
  nome_associado: string
  cpf_associado: string
  hora_falecimento: string
  endereco_do_corpo: string
  nome_do_responsavel_com_telefone_de_contato: string
}

interface ContratoPlano {
  nome: string
  inscricao_do_plano: string
  beneficios: Beneficios
  carencia: string
  beneficiarios: string
  atendimento: Atendimento
  kilometragem: string
  cessacao_ou_suspensao_dos_beneficios: string
  sucessao_e_cessao_de_direitos: string
  reajuste_mensalidades_segunda_via_de_carne_e_penalidades_por_inadimplencia: string
  disposicoes_finais: string
  valor_do_contrato: string
}

export const contratoDePlanos: Record<PlanoChave, ContratoPlano> = {
  plano_jardim_da_saudade: {
    nome: "Plano Jardim da Saudade",
    inscricao_do_plano:
      "Considera-se titular aquele que preenchendo a proposta de adesão, tenham seu pedido deferido pela CONTRATADA e dependentes aqueles que assim forem indicados pelo titular e igualmente aceitos.",
    beneficios: {
      descricao_do_beneficio:
        "Os benefícios assegurados ao titular e seus dependentes estão abaixo relacionados sem custo adicional desde que o beneficiário esteja em dia com as suas mensalidades.",
      beneficio1:
        "Remoção do corpo do local do falecimento até a capela mortuária.",
      beneficio2:
        "Urna funerária para o associado conforme o plano escolhido, ornamentada com flores naturais da época.",
      beneficio3: "Uma coroa de flores.",
      beneficio4:
        "Registro de Óbito em cartório (se o Cartório ou Serventia admitir o registro por terceiros-despachantes).",
      beneficio5: "Preparação do Corpo.",
      beneficio6:
        "Pagamento de taxas cemiteriais relativas ao sepultamento, inclusive a Taxa de Exumação.",
      beneficio7: "Vestimenta (O Ato de Vestir).",
      beneficio8: "Aluguel de Capela para velório.",
      beneficio9:
        "Aluguel de Sepultamento que pode ser tradicional Cova Rasa ou Jazigo Social.",
      beneficio10:
        "Abrangência em todo território nacional, com cobertura em todos os CEMITÉRIOS PÚBLICOS, conforme disponibilidade.",
    },
    carencia:
      "Depois de cumprido período de carência inicial que são de 90 (noventa) dias até 59 (cinquenta e nove) anos e de 180 (cento e oitenta) dias até 79 (Setenta e nove) anos e 365 dias a partir de 80 (Oitenta Anos), contados em ambos os casos da data do efetivo pagamento da primeira mensalidade, o CONTRATANTE e seus dependentes terão direito a disponibilidade a assistência ao funeral.",
    beneficiarios:
      "Consideram-se beneficiários, nos termos e para efeito do presente, o titular, e as pessoas indicados na proposta de adesão como dependentes. O titular poderá substituir qualquer dependente trocando por outro à sua escolha, retirar ou acrescentar, bastando manifestar o seu desejo por escrito através de um requerimento enviado para nossos meios de comunicações oficieis.",
    atendimento: {
      descricao_do_atendimento:
        "Será mantida uma Central de Atendimento 24 (vinte e quatro) horas para suporte.",
      nome_associado: "Nome do associado",
      cpf_associado: "CPF do Associado",
      hora_falecimento: "Hora do falecimento",
      endereco_do_corpo: "Endereço onde se encontra o corpo",
      nome_do_responsavel_com_telefone_de_contato:
        "Nome do responsável pelo corpo e telefone para contato",
    },
    kilometragem:
      "Sepultamento fora do município de residência: despesas com translado que exceder 200 km serão de responsabilidade do contratante.",
    cessacao_ou_suspensao_dos_beneficios:
      "Tornar-se-á suspensa a fruição dos beneficiários nos casos de calamidade pública ou atraso de pagamento acima de 90 dias.",
    sucessao_e_cessao_de_direitos:
      "Ocorrendo a falta do titular, um beneficiário poderá ser indicado como novo titular responsável.",
    reajuste_mensalidades_segunda_via_de_carne_e_penalidades_por_inadimplencia:
      "Os valores das contribuições mensais serão reajustados anualmente com base no índice de inflação vigente.",
    disposicoes_finais:
      "Os casos omissos deverão ser resolvidos pela Diretoria da Assistência Santa Casa da Glória.",
    valor_do_contrato: "70,00",
  },
  plano_jardim_da_saudade_4: {
    nome: "Plano Jardim da Saudade 4",
    inscricao_do_plano: "Considera-se titular aquele que preenchendo a proposta de adesão, tenham seu pedido deferido pela CONTRATADA e dependentes aqueles que assim forem indicados pelo titular e igualmente aceitos.",
    beneficios: {
      descricao_do_beneficio: "Os benefícios assegurados ao titular e seus dependentes estão abaixo relacionados sem custo adicional desde que o beneficiário esteja em dia com as suas mensalidades.",
      beneficio1: "Remoção do corpo do local do falecimento até a capela mortuária.",
      beneficio2: "Urna funerária para o associado conforme o plano escolhido, ornamentada com flores naturais da época.",
      beneficio3: "Uma coroa de flores.",
      beneficio4: "Registro de Óbito em cartório (se o Cartório ou Serventia admitir o registro por terceiros-despachantes).",
      beneficio5: "Preparação do Corpo.",
      beneficio6: "Pagamento de taxas cemiteriais relativas ao sepultamento, inclusive a Taxa de Exumação",
      beneficio7: "Vestimenta (O Ato de Vestir).",
      beneficio8: "Aluguel de Capela para velório.",
      beneficio9: "Aluguel de Sepultamento que pode ser tradicional Cova Rasa ou Jazigo Social.",
      beneficio10: "Abrangência em todo território nacional, com cobertura em todos os CEMITÉRIOS PÚBLICOS, conforme disponibilidade.",
    },
    carencia: "Depois de cumprido período de carência inicial que são de 90 (noventa) dias até 59 (cinquenta e nove) anos e de 180 (cento e oitenta) dias até 79 (Setenta e nove) anos e 365 dias a partir de 80 (Oitenta Anos), contados em ambos os casos da data do efetivo pagamento da primeira mensalidade, o CONTRATANTE e seus dependentes terão direito a disponibilidade a assistência ao funeral.",
    beneficiarios: "Consideram-se beneficiários, nos termos e para efeito do presente, o titular, e as pessoas indicados na proposta de adesão como dependentes. O titular poderá substituir qualquer dependente trocando por outro à sua escolha, retirar ou acrescentar, bastando manifestar o seu desejo por escrito através de um requerimento enviado para nossos meios de comunicações oficieis. Ocorrendo a hipótese acima, deverá o substituto ou o novo dependente cumprir o estabelecido no item 3 (Da Carência) deste regulamento.",
    atendimento: {
      descricao_do_atendimento: "Para possibilitar a requisição dos beneficiários previstos neste regulamento, será mantida uma Central de Atendimento 24 (vinte e quatro) horas, que a Santa Casa da Glória deverá informar ao associado os telefones e outros meios de comunicação no ato de sua aceitação no plano escolhido. Todo e qualquer benefício somente será prestado ou fornecido exclusivamente e privativamente pela Santa Casa da Glória ou por pessoas, Físicas ou Jurídicas, devidamente credenciadas pela Brasil Pax Rio, na forma do presente regulamento, não se admitindo, por nenhum pretexto, a interferência de pessoas estranha a Santa Casa da Glória, sendo vedado qualquer pagamento por parte dos associados a estranhos, não havendo qualquer responsabilidade da Santa Casa da Glória por despesas, sejam elas quais forem decorrentes de infrações a essa vedação regulamentar. A família do associado ou responsável deverá contatar a Santa Casa da Glória imediatamente após ocorrido o falecimento, dando as seguintes informações:",
      nome_associado: "Nome do associado",
      cpf_associado: "CPF do Associado",
      hora_falecimento: "Hora do falecimento",
      endereco_do_corpo: "Endereço onde se encontra o corpo",
      nome_do_responsavel_com_telefone_de_contato: "Nome do responsável pelo corpo e telefone para contato",
    },
    kilometragem: "Sepultamento fora do município de residência: quando ocorrer o óbito fora do município de residência do contratante e ou dependente e a família optar em sepultá-lo na cidade de sua residência a contratada se obriga a prestar a assistência completa ao funeral, contudo as despesas com translado que exceder o limite de 200 (duzentos) quilômetros entre ida e volta, será de única e exclusiva responsabilidade do Contratante.",
    cessacao_ou_suspensao_dos_beneficios: "Tornar-se-á suspensa a fruição dos beneficiários aqui descritos, nos casos de calamidade pública, declarada por órgãos competentes. Após o 1° (primeiro) dia de atraso com suas contribuições mensais o associado será considerado inadimplente temporário, perdendo o direito dos benefícios do presente regulamento, até a data de sua total regularização. Após a regularização ele entra novamente na carência aonde cada dia de atraso, equivale a um dia de carência. Durante a carência inicial (carência por idade), 50% dos custos dos itens cobertos e mencionados nesse termo serão custeados pela CONTRATADA os outros 50% serão arcados pelo CONTRATANTE. Após 90 (noventa) dias corridos de atraso com suas contribuições mensais, o associado poderá ter sua inscrição no quadro de associados cancelada a critério da Santa Casa da Glória, cessando todos os seus direitos junto a mesma. O associado poderá, se assim desejar, desligar-se a qualquer momento, bastando que mande um requerimento de exclusão do quadro de associados para nossos meios de comunicações oficiais.",
    sucessao_e_cessao_de_direitos: "Ocorrendo a falta do titular, haverá um requerimento de um dos beneficiários existentes, apontando um novo titular responsável, para que possam continuar completando o quadro de associados e usufruindo de todos os benefícios do presente regulamento.",
    reajuste_mensalidades_segunda_via_de_carne_e_penalidades_por_inadimplencia: "Os valores das contribuições mensais serão reajustados com base no índice de reajustes de preço que reflita eventual inflação, na forma da legislação em vigor, com periodicidade anual. O atraso devido mais juros moratórios e compensatórios e custa judiciais (10% ao mês) ficando automaticamente suspensa a função dos beneficiários previstos neste regulamento, até que seja sanada a inadimplência, sem necessidades de aviso prévio ou interpelação judicial ou extrajudicial, acarretando, a critério da Santa Casa da Glória, a perda de todas as contribuições até então pagas pelo titular, obedecendo, nesta parte os limites do sistema legal, vigente a época aqui prevista. Na solicitação de outro carnê físico por roubo, perda e/ou exclusão de associados ou outro motivo semelhante, será cobrado o valor de R$10,00 (Dez Reais) no pagamento da próxima mensalidade.",
    disposicoes_finais: "Os casos omissos deverão ser resolvidos pela Diretoria da Assistência Santa Casa da Glória. Fica eleito o foro da Cidade do Rio de Janeiro, com renúncia expressa de qualquer outro, por mais privilegiado que seja, para resolver qualquer questão relativa a este regulamento.",
    valor_do_contrato: "70,00",
  },
  plano_individual: {
    nome: "Plano Individual",
    inscricao_do_plano: "Considera-se titular aquele que preenchendo a proposta de adesão, tenham seu pedido deferido pela CONTRATADA e dependentes aqueles que assim forem indicados pelo titular e igualmente aceitos.",
    beneficios: {
      descricao_do_beneficio: "Os benefícios assegurados ao titular e seus dependentes estão abaixo relacionados sem custo adicional desde que o beneficiário esteja em dia com as suas mensalidades.",
      beneficio1: "Remoção do corpo do local do falecimento até a capela mortuária.",
      beneficio2: "Urna funerária para o associado conforme o plano escolhido, ornamentada com flores naturais da época.",
      beneficio3: "Uma coroa de flores.",
      beneficio4: "Registro de Óbito em cartório (se o Cartório ou Serventia admitir o registro por terceiros-despachantes).",
      beneficio5: "Preparação do Corpo.",
      beneficio6: "Pagamento de taxas cemiteriais relativas ao sepultamento, inclusive a Taxa de Exumação",
      beneficio7: "Vestimenta (O Ato de Vestir).",
      beneficio8: "Aluguel de Capela para velório.",
      beneficio9: "Aluguel de Sepultamento que pode ser tradicional Cova Rasa ou Jazigo Social.",
      beneficio10: "Abrangência em todo território nacional, com cobertura em todos os CEMITÉRIOS PÚBLICOS, conforme disponibilidade.",
    },
    carencia: "Depois de cumprido período de carência inicial que são de 90 (noventa) dias até 59 (cinquenta e nove) anos e de 180 (cento e oitenta) dias até 79 (Setenta e nove) anos e 365 dias a partir de 80 (Oitenta Anos), contados em ambos os casos da data do efetivo pagamento da primeira mensalidade, o CONTRATANTE e seus dependentes terão direito a disponibilidade a assistência ao funeral.",
    beneficiarios: "Consideram-se beneficiários, nos termos e para efeito do presente, o titular, e as pessoas indicados na proposta de adesão como dependentes. O titular poderá substituir qualquer dependente trocando por outro à sua escolha, retirar ou acrescentar, bastando manifestar o seu desejo por escrito através de um requerimento enviado para nossos meios de comunicações oficieis. Ocorrendo a hipótese acima, deverá o substituto ou o novo dependente cumprir o estabelecido no item 3 (Da Carência) deste regulamento.",
    atendimento: {
      descricao_do_atendimento: "Para possibilitar a requisição dos beneficiários previstos neste regulamento, será mantida uma Central de Atendimento 24 (vinte e quatro) horas, que a Santa Casa da Glória deverá informar ao associado os telefones e outros meios de comunicação no ato de sua aceitação no plano escolhido. Todo e qualquer benefício somente será prestado ou fornecido exclusivamente e privativamente pela Santa Casa da Glória ou por pessoas, Físicas ou Jurídicas, devidamente credenciadas pela Brasil Pax Rio, na forma do presente regulamento, não se admitindo, por nenhum pretexto, a interferência de pessoas estranha a Santa Casa da Glória, sendo vedado qualquer pagamento por parte dos associados a estranhos, não havendo qualquer responsabilidade da Santa Casa da Glória por despesas, sejam elas quais forem decorrentes de infrações a essa vedação regulamentar. A família do associado ou responsável deverá contatar a Santa Casa da Glória imediatamente após ocorrido o falecimento, dando as seguintes informações:",
      nome_associado: "Nome do associado",
      cpf_associado: "CPF do Associado",
      hora_falecimento: "Hora do falecimento",
      endereco_do_corpo: "Endereço onde se encontra o corpo",
      nome_do_responsavel_com_telefone_de_contato: "Nome do responsável pelo corpo e telefone para contato",
    },
    kilometragem: "Sepultamento fora do município de residência: quando ocorrer o óbito fora do município de residência do contratante e ou dependente e a família optar em sepultá-lo na cidade de sua residência a contratada se obriga a prestar a assistência completa ao funeral, contudo as despesas com translado que exceder o limite de 200 (duzentos) quilômetros entre ida e volta, será de única e exclusiva responsabilidade do Contratante.",
    cessacao_ou_suspensao_dos_beneficios: "Tornar-se-á suspensa a fruição dos beneficiários aqui descritos, nos casos de calamidade pública, declarada por órgãos competentes. Após o 1° (primeiro) dia de atraso com suas contribuições mensais o associado será considerado inadimplente temporário, perdendo o direito dos benefícios do presente regulamento, até a data de sua total regularização. Após a regularização ele entra novamente na carência aonde cada dia de atraso, equivale a um dia de carência. Durante a carência inicial (carência por idade), 50% dos custos dos itens cobertos e mencionados nesse termo serão custeados pela CONTRATADA os outros 50% serão arcados pelo CONTRATANTE. Após 90 (noventa) dias corridos de atraso com suas contribuições mensais, o associado poderá ter sua inscrição no quadro de associados cancelada a critério da Santa Casa da Glória, cessando todos os seus direitos junto a mesma. O associado poderá, se assim desejar, desligar-se a qualquer momento, bastando que mande um requerimento de exclusão do quadro de associados para nossos meios de comunicações oficiais.",
    sucessao_e_cessao_de_direitos: "Ocorrendo a falta do titular, haverá um requerimento de um dos beneficiários existentes, apontando um novo titular responsável, para que possam continuar completando o quadro de associados e usufruindo de todos os benefícios do presente regulamento.",
    reajuste_mensalidades_segunda_via_de_carne_e_penalidades_por_inadimplencia: "Os valores das contribuições mensais serão reajustados com base no índice de reajustes de preço que reflita eventual inflação, na forma da legislação em vigor, com periodicidade anual. O atraso devido mais juros moratórios e compensatórios e custa judiciais (10% ao mês) ficando automaticamente suspensa a função dos beneficiários previstos neste regulamento, até que seja sanada a inadimplência, sem necessidades de aviso prévio ou interpelação judicial ou extrajudicial, acarretando, a critério da Santa Casa da Glória, a perda de todas as contribuições até então pagas pelo titular, obedecendo, nesta parte os limites do sistema legal, vigente a época aqui prevista. Na solicitação de outro carnê físico por roubo, perda e/ou exclusão de associados ou outro motivo semelhante, será cobrado o valor de R$10,00 (Dez Reais) no pagamento da próxima mensalidade.",
    disposicoes_finais: "Os casos omissos deverão ser resolvidos pela Diretoria da Assistência Santa Casa da Glória. Fica eleito o foro da Cidade do Rio de Janeiro, com renúncia expressa de qualquer outro, por mais privilegiado que seja, para resolver qualquer questão relativa a este regulamento.",
    valor_do_contrato: "22,00",
  },
  plano_familiar: {
    nome: "Plano Familiar",
    inscricao_do_plano: "Considera-se titular aquele que preenchendo a proposta de adesão, tenham seu pedido deferido pela CONTRATADA e dependentes aqueles que assim forem indicados pelo titular e igualmente aceitos.",
    beneficios: {
      descricao_do_beneficio: "Os benefícios assegurados ao titular e seus dependentes estão abaixo relacionados sem custo adicional desde que o beneficiário esteja em dia com as suas mensalidades.",
      beneficio1: "Remoção do corpo do local do falecimento até a capela mortuária.",
      beneficio2: "Urna funerária para o associado conforme o plano escolhido, ornamentada com flores naturais da época.",
      beneficio3: "Uma coroa de flores.",
      beneficio4: "Registro de Óbito em cartório (se o Cartório ou Serventia admitir o registro por terceiros-despachantes).",
      beneficio5: "Preparação do Corpo.",
      beneficio6: "Pagamento de taxas cemiteriais relativas ao sepultamento, inclusive a Taxa de Exumação",
      beneficio7: "Vestimenta (O Ato de Vestir).",
      beneficio8: "Aluguel de Capela para velório.",
      beneficio9: "Aluguel de Sepultamento que pode ser tradicional Cova Rasa ou Jazigo Social.",
      beneficio10: "Abrangência em todo território nacional, com cobertura em todos os CEMITÉRIOS PÚBLICOS, conforme disponibilidade.",
    },
    carencia: "Depois de cumprido período de carência inicial que são de 90 (noventa) dias até 59 (cinquenta e nove) anos e de 180 (cento e oitenta) dias até 79 (Setenta e nove) anos e 365 dias a partir de 80 (Oitenta Anos), contados em ambos os casos da data do efetivo pagamento da primeira mensalidade, o CONTRATANTE e seus dependentes terão direito a disponibilidade a assistência ao funeral.",
    beneficiarios: "Consideram-se beneficiários, nos termos e para efeito do presente, o titular, e as pessoas indicados na proposta de adesão como dependentes. O titular poderá substituir qualquer dependente trocando por outro à sua escolha, retirar ou acrescentar, bastando manifestar o seu desejo por escrito através de um requerimento enviado para nossos meios de comunicações oficieis. Ocorrendo a hipótese acima, deverá o substituto ou o novo dependente cumprir o estabelecido no item 3 (Da Carência) deste regulamento.",
    atendimento: {
      descricao_do_atendimento: "Para possibilitar a requisição dos beneficiários previstos neste regulamento, será mantida uma Central de Atendimento 24 (vinte e quatro) horas, que a Santa Casa da Glória deverá informar ao associado os telefones e outros meios de comunicação no ato de sua aceitação no plano escolhido. Todo e qualquer benefício somente será prestado ou fornecido exclusivamente e privativamente pela Santa Casa da Glória ou por pessoas, Físicas ou Jurídicas, devidamente credenciadas pela Brasil Pax Rio, na forma do presente regulamento, não se admitindo, por nenhum pretexto, a interferência de pessoas estranha a Santa Casa da Glória, sendo vedado qualquer pagamento por parte dos associados a estranhos, não havendo qualquer responsabilidade da Santa Casa da Glória por despesas, sejam elas quais forem decorrentes de infrações a essa vedação regulamentar. A família do associado ou responsável deverá contatar a Santa Casa da Glória imediatamente após ocorrido o falecimento, dando as seguintes informações:",
      nome_associado: "Nome do associado",
      cpf_associado: "CPF do Associado",
      hora_falecimento: "Hora do falecimento",
      endereco_do_corpo: "Endereço onde se encontra o corpo",
      nome_do_responsavel_com_telefone_de_contato: "Nome do responsável pelo corpo e telefone para contato",
    },
    kilometragem: "Sepultamento fora do município de residência: quando ocorrer o óbito fora do município de residência do contratante e ou dependente e a família optar em sepultá-lo na cidade de sua residência a contratada se obriga a prestar a assistência completa ao funeral, contudo as despesas com translado que exceder o limite de 200 (duzentos) quilômetros entre ida e volta, será de única e exclusiva responsabilidade do Contratante.",
    cessacao_ou_suspensao_dos_beneficios: "Tornar-se-á suspensa a fruição dos beneficiários aqui descritos, nos casos de calamidade pública, declarada por órgãos competentes. Após o 1° (primeiro) dia de atraso com suas contribuições mensais o associado será considerado inadimplente temporário, perdendo o direito dos benefícios do presente regulamento, até a data de sua total regularização. Após a regularização ele entra novamente na carência aonde cada dia de atraso, equivale a um dia de carência. Durante a carência inicial (carência por idade), 50% dos custos dos itens cobertos e mencionados nesse termo serão custeados pela CONTRATADA os outros 50% serão arcados pelo CONTRATANTE. Após 90 (noventa) dias corridos de atraso com suas contribuições mensais, o associado poderá ter sua inscrição no quadro de associados cancelada a critério da Santa Casa da Glória, cessando todos os seus direitos junto a mesma. O associado poderá, se assim desejar, desligar-se a qualquer momento, bastando que mande um requerimento de exclusão do quadro de associados para nossos meios de comunicações oficiais.",
    sucessao_e_cessao_de_direitos: "Ocorrendo a falta do titular, haverá um requerimento de um dos beneficiários existentes, apontando um novo titular responsável, para que possam continuar completando o quadro de associados e usufruindo de todos os benefícios do presente regulamento.",
    reajuste_mensalidades_segunda_via_de_carne_e_penalidades_por_inadimplencia: "Os valores das contribuições mensais serão reajustados com base no índice de reajustes de preço que reflita eventual inflação, na forma da legislação em vigor, com periodicidade anual. O atraso devido mais juros moratórios e compensatórios e custa judiciais (10% ao mês) ficando automaticamente suspensa a função dos beneficiários previstos neste regulamento, até que seja sanada a inadimplência, sem necessidades de aviso prévio ou interpelação judicial ou extrajudicial, acarretando, a critério da Santa Casa da Glória, a perda de todas as contribuições até então pagas pelo titular, obedecendo, nesta parte os limites do sistema legal, vigente a época aqui prevista. Na solicitação de outro carnê físico por roubo, perda e/ou exclusão de associados ou outro motivo semelhante, será cobrado o valor de R$10,00 (Dez Reais) no pagamento da próxima mensalidade.",
    disposicoes_finais: "Os casos omissos deverão ser resolvidos pela Diretoria da Assistência Santa Casa da Glória. Fica eleito o foro da Cidade do Rio de Janeiro, com renúncia expressa de qualquer outro, por mais privilegiado que seja, para resolver qualquer questão relativa a este regulamento.",
    valor_do_contrato: "22,00",
  },
  plano_cremacao: {
    nome: "Plano Cremação",
    inscricao_do_plano: "Considera-se titular aquele que preenchendo a proposta de adesão, tenham seu pedido deferido pela CONTRATADA e dependentes aqueles que assim forem indicados pelo titular e igualmente aceitos.",
    beneficios: {
      descricao_do_beneficio: "Os benefícios assegurados ao titular e seus dependentes estão abaixo relacionados sem custo adicional desde que o beneficiário esteja em dia com as suas mensalidades.",
      beneficio1: "Remoção do corpo do local do falecimento até a capela mortuária.",
      beneficio2: "Urna funerária para o associado conforme o plano escolhido, ornamentada com flores naturais da época.",
      beneficio3: "Uma coroa de flores.",
      beneficio4: "Registro de Óbito em cartório (se o Cartório ou Serventia admitir o registro por terceiros-despachantes).",
      beneficio5: "Preparação do Corpo.",
      beneficio6: "Pagamento de taxas cemiteriais relativas ao sepultamento, inclusive a Taxa de Exumação",
      beneficio7: "Vestimenta (O Ato de Vestir).",
      beneficio8: "Aluguel de Capela para velório.",
      beneficio9: "Aluguel de Sepultamento que pode ser tradicional Cova Rasa ou Jazigo Social.",
      beneficio10: "Abrangência em todo território nacional, com cobertura em todos os CEMITÉRIOS PÚBLICOS, conforme disponibilidade.",
    },
    carencia: "Depois de cumprido período de carência inicial que são de 90 (noventa) dias até 59 (cinquenta e nove) anos e de 180 (cento e oitenta) dias até 79 (Setenta e nove) anos e 365 dias a partir de 80 (Oitenta Anos), contados em ambos os casos da data do efetivo pagamento da primeira mensalidade, o CONTRATANTE e seus dependentes terão direito a disponibilidade a assistência ao funeral.",
    beneficiarios: "Consideram-se beneficiários, nos termos e para efeito do presente, o titular, e as pessoas indicados na proposta de adesão como dependentes. O titular poderá substituir qualquer dependente trocando por outro à sua escolha, retirar ou acrescentar, bastando manifestar o seu desejo por escrito através de um requerimento enviado para nossos meios de comunicações oficieis. Ocorrendo a hipótese acima, deverá o substituto ou o novo dependente cumprir o estabelecido no item 3 (Da Carência) deste regulamento.",
    atendimento: {
      descricao_do_atendimento: "Para possibilitar a requisição dos beneficiários previstos neste regulamento, será mantida uma Central de Atendimento 24 (vinte e quatro) horas, que a Santa Casa da Glória deverá informar ao associado os telefones e outros meios de comunicação no ato de sua aceitação no plano escolhido. Todo e qualquer benefício somente será prestado ou fornecido exclusivamente e privativamente pela Santa Casa da Glória ou por pessoas, Físicas ou Jurídicas, devidamente credenciadas pela Brasil Pax Rio, na forma do presente regulamento, não se admitindo, por nenhum pretexto, a interferência de pessoas estranha a Santa Casa da Glória, sendo vedado qualquer pagamento por parte dos associados a estranhos, não havendo qualquer responsabilidade da Santa Casa da Glória por despesas, sejam elas quais forem decorrentes de infrações a essa vedação regulamentar. A família do associado ou responsável deverá contatar a Santa Casa da Glória imediatamente após ocorrido o falecimento, dando as seguintes informações:",
      nome_associado: "Nome do associado",
      cpf_associado: "CPF do Associado",
      hora_falecimento: "Hora do falecimento",
      endereco_do_corpo: "Endereço onde se encontra o corpo",
      nome_do_responsavel_com_telefone_de_contato: "Nome do responsável pelo corpo e telefone para contato",
    },
    kilometragem: "Sepultamento fora do município de residência: quando ocorrer o óbito fora do município de residência do contratante e ou dependente e a família optar em sepultá-lo na cidade de sua residência a contratada se obriga a prestar a assistência completa ao funeral, contudo as despesas com translado que exceder o limite de 200 (duzentos) quilômetros entre ida e volta, será de única e exclusiva responsabilidade do Contratante",
    cessacao_ou_suspensao_dos_beneficios: "Tornar-se-á suspensa a fruição dos beneficiários aqui descritos, nos casos de calamidade pública, declarada por órgãos competentes. Após o 1° (primeiro) dia de atraso com suas contribuições mensais o associado será considerado inadimplente temporário, perdendo o direito dos benefícios do presente regulamento, até a data de sua total regularização. Após a regularização ele entra novamente na carência aonde cada dia de atraso, equivale a um dia de carência. Durante a carência inicial (carência por idade), 50% dos custos dos itens cobertos e mencionados nesse termo serão custeados pela CONTRATADA os outros 50% serão arcados pelo CONTRATANTE. Após 90 (noventa) dias corridos de atraso com suas contribuições mensais, o associado poderá ter sua inscrição no quadro de associados cancelada a critério da Santa Casa da Glória, cessando todos os seus direitos junto a mesma. O associado poderá, se assim desejar, desligar-se a qualquer momento, bastando que mande um requerimento de exclusão do quadro de associados para nossos meios de comunicações oficiais.",
    sucessao_e_cessao_de_direitos: "Ocorrendo a falta do titular, haverá um requerimento de um dos beneficiários existentes, apontando um novo titular responsável, para que possam continuar completando o quadro de associados e usufruindo de todos os benefícios do presente regulamento.",
    reajuste_mensalidades_segunda_via_de_carne_e_penalidades_por_inadimplencia: "Os valores das contribuições mensais serão reajustados com base no índice de reajustes de preço que reflita eventual inflação, na forma da legislação em vigor, com periodicidade anual. O atraso devido mais juros moratórios e compensatórios e custa judiciais (10% ao mês) ficando automaticamente suspensa a função dos beneficiários previstos neste regulamento, até que seja sanada a inadimplência, sem necessidades de aviso prévio ou interpelação judicial ou extrajudicial, acarretando, a critério da Santa Casa da Glória, a perda de todas as contribuições até então pagas pelo titular, obedecendo, nesta parte os limites do sistema legal, vigente a época aqui prevista. Na solicitação de outro carnê físico por roubo, perda e/ou exclusão de associados ou outro motivo semelhante, será cobrado o valor de R$10,00 (Dez Reais) no pagamento da próxima mensalidade.",
    disposicoes_finais: "Os casos omissos deverão ser resolvidos pela Diretoria da Assistência Santa Casa da Glória. Fica eleito o foro da Cidade do Rio de Janeiro, com renúncia expressa de qualquer outro, por mais privilegiado que seja, para resolver qualquer questão relativa a este regulamento.",
    valor_do_contrato: "40,00",
  },
  plano_com_skeklnah: {
    nome: "Plano com Skeklnah",
    inscricao_do_plano: "Considera-se titular aquele que preenchendo a proposta de adesão, tenham seu pedido deferido pela CONTRATADA e dependentes aqueles que assim forem indicados pelo titular e igualmente aceitos.",
    beneficios: {
      descricao_do_beneficio: "Os benefícios assegurados ao titular e seus dependentes estão abaixo relacionados sem custo adicional desde que o beneficiário esteja em dia com as suas mensalidades.",
      beneficio1: "Remoção do corpo do local do falecimento até a capela mortuária.",
      beneficio2: "Urna funerária para o associado conforme o plano escolhido, ornamentada com flores naturais da época.",
      beneficio3: "Uma coroa de flores.",
      beneficio4: "Registro de Óbito em cartório (se o Cartório ou Serventia admitir o registro por terceiros-despachantes).",
      beneficio5: "Preparação do Corpo.",
      beneficio6: "Pagamento de taxas cemiteriais relativas ao sepultamento, inclusive a Taxa de Exumação",
      beneficio7: "Vestimenta (O Ato de Vestir).",
      beneficio8: "Aluguel de Capela para velório.",
      beneficio9: "Aluguel de Sepultamento que pode ser tradicional Cova Rasa ou Jazigo Social.",
      beneficio10: "Abrangência em todo território nacional, com cobertura em todos os CEMITÉRIOS PÚBLICOS, conforme disponibilidade.",
    },
    carencia: "Depois de cumprido período de carência inicial que são de 90 (noventa) dias até 59 (cinquenta e nove) anos e de 180 (cento e oitenta) dias até 79 (Setenta e nove) anos e 365 dias a partir de 80 (Oitenta Anos), contados em ambos os casos da data do efetivo pagamento da primeira mensalidade, o CONTRATANTE e seus dependentes terão direito a disponibilidade a assistência ao funeral.",
    beneficiarios: "Consideram-se beneficiários, nos termos e para efeito do presente, o titular, e as pessoas indicados na proposta de adesão como dependentes. O titular poderá substituir qualquer dependente trocando por outro à sua escolha, retirar ou acrescentar, bastando manifestar o seu desejo por escrito através de um requerimento enviado para nossos meios de comunicações oficieis. Ocorrendo a hipótese acima, deverá o substituto ou o novo dependente cumprir o estabelecido no item 3 (Da Carência) deste regulamento.",
    atendimento: {
      descricao_do_atendimento: "Para possibilitar a requisição dos beneficiários previstos neste regulamento, será mantida uma Central de Atendimento 24 (vinte e quatro) horas, que a Santa Casa da Glória deverá informar ao associado os telefones e outros meios de comunicação no ato de sua aceitação no plano escolhido. Todo e qualquer benefício somente será prestado ou fornecido exclusivamente e privativamente pela Santa Casa da Glória ou por pessoas, Físicas ou Jurídicas, devidamente credenciadas pela Brasil Pax Rio, na forma do presente regulamento, não se admitindo, por nenhum pretexto, a interferência de pessoas estranha a Santa Casa da Glória, sendo vedado qualquer pagamento por parte dos associados a estranhos, não havendo qualquer responsabilidade da Santa Casa da Glória por despesas, sejam elas quais forem decorrentes de infrações a essa vedação regulamentar. A família do associado ou responsável deverá contatar a Santa Casa da Glória imediatamente após ocorrido o falecimento, dando as seguintes informações:",
      nome_associado: "Nome do associado",
      cpf_associado: "CPF do Associado",
      hora_falecimento: "Hora do falecimento",
      endereco_do_corpo: "Endereço onde se encontra o corpo",
      nome_do_responsavel_com_telefone_de_contato: "Nome do responsável pelo corpo e telefone para contato",
    },
    kilometragem: "Sepultamento fora do município de residência: quando ocorrer o óbito fora do município de residência do contratante e ou dependente e a família optar em sepultá-lo na cidade de sua residência a contratada se obriga a prestar a assistência completa ao funeral, contudo as despesas com translado que exceder o limite de 200 (duzentos) quilômetros entre ida e volta, será de única e exclusiva responsabilidade do Contratante",
    cessacao_ou_suspensao_dos_beneficios: "Tornar-se-á suspensa a fruição dos beneficiários aqui descritos, nos casos de calamidade pública, declarada por órgãos competentes. Após o 1° (primeiro) dia de atraso com suas contribuições mensais o associado será considerado inadimplente temporário, perdendo o direito dos benefícios do presente regulamento, até a data de sua total regularização. Após a regularização ele entra novamente na carência aonde cada dia de atraso, equivale a um dia de carência. Durante a carência inicial (carência por idade), 50% dos custos dos itens cobertos e mencionados nesse termo serão custeados pela CONTRATADA os outros 50% serão arcados pelo CONTRATANTE. Após 90 (noventa) dias corridos de atraso com suas contribuições mensais, o associado poderá ter sua inscrição no quadro de associados cancelada a critério da Santa Casa da Glória, cessando todos os seus direitos junto a mesma. O associado poderá, se assim desejar, desligar-se a qualquer momento, bastando que mande um requerimento de exclusão do quadro de associados para nossos meios de comunicações oficiais.",
    sucessao_e_cessao_de_direitos: "Ocorrendo a falta do titular, haverá um requerimento de um dos beneficiários existentes, apontando um novo titular responsável, para que possam continuar completando o quadro de associados e usufruindo de todos os benefícios do presente regulamento.",
    reajuste_mensalidades_segunda_via_de_carne_e_penalidades_por_inadimplencia: "Os valores das contribuições mensais serão reajustados com base no índice de reajustes de preço que reflita eventual inflação, na forma da legislação em vigor, com periodicidade anual. O atraso devido mais juros moratórios e compensatórios e custa judiciais (10% ao mês) ficando automaticamente suspensa a função dos beneficiários previstos neste regulamento, até que seja sanada a inadimplência, sem necessidades de aviso prévio ou interpelação judicial ou extrajudicial, acarretando, a critério da Santa Casa da Glória, a perda de todas as contribuições até então pagas pelo titular, obedecendo, nesta parte os limites do sistema legal, vigente a época aqui prevista. Na solicitação de outro carnê físico por roubo, perda e/ou exclusão de associados ou outro motivo semelhante, será cobrado o valor de R$10,00 (Dez Reais) no pagamento da próxima mensalidade.",
    disposicoes_finais: "Os casos omissos deverão ser resolvidos pela Diretoria da Assistência Santa Casa da Glória. Fica eleito o foro da Cidade do Rio de Janeiro, com renúncia expressa de qualquer outro, por mais privilegiado que seja, para resolver qualquer questão relativa a este regulamento.",
    valor_do_contrato: "22,00",
  },
}
