import image from './assets/avatar.png'
import {
  Bell,
  CaretRight,
  Devices,
  Key,
  PersonArmsSpread,
  Question,
  SignOut,
  UserCircle,
  UserSwitch,
} from '@phosphor-icons/react'

const sections = [
  {
    title: 'CONTA',
    items: [
      {
        icon: <UserCircle />,
        title: 'Dados pessoais',
      },
      {
        icon: <Key />,
        title: 'Informações de login',
      },
    ],
  },
  {
    title: 'PREFERÊNCIAS',
    items: [
      {
        icon: <Bell />,
        title: 'Notificações',
      },
      {
        icon: <PersonArmsSpread />,
        title: 'Acessibilidade',
      },
    ],
  },
  {
    title: 'PRIVACIDADE',
    items: [
      {
        icon: <Devices />,
        title: 'Aparelhos conectados',
      },
      {
        icon: <UserSwitch />,
        title: 'Contas vinculadas',
      },
    ],
  },
]

export function App() {
  return (
    <main className="flex items-center justify-center h-screen px-4">
      <div className="bg-gray-500 w-[375px] rounded-xl">
        <header className="p-6 flex">
          <img src={image} alt="" className="h-12 w-12" />
          <div className="ml-4">
            <strong className="text-lg font-bold leading-6 flex flex-col">
              Marvin McKinney
            </strong>
            <span className="text-sm leading-[18px] text-gray-200">
              marvin.mckinney@example.com
            </span>
          </div>
        </header>

        {sections.map((section) => (
          <section
            key={section.title}
            className="mx-6 pt-4 mb-4 border-t border-gray-400"
          >
            <strong className="text-gray-300 text-xs tracking-wider font-normal mb-3 block">
              {section.title}
            </strong>
            {section.items.map((item) => (
              <a
                key={item.title}
                href="#"
                className="flex gap-2 items-center h-9"
              >
                {item.icon}
                <span className="text-gray-100 text-base leading-5">
                  {item.title}
                </span>
                <CaretRight className="ml-auto text-gray-300 h-[11px] w-[11px]" />
              </a>
            ))}
          </section>
        ))}

        <footer className="mx-6 pt-4 mb-4 border-t border-gray-400">
          <a href="#" className="flex gap-2 items-center h-9">
            <Question className="text-gray-100 h-[20px] w-[20px]" />
            <span className="text-gray-100 text-base leading-5">
              Central de ajuda
            </span>
          </a>
          <a href="#" className="flex gap-2 items-center h-9 text-red-500">
            <SignOut className="h-[20px] w-[20px]" />
            <span className="text-base leading-5">Sair</span>
          </a>
        </footer>
      </div>
    </main>
  )
}
