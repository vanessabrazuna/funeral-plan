interface Plano {
  tipo: string
  dados: {
    faixa_etaria: string
    valor: string
    carencia: string
    vantagens: string
  }[]
}

interface Adesao {
  local: string
  valor: string
}

interface ClubeDeVantagem {
  tipo: string
  valor: string
  adesao: string
}

interface Telemedicina {
  tipo: string
  valor: string
  adesao: string
}

interface tabelaDePrecoData {
  planos: Plano[]
  adesao: Adesao[]
  clubeDeVantagem: ClubeDeVantagem[]
  telemedicina: Telemedicina[]
}

export const tabelaDePreco: tabelaDePrecoData = {
  planos: [
    {
      tipo: "Plano Individual",
      dados: [
        { faixa_etaria: "18 a 59 anos", valor: "R$ 22,00", carencia: "3 Meses", vantagens: "Clube de Vantagem" },
        { faixa_etaria: "60 a 79 anos", valor: "R$ 50,00", carencia: "6 Meses", vantagens: "Clube de Vantagem" },
        { faixa_etaria: "mais de 80 anos", valor: "R$ 80,00", carencia: "12 Meses", vantagens: "Clube de Vantagem" }
      ]
    },
    {
      tipo: "Plano Familiar",
      dados: [
        { faixa_etaria: "0 a 17 anos", valor: "R$ 3,00", carencia: "3 Meses", vantagens: "Opcional" },
        { faixa_etaria: "18 a 49 anos", valor: "R$ 7,00", carencia: "6 Meses", vantagens: "Opcional" },
        { faixa_etaria: "50 a 59 anos", valor: "R$ 9,00", carencia: "6 Meses", vantagens: "Opcional" },
        { faixa_etaria: "60 a 69 anos", valor: "R$ 12,00", carencia: "12 Meses", vantagens: "Opcional" },
        { faixa_etaria: "70 a 79 anos", valor: "R$ 32,00", carencia: "12 Meses", vantagens: "Opcional" }
      ]
    },
    {
      tipo: "Plano Cremação",
      dados: [
        { faixa_etaria: "18 a 59 anos", valor: "R$ 40,00", carencia: "3 Meses", vantagens: "Clube de Vantagem" },
        { faixa_etaria: "60 a 79 anos", valor: "R$ 60,00", carencia: "6 Meses", vantagens: "Clube de Vantagem" },
        { faixa_etaria: "mais de 80 anos", valor: "R$ 100,00", carencia: "12 Meses", vantagens: "Clube de Vantagem" }
      ]
    }
  ],
  adesao: [
    { local: "Dentro do Estado do RJ", valor: "R$ 60,00" },
    { local: "Fora do Estado do RJ", valor: "R$ 100,00" }
  ],
  clubeDeVantagem: [
    { tipo: "Não associados", valor: "R$ 10,00", adesao: "R$ 30,00" },
    { tipo: "Associados Dependentes", valor: "R$ 10,00", adesao: "---" }
  ],
  telemedicina: [
    { tipo: "Não associados", valor: "R$ 14,90", adesao: "R$ 30,00" },
    { tipo: "Associados Titulares", valor: "R$ 10,00", adesao: "---" },
    { tipo: "Associados Dependentes", valor: "R$ 10,00", adesao: "---" }
  ]
}
