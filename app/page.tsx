"use client";

import { useEffect, useState } from "react";

import {
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  FileText,
  Heart,
  LockKeyhole,
  MessageCircle,
  Plane,
  Search,
  ShieldCheck,
  ShoppingCart,
  ClipboardPenLine,
} from "lucide-react";
const servicos = [
  {
    icon: FileCheck2,
    titulo: "Certidões e Registros On-line",
    texto:
      "Ajudamos na solicitação de certidões e em serviços disponíveis nos canais oficiais de cartórios e registros.",
    preco: "Consulte o valor do serviço",
  },
  {
    icon: FileText,
    titulo: "Documentos e Arquivos",
    texto:
      "Juntamos, separamos, convertemos, reduzimos e organizamos PDFs, documentos e arquivos.",
    preco: "A partir de R$ 5,00",
  },
  {
    icon: ClipboardPenLine,
    titulo: "Formulários e Cadastros",
    texto:
      "Ajudamos no preenchimento e na organização das informações quando o serviço não exige senha, assinatura ou acesso pessoal protegido.",
    preco: "A partir de R$ 10,00",
  },
  {
    icon: FileCheck2,
    titulo: "Emissões e Consultas On-line",
    texto:
      "Ajudamos com emissões e consultas disponíveis em canais oficiais, quando não exigem senha ou acesso pessoal protegido.",
    preco: "A partir de R$ 5,00",
  },
  {
    icon: Search,
    titulo: "Pesquisas e Informações",
    texto:
      "Pesquisamos procedimentos, documentos necessários, canais oficiais, endereços, contatos e outras informações.",
    preco: "A partir de R$ 5,00",
  },
  {
    icon: CalendarDays,
    titulo: "Agendamentos",
    texto:
      "Ajudamos com agendamentos on-line quando o serviço não exige senha, autenticação ou manifestação pessoal.",
    preco: "A partir de R$ 10,00",
  },
];
const etapas = [
  {
    numero: "1",
    titulo: "Conte o que precisa",
    texto: "Mande uma mensagem pelo WhatsApp e explique o que você precisa.",
  },
  {
    numero: "2",
    titulo: "Analisamos seu pedido",
    texto: "Verificamos se podemos realizar o serviço e quais informações serão necessárias.",
  },
  {
    numero: "3",
    titulo: "Você recebe o valor e o prazo",
    texto: "Antes de começar, informamos o preço, o prazo e o que está incluído.",
  },
  {
    numero: "4",
    titulo: "Você aprova e realiza o pagamento",
    texto: "O serviço começa após a confirmação do pagamento e o recebimento das informações necessárias.",
  },
  {
    numero: "5",
    titulo: "Nós facilitamos",
    texto: "Realizamos o serviço conforme o combinado e dentro do prazo informado.",
  },
  {
    numero: "6",
    titulo: "Você recebe a entrega",
    texto: "Nos documentos personalizados, primeiro enviamos uma prova para conferência. Após a conferência e eventuais pequenos ajustes incluídos, enviamos o PDF final.",
  },
];

function Logo({ compacto = false }: { compacto?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`relative flex items-center justify-center rounded-2xl bg-[#E8F7ED] ${
          compacto ? "h-11 w-11" : "h-14 w-14"
        }`}
      >
        <FileText
          className={compacto ? "h-6 w-6" : "h-8 w-8"}
          strokeWidth={2.3}
        />
        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#4CAF69] text-white ring-2 ring-white">
          <Check className="h-3 w-3" strokeWidth={4} />
        </span>
      </div>

      <div className="leading-[0.95]">
        <div
          className={`font-extrabold text-[#0B4A6F] ${
            compacto ? "text-lg" : "text-2xl"
          }`}
        >
          Facilita
        </div>
        <div
          className={`font-extrabold text-[#4CAF69] ${
            compacto ? "text-lg" : "text-2xl"
          }`}
        >
          Pra Mim
        </div>
      </div>
    </div>
  );
}

