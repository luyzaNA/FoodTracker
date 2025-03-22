<?php

namespace App\Repository;

use App\Entity\Food;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @extends ServiceEntityRepository<Food>
 */
class FoodRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Food::class);
    }

   public function createFood(Food $food): Food
   {
       $this->entityManager->persist($food);
       $this->entityManager->flush();

       return $food;
   }

  public function findFood(string $name): ?Food
  {
      return $this->findOneBy(['Name' => $name]);
  }
}
?>