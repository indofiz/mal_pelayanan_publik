import { IReportSKM } from '@/common/query/query-report-skm'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'
import { transformData, transformToChartConfig } from './gkm-utils'

interface IPropsComponent {
    data: IReportSKM[]
}

const ChartGKM: React.FC<IPropsComponent> = ({ data }) => {
    console.log(data)
    const dataChart = transformData(data)

    const chartConfig = transformToChartConfig(data) satisfies ChartConfig

    console.log(dataChart)
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
