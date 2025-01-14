import { IResponseKunjungan } from '@/common/query/query-kunjungan'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'
import { transformDataSeriesKunjungan } from './gkm-utils'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const chartConfig = {
    kunjungan: {
        label: 'Kunjungan',
        color: 'hsl(var(--chart-green))',
    },
} satisfies ChartConfig

const ChartKunjungan = ({
    data,
    isLoading,
}: {
    data: IResponseKunjungan
    isLoading: boolean
}) => {
    const convertedData = transformDataSeriesKunjungan(data.data)

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <ScrollArea className="h-[250px] md:h-[450px] w-full">
            <ChartContainer
                config={chartConfig}
                className="h-[200px] md:h-[400px] min-w-[1200px] w-full"
            >
                <BarChart
                    accessibilityLayer
                    data={convertedData}
                    margin={{
                        top: 20,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="label"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 8)}
                    />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar
                        dataKey="kunjungan"
                        fill="var(--color-kunjungan)"
                        radius={4}
                    >
                        <LabelList
                            position="top"
                            offset={12}
                            className="fill-foreground"
                            fontSize={12}
                        />
                    </Bar>
                </BarChart>
            </ChartContainer>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default ChartKunjungan
