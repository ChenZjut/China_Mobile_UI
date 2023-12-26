import { echartGlobalConfig } from '../lib/config';
import { ChartWrapper } from './ChartWrapper';
import { ReactECharts } from './ReactECharts';
const echarts = require("echarts");

export default function Sheet2() {


  const option1 = {
    title: [
      // {
      //   top: '5%',
      //   left: 'center',
      //   text: '杭州室分“常亮行动”专项整治数量',
      //   textStyle: {
      //     fontSize: 15
      //   }
      // },
      {
        subtext: '铁三角',
        left: '24.5%',
        top: '65%',
        textAlign: 'center',
        subtextStyle: {
          fontSize: 15,
          fontWeight: 'bold'
        }
      },
      {
        subtext: '依网',
        left: '49.5%',
        top: '65%',
        textAlign: 'center',
        subtextStyle: {
          fontSize: 15,
          fontWeight: 'bold'
        }
      },
      {
        subtext: '代维',
        left: '74.5%',
        top: '65%',
        textAlign: 'center',
        subtextStyle: {
          fontSize: 15,
          fontWeight: 'bold'
        }
      },
    ],
    series: [
      {
        name: 'Access From',
        title: [{
          text: '111',
          textStyle: {
            fontSize: 15
          }
        }],
        type: 'pie',
        radius: ['0%', '40%'],
        label: {
          show: true,
          position: 'inner',
          formatter: function (params: { value: unknown[]; }) {
            return params.value
          },
          fontSize: 14
        },
        center: ['25%', '50%'],
        data: [
          {
            value: 2,
            name: '未解决',
            itemStyle: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "rgba(156,107,211,0.8)" },
                { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                { offset: 1, color: "rgba(156,107,211,0.2)" }
              ])
            },
          },
          {
            value: 12,
            name: '已解决',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#956FD4" },
                { offset: 1, color: "#3EACE5" }
              ])
            },
          },
        ]
      },
      {
        type: 'pie',
        radius: ['0%', '40%'],
        label: {
          show: true,
          position: 'inner',
          formatter: function (params: { value: unknown[]; }) {
            return params.value
          },
          fontSize: 14
        },

        center: ['50%', '50%'],
        data: [
          {
            value: 2,
            name: '未解决',
            itemStyle: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "rgba(156,107,211,0.8)" },
                { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                { offset: 1, color: "rgba(156,107,211,0.2)" }
              ])
            },
          },
          {
            value: 12,
            name: '已解决',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#956FD4" },
                { offset: 1, color: "#3EACE5" }
              ])
            },
          },
        ]
      },
      {
        type: 'pie',
        radius: ['0%', '40%'],
        label: {
          show: true,
          position: 'inner',
          formatter: function (params: { value: unknown[]; }) {
            return params.value
          },
          fontSize: 14
        },
        center: ['75%', '50%'],
        data: [
          {
            value: 2,
            name: '未解决',
            itemStyle: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "rgba(156,107,211,0.8)" },
                { offset: 0.2, color: "rgba(156,107,211,0.5)" },
                { offset: 1, color: "rgba(156,107,211,0.2)" }
              ])
            },
          },
          {
            value: 12,
            name: '已解决',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#956FD4" },
                { offset: 1, color: "#3EACE5" }
              ])
            },
          },
        ]
      }
    ]
  };


  const data = [59, 33, 37, 47, 63, 150, 22, 25, 164, 112, 97, 42, 56]

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    title: [{
      top: '10%',
      left: 'center',
      text: '杭州室分“常亮行动”专项整治数量',
      textStyle: echartGlobalConfig.titleText
    }],
    legend: {
      textStyle: echartGlobalConfig.legendText
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: ['上城', '拱墅', '西湖', '萧山', '余杭', '临平', '钱塘', '滨江', '富阳', '临安', '桐庐', '建德', '淳安']
    },
    series: [
      {
        name: '已解决',
        type: 'bar',
        itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "#956FD4" },
            { offset: 1, color: "#3EACE5" }
          ])
        },
        emphasis: {
          focus: 'self'
        },
        data: data
      },
      {
        name: '计划解决',
        type: 'bar',
        barGap: "-100%",
        z: -12,
        itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: "rgba(156,107,211,0.8)" },
            { offset: 0.2, color: "rgba(156,107,211,0.5)" },
            { offset: 1, color: "rgba(156,107,211,0.2)" }
          ])
        },
        emphasis: {
          focus: 'self'
        },
        data: data.map(v => v + 40)
      },

    ]
  };

  return (
    <ChartWrapper>
      <div className='h-full flex flex-col'>
        <div className='flex-[2]'>
          <ReactECharts options={option as any} />
        </div>
        <div className='flex-1'>
          <ReactECharts options={option1 as any} />
        </div>
      </div>
    </ChartWrapper>

  );
}
