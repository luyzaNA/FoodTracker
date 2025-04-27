<?php

namespace App\Services;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Food;
use App\Repository\FoodRepository;
use Symfony\Component\Serializer\SerializerInterface;

class FoodService
{

    public function __construct(
        private  EntityManagerInterface $entityManager,
        private FoodRepository $foodRepository,
        private SerializerInterface $serializer
    ) {}

    public function serializeFood(Food $food): string
    {
        return $this->serializer->serialize($food, 'json');
    }

    public function serializeFoods(array $foods): string
    {
        return $this->serializer->serialize($foods, 'json');
    }

    public function addFood(Food $food): Food
    {
        $existingFood = $this->foodRepository->findFood($food->getName());
        if ($existingFood) {
            throw new \Exception('Food with this name already exists');
        }

        return $this->foodRepository->createFood($food);
    }

    public function getAllFoods(): array
    {
        return $this->foodRepository->findAllFoods();
    }
}
?>