<?php
use Illuminate\Support\Facades\Route;

Route::get('/office', [\App\Http\Controllers\OfficeController::class, 'index'])->name('office');
Route::get('/', [\App\Http\Controllers\IndexController::class, 'index'])->name('index')->whereIn('locale', ['en', 'ru']);
Route::get('/office/{office:slug}', [\App\Http\Controllers\OfficeController::class, 'show'])->name('office.show');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [\App\Http\Controllers\ProfileController::class, 'getProfile'])->name('profile');
});
