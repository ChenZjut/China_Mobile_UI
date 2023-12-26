import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from "echarts";

type BaseChartProps = {
    options: EChartsOption
};

export const ReactECharts: React.FC<BaseChartProps> = ({ options }) => {

    const chartRef = useRef<HTMLInputElement>(null);
    const [chart, setChart] = useState<echarts.ECharts>();

    const initChart = () => {
        if (chart) {
            window.removeEventListener("resize",  () => chart.resize());
            chart?.dispose();
        }

        const newChart = echarts?.init(chartRef?.current as HTMLElement);
        newChart.setOption(options as any, true);
        window.addEventListener("resize", () => newChart.resize());
        setChart(newChart);
    };

    useEffect(() => {
        initChart();
    }, [options])

    return <div ref={chartRef} style={{ height: "100%", width: "100%" }} />
};
