import LinesChart from '@/components/admin/report/LineChart'
import BarsChart from '@/components/admin/report/BarChart'
import PiesChart from '@/components/admin/report/PieChart'

export default function AdminReportSection() {
    return(
        <>
        <div className="flex flex-col gap-16">
            <PiesChart/>
            <LinesChart/>
            <BarsChart/>
        </div>
        </>
    )
}