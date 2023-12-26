import { echartGlobalConfig } from '../lib/config';
import { ChartWrapper } from './ChartWrapper';
import { ReactECharts } from './ReactECharts';

export default function Sheet1() {
  const option = {
    title: [{
      left: 'center',
      text: '每周抽查不规范工单个数',
      textStyle: echartGlobalConfig.titleText
    }],
    xAxis: {
      type: 'category',
      data: ['11月19日', '11月20日', '11月21日', '11月22日', '11月23日', '11月24日', '11月25日']
    },
    grid: {
      width: '87%',
      left: '5%',
      top: '10%',
      bottom: '5%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        lineSmooth: true,
        symbol: "emptyCircle",
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: "#fff"
          }
        },
        lineStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#1c98e8"
                },
                {
                  offset: 1,
                  color: "#28f8de"
                }
              ]
            },
            width: 3
          }
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(35,184,210,.2)"
              },
              {
                offset: 1,
                color: "rgba(35,184,210,0)"
              }
            ]
          }
        },
        markLine: {
          silent: true,
          data: [
            {
              type: "average",
              name: "平均值"
            }
          ],
          precision: 0,
          label: {
            color: '#fff',
            formatter: "平均值\n {c}",
          },
          lineStyle: {
            color: "#28f8de"
          }
        },

      }
    ]
  }
  return (
    <ChartWrapper>
      <ReactECharts options={option as any} />
    </ChartWrapper>

  );
}
