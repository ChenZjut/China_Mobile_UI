import { echartGlobalConfig } from '../lib/config';
import { ChartWrapper } from './ChartWrapper';
import { ReactECharts } from './ReactECharts';

export default function Sheet5() {

    const option = {
        title: {
            top: '5%',
            left: 'center',
            text: '杭州室分“常亮行动”专项整治数量',
            textStyle: echartGlobalConfig.titleText
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: [
            {
                name: '时间',
                nameLocation: 'center',
                nameTextStyle: {
                    lineHeight: 80
                },
                type: 'category',
                axisLabel: {
                    rotate: 30
                },
                data: ['2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01', '2023.10.01',],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                nameLocation: 'center',
                nameTextStyle: {
                    lineHeight: 70
                },
                min: 0,
                max: 100,
                interval: 10,
                axisLabel: {
                    formatter: '{value} %'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '累计T2处理历时 < 6的工单比例',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value: number) {
                        return value + ' %';
                    }
                },
                z: 10,
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#43dfa2"
                            },
                            {
                                offset: 1,
                                color: "#f8f8dea0"
                            }
                        ]
                    }
                },
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 6.4, 3.3, 3.3
                ]
            },
            {
                name: '基准值',
                type: 'line',
                tooltip: {
                    valueFormatter: function (value: number) {
                        return value + ' %';
                    }
                },
                symbolSize: 0,
                lineStyle: {
                    color: '#5470C6',
                    width: 2,
                    type: 'dashed'
                },
                endLabel: {
                    show: true,
                    color: '#fff',
                    formatter: function (params: { value: string[]; }) {
                        return "基准值";
                    }
                },
                data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70]
            },
            {
                name: '挑战值',
                type: 'line',
                tooltip: {
                    valueFormatter: function (value: number) {
                        return value + ' %';
                    }
                },
                endLabel: {
                    show: true,
                    color: '#fff',
                    formatter: function (params: { value: string[]; }) {
                        return "挑战值";
                    }
                },

                symbolSize: 0,
                lineStyle: {
                    color: '#5470C6',
                    width: 2,
                    type: 'dashed'
                },
                data: [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
            }
        ]
    };



    return (

        <ChartWrapper>
            <ReactECharts options={option as any} />
        </ChartWrapper>

    );
}
