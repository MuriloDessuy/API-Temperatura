<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SensorReading extends Model
{
    public $timestamps = false;

    protected $table = 'sensor_readings';

    protected $fillable = [
        'sensor_id',
        'value',
        'type',
        'timestamp',
    ];

    protected $casts = [
        'value' => 'float',
        'timestamp' => 'datetime',
    ];
}
