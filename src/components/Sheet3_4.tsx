import { echartGlobalConfig } from '../lib/config';
import { ChartWrapper } from './ChartWrapper';
import { ReactECharts } from './ReactECharts';
const echarts = require("echarts");
export default function Sheet3_4() {


  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    title: [
      {
        top: '5%',
        left: 'center',
        text: '45G遗留故障',
        textStyle: echartGlobalConfig.titleText
      },
      {
        top: '50%',
        left: 'center',
        text: '高频故障',
        textStyle: echartGlobalConfig.titleText
      },
      {
        top: '87%',
        left: '81%',
        text: '总计',
        textStyle: echartGlobalConfig.titleText
      },
      {
        top: '42%',
        left: '81%',
        text: '总计',
        textStyle: echartGlobalConfig.titleText
      }
    ],
    legend: {
      // itemWidth: 45,
      // itemHeight: 25,
      textStyle: echartGlobalConfig.legendText
    },
    grid: [
      {
        width: '70%',
        left: '1%',
        top: '15%',
        bottom: '45%',
        containLabel: true
      },
      {
        width: '65%',
        left: '1%',
        top: '60%',
        bottom: '0%',
        containLabel: true
      }
    ],
    xAxis: [
      {
        type: 'value',
        show: false,
      },
      {
        type: 'value',
        show: false,
        gridIndex: 1,

      }
    ],
    yAxis:
      [
        {
          type: 'category',
          data: ['老上城', '钱江新城', '三九堡', '东站丁桥'],
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        },
        {
          gridIndex: 1,
          type: 'category',
          data: ['老上城', '钱江新城', '三九堡', '东站丁桥'],
          axisLabel: {
            interval: 0,
            rotate: 30
          },
          splitLine: {
            show: false
          }
        }
      ],
    series: [
      {
        name: '已完成',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          color: echartGlobalConfig.barLabel.color,
          fontSize: echartGlobalConfig.barLabel.fontSize
        },
        itemStyle: {
          barBorderRadius: 10,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "#956FD4" },
            { offset: 1, color: "#3EACE5" }
          ])
        },
        emphasis: {
          focus: 'self'
        },
        data: [2, 4, 3, 4]
      },
      {
        name: '计划完成',
        type: 'bar',
        barGap: "-100%",
        z: -12,
        itemStyle: {
          barBorderRadius: 10,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "rgba(156,107,211,0.8)" },
            { offset: 0.2, color: "rgba(156,107,211,0.5)" },
            { offset: 1, color: "rgba(156,107,211,0.2)" }
          ])
        },
        label: {
          show: true,
          position: 'right',
          color: echartGlobalConfig.barLabel.color,
          fontSize: echartGlobalConfig.barLabel.fontSize
        },
        emphasis: {
          focus: 'self'
        },
        data: [16, 14, 13, 15]
      },
      {
        name: '已完成',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          barBorderRadius: 10,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "#956FD4" },
            { offset: 1, color: "#3EACE5" }
          ])
        },
        label: {
          show: true,
          color: echartGlobalConfig.barLabel.color,
          fontSize: echartGlobalConfig.barLabel.fontSize
        },
        emphasis: {
          focus: 'self'
        },
        data: [2, 4, 23, 4]
      },
      {
        name: '计划完成',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        barGap: "-100%",
        z: -12,
        itemStyle: {
          barBorderRadius: 10,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "rgba(156,107,211,0.8)" },
            { offset: 0.2, color: "rgba(156,107,211,0.5)" },
            { offset: 1, color: "rgba(156,107,211,0.2)" }
          ])
        },
        label: {
          show: true,
          position: 'right',
          color: echartGlobalConfig.barLabel.color,
          fontSize: echartGlobalConfig.barLabel.fontSize
        },
        emphasis: {
          focus: 'self'
        },
        data: [16, 14, 33, 15]
      },
      {
        type: 'pie',
        radius: ['0%', '20%'],
        label: {
          show: true,
          position: 'inner',
          formatter: function (params: { value: unknown[]; }) {
            return params.value
          },
          fontSize: 14
        },
        center: ['85%', '32%'],
        data: [
          {
            value: 18,
            name: '计划完成',
            itemStyle: {
              barBorderRadius: 10,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "rgba(156,107,211,0.8)" },
                { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                { offset: 1, color: "rgba(156,107,211,0.2)" }
              ])
            },
          },
          {
            value: 2,
            name: '已完成',
            itemStyle: {
              barBorderRadius: 10,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#956FD4" },
                { offset: 1, color: "#3EACE5" }
              ])
            },
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      {
        type: 'pie',
        radius: ['0%', '20%'],
        label: {
          show: true,
          position: 'inner',
          formatter: function (params: { value: unknown[]; }) {
            return params.value
          },
          fontSize: 14
        },
        center: ['85%', '77%'],
        data: [
          {
            value: 18,
            name: '计划完成',
            itemStyle: {
              barBorderRadius: 10,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "rgba(156,107,211,0.8)" },
                { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                { offset: 1, color: "rgba(156,107,211,0.2)" }
              ])
            },
          },
          {
            value: 2,
            name: '已完成',
            itemStyle: {
              barBorderRadius: 10,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#956FD4" },
                { offset: 1, color: "#3EACE5" }
              ])
            },
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <ChartWrapper>
      <ReactECharts options={option as any} />
    </ChartWrapper>

  );
}
