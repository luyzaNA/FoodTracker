<?php

namespace App\Controller;

use App\Services\FoodService;
use App\Entity\Food;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\SecurityBundle\Security;

class FoodController extends AbstractController
{

    public function __construct(private FoodService $foodService,
                                private Security $security
    ){}

    #[Route('/foods', name: 'get_all_foods', methods: ['GET'])]
    public function getAllFoods(): JsonResponse
    {
        $foods = $this->foodService->getAllFoods();

        $foodsJson = $this->foodService->serializeFoods($foods);

        return new JsonResponse($foodsJson, 200, [], true);
    }

    #[Route('/food', name: 'add_food', methods: ['POST'])]
    public function addFood(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $food = (new Food())
            ->setName($data['name'])
            ->setCalories($data['calories'])
            ->setProteins($data['proteins'])
            ->setCarbohydrates($data['carbohydrates'])
            ->setFats($data['fats'])
            ->setFiber($data['fiber']);
       try {
           $this->foodService->addFood($food);
           return new JsonResponse(['message' => 'Food added successfully'], 201);
       } catch (\Exception $e) {
           return new JsonResponse(['error' => $e->getMessage()], 400);
       }
    }
}
?>