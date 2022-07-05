<?php

namespace Database\Seeders;

use App\Models\AttributeValue;
use App\Models\Office;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OfficeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $offices = Office::factory()
            ->count(60)
            ->has(AttributeValue::factory()
                ->state([
                    'attribute_id' => 1
                ])->setIntValue(), 'attributes')
            ->has(AttributeValue::factory()
                ->state([
                    'attribute_id' => 2
                ]), 'attributes')
            ->has(AttributeValue::factory()
                ->state([
                    'attribute_id' => 3
                ])->setIntValue(), 'attributes')
            ->has(AttributeValue::factory()
                ->state([
                    'attribute_id' => 4,
                ])->setMultiselectValue(), 'attributes')
            ->create();
    }
}
