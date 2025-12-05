import axios from "axios";
import { useEffect, useState } from "react";

export default function Table({
    data = [],
}) {

    const badgeColors = {
        temperature: "!bg-red-100 !text-red-800",
        humidity: "!bg-blue-100 !text-blue-800",
        light: "!bg-yellow-100 !text-yellow-800",
        motion: "!bg-purple-100 !text-purple-800",
    };

    return (
        <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
                <tr className="text-left text-sm font-medium text-gray-600">
                    <th className="px-6 py-3">Tipo</th>
                    <th className="px-6 py-3">Sensor</th>
                    <th className="px-6 py-3">Valor</th>
                    <th className="px-6 py-3">Data</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
                {data.map((item) => (
                    <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ${badgeColors[item.type]}`}>
                                {item.type_display}
                            </span>
                        </td>
                        <td className="px-6 py-4">{item.sensor_id}</td>
                        <td className="px-6 py-4">{item.value}</td>
                        <td className="px-6 py-4">{item.timestamp_display}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
