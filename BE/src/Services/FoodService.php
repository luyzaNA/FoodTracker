<?php

namespace App\Services;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Food;
use App\Repository\FoodRepository;

class FoodService
{

    public function __construct(
        private  EntityManagerInterface $entityManager,
        private FoodRepository $foodRepository
    ) {}

    public function addFood(Food $food): Food
    {
        $existingFood = $this->foodRepository->findFood($food->getName());
        if ($existingFood) {
            throw new \Exception('Food with this name already exists');
        }

        return $this->foodRepository->createFood($food);
    }

}
?>