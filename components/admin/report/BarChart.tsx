import { Bar } from 'react-chartjs-2'
import type { EventData } from '@/models/ReportEventData'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const misoptions = {
  responsive: true,
  animation: {
    duration: 0
  },
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      min: 0
    },
    x: {
      ticks: { color: 'rgba(0, 220, 195)' }
    }
  }
} as const

export default function BarsChart (info: EventData): JSX.Element {
  const days = info.dateList.map((d: [number, number, number]) => new Date(d[0], d[1] - 1, d[2]).toLocaleDateString('es-Ar'))
  const quantity = info.quantityList

  const midata = {
    labels: days,
    datasets: [
      {
        label: 'Venta de entradas',
        data: quantity,
        backgroundColor: 'rgba(0, 220, 195, 0.5)'
      }
    ]
  }

  return <Bar data={midata} options={misoptions} />
}
