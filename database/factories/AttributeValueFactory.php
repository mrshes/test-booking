<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AttributeValue>
 */
class AttributeValueFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'value' => fake()->city()
        ];
    }

    /**
     * @return AttributeValueFactory
     */
    public function setMultiselectValue(): AttributeValueFactory
    {
        return $this->state(function (array $attributes) {
            return [
                'value' => fake()->randomElement(['wifi', 'кофемашина', 'tv'])
            ];
        });
    }

    /**
     * @return AttributeValueFactory
     */
    public function setIntValue(): AttributeValueFactory
    {
        return $this->state(function (array $attributes) {
            return [
                'value' => fake()->randomDigitNotZero()
            ];
        });
    }
}
