export function Efficiency() {
  const stats = [
    {
      value: "1 000 000+",
      label: "биг-бэгов в год",
    },
    {
      value: "24/7",
      label: "режим работы производства",
    },
    {
      value: "200+",
      label: "квалифицированных сотрудников",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container">
        <EfficiencyHeader />
        <EfficiencyStats stats={stats} />
      </div>
    </section>
  )
}

function EfficiencyHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Наша <span className="text-red-500">производительность</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Современное оборудование и опытный персон��л позволяют нам достигать высоких показателей производства
      </p>
    </div>
  )
}

interface Stat {
  value: string
  label: string
}

function EfficiencyStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  )
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.value}</div>
      <p className="text-gray-300">{stat.label}</p>
    </div>
  )
}
