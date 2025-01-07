import { IReportSKM } from '@/common/query/query-report-skm'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

type OutputDataChart = {
    survey: string
    persentase: number
    fill: string
}

type ChartConfigOutput = {
    [key: string]: {
        label: string
        color?: string
    }
}

interface IPropsComponent {
    data: IReportSKM[]
}

function transformData(input: IReportSKM[]): OutputDataChart[] {
    return input.map((item) => {
        const survey = item.category.replace(/\s+/g, '_')
        const persentase = Math.round((item.average_answer * 100) / 3) // Mengonversi rata-rata menjadi persentase (skala 0-100)
        const fill = `var(--color-${survey})`

        return { survey, persentase, fill }
    })
}
function transformToChartConfig(input: IReportSKM[]): ChartConfigOutput {
    // Warna berdasarkan aturan (hijau atau kuning bergantian)
    const colors = ['hsl(var(--chart-green))', 'hsl(var(--chart-yellow))']

    // Objek awal untuk persentase
    const result: ChartConfigOutput = {
        persentase: {
            label: 'Persentase',
        },
    }

    input.forEach((item, index) => {
        const key = item.category.replace(/\s+/g, '_')
        result[key] = {
            label: item.category,
            color: colors[index % colors.length], // Warna bergantian hijau/kuning
        }
    })

    return result
}

const ChartGKM: React.FC<IPropsComponent> = ({ data }) => {
    const dataChart = transformData(data)

    const chartConfig = transformToChartConfig(data) satisfies ChartConfig

    return (
        <div className="h-[280px] w-full">
            <ChartContainer className="h-full w-full" config={chartConfig}>
                <BarChart
                    accessibilityLayer
                    data={dataChart}
                    layout="vertical"
                    margin={{
                        left: 110,
                    }}
                >
                    <YAxis
                        dataKey="survey"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        fontSize={14}
                        axisLine={false}
                        style={{
                            textTransform: 'capitalize',
                        }}
                        tickFormatter={(value) =>
                            chartConfig[
                                value as keyof typeof chartConfig
                            ]?.label.toLowerCase()
                        }
                        tick={{
                            width: 240, // Atur lebar label sesuai kebutuhan
                            overflow: 'hidden', // Hindari line break
                        }}
                        domain={[0, 100]}
                    />
                    <XAxis dataKey="persentase" type="number" hide />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="persentase" layout="vertical" radius={5} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default ChartGKM
