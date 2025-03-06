import { IReportSKM } from '@/common/query/query-report-skm'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import { Bar, BarChart, XAxis, YAxis, LabelList } from 'recharts'
import { transformData, transformToChartConfig } from './gkm-utils'

interface IPropsComponent {
    data: IReportSKM[]
}

const ChartGKMTenant: React.FC<IPropsComponent> = ({ data }) => {
    const dataChart = transformData(data)
    const chartConfig = transformToChartConfig(data) satisfies ChartConfig

    console.log(dataChart)

    return (
        <div className="md:h-[280px] md:max-h-[300px]  md:inline-table w-full">
            <ChartContainer config={chartConfig} className="flex-1">
                <BarChart
                    accessibilityLayer
                    data={dataChart}
                    layout="vertical"
                    margin={{ right: 0, left: -54 }}
                    barGap={4}
                    barSize={40}
                >
                    <YAxis
                        dataKey="survey"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.replace(/_/g, ' ')}
                        domain={[0, 100]}
                    />
                    <XAxis dataKey="persentase" type="number" hide />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="persentase" layout="vertical" radius={6}>
                        <LabelList
                            dataKey="survey"
                            position="insideLeft"
                            offset={8}
                            className="fill-[--color-label]"
                            fontSize={12}
                        />
                    </Bar>
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default ChartGKMTenant
