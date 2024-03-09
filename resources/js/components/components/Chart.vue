<template>
        <div class="w-100">
            <vue3-chart-js style="max-height: 200px" v-bind="{ ...lineChart }"/>
        </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import zoomPlugin from "chartjs-plugin-zoom";
import dataLabels from "chartjs-plugin-datalabels";

// globally registered and available for all charts
Vue3ChartJs.registerGlobalPlugins([zoomPlugin]);

export default {
    name: "Chart",
    components: {
        Vue3ChartJs,
    },
    props:[ 'labels','dataLabel', 'data', 'color'],
    setup(props) {
        const lineChart = {
            type: "line",
            // locally registered and available for this chart
            plugins: [dataLabels],
            data: {
                labels: props.labels,
                datasets: [
                    {
                        label: props.dataLabel,
                        data: props.data,
                        fill: false,
                        borderColor: props.color,
                        borderWidth: 4,
                        tension: 0.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.49)',
                        pointRadius: 0.05,
                        pointHoverRadius: 5,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            display: false
                        },
                        grid: {
                            borderWidth: 0,
                            display: false,
                        },
                    },
                    y: {

                        ticks: {
                            display: false
                        },
                        grid: {
                            borderWidth: 0,
                            display: false,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    zoom: {
                        // zoom: {
                        //   wheel: {
                        //     enabled: true,
                        //   },
                        //   pinch: {
                        //     enabled: true,
                        //   },
                        //   mode: "y",
                        // },
                    },
                    datalabels: {
                        // backgroundColor: function (context) {
                        //   return context.dataset.backgroundColor;
                        // },
                        borderRadius: 4,
                        color: "transparent",
                        font: {
                            weight: "bold",
                        },
                        formatter: Math.round,
                        padding: 6,
                    },
                },
            },
        };

        return {
            lineChart,
        };
    },
};
</script>

