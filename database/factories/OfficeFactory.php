<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Office>
 */
class OfficeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
         $name = fake()->company();
        return [
            'slug' => Str::slug($name, '-'),
            'name' => $name,
            'price' => fake()->randomNumber(2, true),
            'desc' => fake()->text,
        ];
    }
}