export default function Home() {
   const [secaoAtiva, setSecaoAtiva] = useState("");

 useEffect(() => {
  const secoes = ["servicos", "como-funciona", "sobre", "seguranca"];

  const atualizarSecao = () => {
    const pontoDaTela = 140;

    let secaoEncontrada = "";

    for (const id of secoes) {
      const elemento = document.getElementById(id);

      if (!elemento) continue;

      const posicao = elemento.getBoundingClientRect();

      if (posicao.top <= pontoDaTela && posicao.bottom > pontoDaTela) {
        secaoEncontrada = id;
        break;
      }
    }

    setSecaoAtiva(secaoEncontrada);
  };

  atualizarSecao();
  window.addEventListener("scroll", atualizarSecao, { passive: true });

  return () => window.removeEventListener("scroll", atualizarSecao);
}, []);
  return (
    <main className="min-h-screen bg-white text-[#0B4A6F]">
      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
          <a href="#inicio" aria-label="Facilita Pra Mim">
            <Logo compacto />
          </a>

          
          <nav className="hidden items-center gap-2 text-sm font-bold lg:flex">
  {[
    ["servicos", "Serviços"],
    ["como-funciona", "Como funciona"],
    ["sobre", "Sobre nós"],
    ["seguranca", "Segurança"],
  ].map(([id, nome]) => (
    <a
      key={id}
      href={`#${id}`}
      className={`rounded-full px-4 py-2 transition ${
        secaoAtiva === id
          ? "bg-[#E8F7ED] text-[#287C45]"
          : "text-[#0B4A6F] hover:bg-slate-50 hover:text-[#4CAF69]"
      }`}
    >
      {nome}
    </a>
  ))}
</nav>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-[#4CAF69] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:inline">Fale pelo WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* ABERTURA */}
      <section
        id="inicio"
        className="overflow-hidden bg-gradient-to-br from-[#F5FBFF] via-white to-[#F1FBF4]"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8F7ED] px-4 py-2 text-sm font-bold text-[#287C45]">
              <Heart className="h-4 w-4" />
              Atendimento humano, simples e acessível
            </div>

            <h1 className="mt-6 max-w-2xl text-5xl font-extrabold leading-[1.04] tracking-tight md:text-6xl">
              Você precisa.
              <span className="block text-[#4CAF69]">Nós facilitamos.</span>
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-8 text-slate-600">
              Tem coisa que é simples para quem sabe. E complicada para quem
              precisa.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
  Documentos, certidões, registros on-line, formulários, pesquisas,
  consultas e outras tarefas pela internet, com atendimento humano,
  simples e acessível.
</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-[#4CAF69] px-7 py-4 text-lg font-extrabold text-white shadow-lg shadow-green-100 transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Fale pelo WhatsApp
              </a>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF4D7] px-6 py-4 font-extrabold">
                <CircleDollarSign className="h-5 w-5" />
                Pequenas facilidades a partir de R$ 5
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#A7D8F0]/25 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#4CAF69]/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white bg-white p-8 shadow-xl shadow-slate-200/60">
              <Logo />

              <p className="mt-3 text-slate-500">
                Mais praticidade para o seu dia a dia.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Precisa emitir um documento?",
                  "Não sabe onde fazer um agendamento?",
                  "Quer ajuda com um formulário?",
                  "Precisa pesquisar alguma informação?",
                ].map((texto) => (
                  <div
                    key={texto}
                    className="flex items-center gap-3 rounded-2xl bg-[#F6FAFC] p-4 font-semibold text-slate-700"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4CAF69] text-white">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </span>
                    {texto}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-center text-lg font-extrabold">
                Conte pra gente. Nós vemos como facilitar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-[#4CAF69]">
            O que fazemos
          </p>
          <h2 className="mt-3 text-4xl font-extrabold">
            O que podemos facilitar para você?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Pequenas tarefas do dia a dia que ficaram complicadas na internet.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico) => {
            const Icone = servico.icon;

            return (
              <div
                key={servico.titulo}
                className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF8FD] transition group-hover:bg-[#E8F7ED]">
                  <Icone className="h-7 w-7" strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold">
                  {servico.titulo}
                </h3>

                <p className="mt-3 min-h-20 leading-7 text-slate-600">
                  {servico.texto}
                </p>

                <p className="mt-5 inline-flex rounded-full bg-[#F2FAF4] px-4 py-2 text-sm font-extrabold text-[#287C45]">
                  {servico.preco}
                </p>
              </div>
            );
          })}
        </div>

        {/* DOCUMENTOS PERSONALIZADOS */}
        <div className="mt-8 grid gap-6 rounded-[2rem] bg-[#F6FAFC] p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
            <FileText className="h-8 w-8" />
          </div>

          <div>
  <p className="text-2xl font-extrabold">
    Documentos Administrativos Personalizados
  </p>

  <p className="mt-2 max-w-3xl leading-7 text-slate-600">
    Requerimentos administrativos, notificações, ofícios, cartas formais,
    solicitações, declarações e outros documentos administrativos preparados
    de forma clara, organizada e personalizada.
  </p>

  <div className="mt-5 rounded-2xl border border-[#A7D8F0] bg-[#F6FAFC] p-5">
    <p className="font-extrabold text-[#0B4A6F]">
      🔒 Segurança também faz parte do nosso serviço
    </p>

    <p className="mt-2 leading-7 text-slate-600">
  Para proteger nossos clientes e terceiros contra fraudes e uso indevido,
  os documentos personalizados que contenham assinatura são emitidos com
  aviso de segurança no próprio documento. Por segurança, documentos personalizados que contenham assinatura não
deverão ser utilizados ou aceitos sem o reconhecimento da firma do signatário.
</p>
  </div>

  </div>

<div className="font-extrabold text-[#287C45]">
  A partir de R$ 30,00
</div>
</div>

        <div className="mt-6 rounded-3xl bg-[#FFF7E3] p-8 text-center">
          <h3 className="text-2xl font-extrabold">
            Não encontrou o que precisa?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-slate-600">
            Conte pra gente. Verificamos se podemos fazer, informamos o preço e
            o prazo e só começamos depois da sua aprovação.
          </p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-[#F6FAFC] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.18em] text-[#4CAF69]">
              Sem complicação
            </p>
            <h2 className="mt-3 text-4xl font-extrabold">Como funciona?</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {etapas.map((etapa) => (
              <div
                key={etapa.numero}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B4A6F] text-xl font-extrabold text-white">
                  {etapa.numero}
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{etapa.titulo}</h3>
                <p className="mt-3 leading-7 text-slate-600">{etapa.texto}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-slate-500">
            O prazo começa após o recebimento das informações necessárias e a
confirmação do pagamento.
          </p>
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#EAF7FD] to-[#EAF8EE] p-10 md:p-14">
            <Heart className="h-12 w-12 text-[#4CAF69]" strokeWidth={1.8} />

            <p className="mt-8 text-lg font-bold text-[#287C45]">
              Mais tempo para o que importa.
            </p>

            <p className="mt-4 text-4xl font-extrabold leading-tight">
              Facilitar também é cuidar.
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              Atendimento humano, linguagem simples e respeito em todas as
              etapas.
            </p>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.18em] text-[#4CAF69]">
              Sobre nós
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              A tecnologia deveria facilitar a vida.
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Mas nem sempre é assim. Hoje, muitas tarefas do dia a dia
                dependem da internet e uma coisa aparentemente simples pode se
                tornar complicada e cansativa.
              </p>

              <p>
                Foi pensando nisso que nasceu o{" "}
                <strong className="text-[#0B4A6F]">Facilita Pra Mim</strong>.
              </p>

             <p>
  Unimos mais de 20 anos de experiência em rotinas administrativas
  e documentais à praticidade das ferramentas digitais para
  oferecer uma ajuda simples, acessível, segura e de confiança.
</p>

              <p className="font-bold text-[#0B4A6F]">
                Você não precisa saber qual site acessar ou qual serviço pedir.
                Conte o que precisa. Nós verificamos como podemos facilitar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section id="seguranca" className="bg-[#0B4A6F] py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
          <div>
            <ShieldCheck className="h-16 w-16 text-[#7DDB95]" strokeWidth={1.7} />

            <h2 className="mt-7 text-4xl font-extrabold">
              Aqui sua senha continua sendo sua.
            </h2>

            <p className="mt-5 text-xl leading-8 text-blue-100">
              Segurança também é facilidade.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 font-semibold">
              <LockKeyhole className="h-5 w-5" />
              Seus acessos pessoais permanecem com você.
            </div>
          </div>

          <div className="space-y-4">
            {[
  "Nunca pedimos senhas, códigos de confirmação ou acesso à sua conta bancária.",
  "Nunca acessamos sua conta GOV.BR ou utilizamos sua assinatura por você.",
  "Solicitamos apenas os dados e documentos necessários para realizar o serviço.",
  "Documentos personalizados possuem medidas de segurança contra uso indevido.",
  "Custas e taxas de cartórios ou órgãos são pagas diretamente ao prestador oficial.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl bg-white/10 p-4 text-lg"
              >
                <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#7DDB95]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPROMISSO */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Atendimento humano", "Você fala com uma pessoa de verdade."],
            ["Preço informado antes", "Você decide antes de começarmos."],
            ["Prazo combinado", "Cada serviço tem seu prazo informado."],
          ].map(([titulo, texto]) => (
            <div
              key={titulo}
              className="rounded-3xl border border-slate-100 p-7 text-center"
            >
              <Check className="mx-auto h-7 w-7 text-[#4CAF69]" strokeWidth={3} />
              <p className="mt-4 text-lg font-extrabold">{titulo}</p>
              <p className="mt-2 text-slate-600">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-6 pb-20 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#EAF8EE] px-8 py-14 text-center md:px-14">
          <MessageCircle className="mx-auto h-12 w-12 text-[#4CAF69]" />

          <p className="mt-5 text-lg font-bold text-[#287C45]">
            Pequenas tarefas. Grandes facilidades.
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl">
            O que podemos facilitar para você hoje?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Mande sua mensagem. Antes de qualquer serviço, informamos o preço e
            o prazo.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#4CAF69] px-8 py-4 text-lg font-extrabold text-white shadow-lg shadow-green-200 transition hover:scale-[1.02]"
          >
            Fale pelo WhatsApp
            <ChevronRight className="h-5 w-5" />
          </a>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Você pode mandar sua solicitação quando precisar. Responderemos
            assim que possível.
          </p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-8">
          <Logo compacto />

          <div className="text-sm leading-6 text-slate-500 md:text-right">
            <p className="font-semibold text-[#0B4A6F]">
              Você precisa. Nós facilitamos.
            </p>
            <p>Atendimento administrativo e digital.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}