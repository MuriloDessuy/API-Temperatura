<?php

use App\Http\Controllers\SensorReadingController;
use Illuminate\Support\Facades\Route;

Route::prefix('sensor')->group(function () {

    Route::resource('data', SensorReadingController::class);

});
