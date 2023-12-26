import { echartGlobalConfig } from '../lib/config';
import { ChartWrapper } from './ChartWrapper';
import { ReactECharts } from './ReactECharts';

export default function Sheet5() {

    const option = {
        title: {
            text: '物理基站退服超时统计',
            textStyle: echartGlobalConfig.titleText,
            subtext: '上城',
            subtextStyle: echartGlobalConfig.titleText,
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: 10,
            left: 'center',
            textStyle: echartGlobalConfig.legendText,
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '80%',
                label: {
                    show: true,
                    position: 'inner',
                    formatter: function (params: { value: unknown[]; }) {
                        return params.value
                    },
                    fontSize: 24
                },
                data: [
                    { value: 11, name: '24-48小时' },
                    { value: 11, name: '48-72小时' },
                    { value: 2, name: '3-15天' },
                    { value: 4, name: '15天以上' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },

        ]
    };

    return (

        <ChartWrapper>
            <ReactECharts options={option as any} />
        </ChartWrapper>

    );
}
