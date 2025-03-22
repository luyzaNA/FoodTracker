<?php

namespace App\Entity;

use App\Repository\FoodRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FoodRepository::class)]
class Food
{
    #[ORM\Id]
    #[ORM\Column(length: 255)]
    private ?string $Name = null;

    #[ORM\Column]
    private ?int $Calories = null;

    #[ORM\Column]
    private ?int $Proteins = null;

    #[ORM\Column]
    private ?int $Carbohydrates = null;

    #[ORM\Column]
    private ?int $Fats = null;

    #[ORM\Column]
    private ?int $Fiber = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): static
    {
        $this->Name = $Name;

        return $this;
    }

    public function getCalories(): ?int
    {
        return $this->Calories;
    }

    public function setCalories(int $Calories): static
    {
        $this->Calories = $Calories;

        return $this;
    }

    public function getProteins(): ?int
    {
        return $this->Proteins;
    }

    public function setProteins(int $Proteins): static
    {
        $this->Proteins = $Proteins;

        return $this;
    }

    public function getCarbohydrates(): ?int
    {
        return $this->Carbohydrates;
    }

    public function setCarbohydrates(int $Carbohydrates): static
    {
        $this->Carbohydrates = $Carbohydrates;

        return $this;
    }

    public function getFats(): ?int
    {
        return $this->Fats;
    }

    public function setFats(int $Fats): static
    {
        $this->Fats = $Fats;

        return $this;
    }

    public function getFiber(): ?int
    {
        return $this->Fiber;
    }

    public function setFiber(int $Fiber): static
    {
        $this->Fiber = $Fiber;

        return $this;
    }
}
?>
