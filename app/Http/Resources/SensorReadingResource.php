<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SensorReadingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'type_display' => ucfirst($this->type),
            'type' => $this->type,
            'sensor_id' => $this->sensor_id,
            'value' => number_format($this->value, 2, ',', '.'),
            'timestamp' => $this->timestamp,
            'timestamp_display' => $this->timestamp->isoFormat('hh:mm:ss'),
        ];
    }
}
