<?php

namespace App\Http\Controllers;

use App\Http\Resources\SensorReadingResource;
use App\Models\SensorReading;
use Illuminate\Http\Request;

class SensorReadingController extends Controller
{
    public function index()
    {
        $readings = SensorReading::orderBy('type', 'asc')->orderBy('timestamp', 'desc')->get();

        $temperatureReadings = SensorReading::orderBy('type', 'asc')->orderBy('timestamp', 'desc')->where('type', 'temperature')->clone()->get();
        $humidityReadings = SensorReading::orderBy('type', 'asc')->orderBy('timestamp', 'desc')->where('type', 'humidity')->clone()->get();
        $lightReadings = SensorReading::orderBy('type', 'asc')->orderBy('timestamp', 'desc')->where('type', 'light')->clone()->get();
        $motionReadings = SensorReading::orderBy('type', 'asc')->orderBy('timestamp', 'desc')->where('type', 'motion')->clone()->get();

        return [
            'temperatureReadings' => SensorReadingResource::collection($temperatureReadings),
            'humidityReadings' => SensorReadingResource::collection($humidityReadings),
            'lightReadings' => SensorReadingResource::collection($lightReadings),
            'motionReadings' => SensorReadingResource::collection($motionReadings),

            'data' => SensorReadingResource::collection($readings),
        ];
    }

    public function show($id)
    {
        return new SensorReadingResource(SensorReading::find($id));
    }

    public function store(Request $request)
    {
        $data = request()->all();

        $data['sensor_id'] = $request->sensorId;

        $sensorReading = SensorReading::create($data);

        return new SensorReadingResource($sensorReading);
    }
}
