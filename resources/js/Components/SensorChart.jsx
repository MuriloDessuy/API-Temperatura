import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function SensorChart({
    data = [],
    title = "Sensor Data",
    color = "#FF0000",
}) {

    const series = [
        {
            name: "Valor",
            data: data.map((item) => item.value),
        },
    ];

    const options = {
        chart: {
            id: "sensor-chart",
            toolbar: { show: true },
        },
        xaxis: {
            categories: data.map((item) => item.timestamp_display),
            title: { text: "Timestamp" }
        },
        yaxis: {
            title: { text: "Value" }
        },
        stroke: {
            curve: "smooth"
        },
        markers: {
            size: 4,
        },
        tooltip: {
            theme: "dark",
        },
        colors: [color],
    };

    return (
        <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
}
