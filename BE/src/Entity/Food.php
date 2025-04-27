<?php

namespace App\Entity;

use App\Repository\FoodRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FoodRepository::class)]
class Food
{
    #[ORM\Id]
    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?int $calories = null;

    #[ORM\Column]
    private ?int $proteins = null;

    #[ORM\Column]
    private ?int $carbohydrates = null;

    #[ORM\Column]
    private ?int $fats = null;

    #[ORM\Column]
    private ?int $fiber = null;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getCalories(): ?int
    {
        return $this->calories;
    }

    public function setCalories(int $calories): static
    {
        $this->calories = $calories;

        return $this;
    }

    public function getProteins(): ?int
    {
        return $this->proteins;
    }

    public function setProteins(int $proteins): static
    {
        $this->proteins = $proteins;

        return $this;
    }

    public function getCarbohydrates(): ?int
    {
        return $this->carbohydrates;
    }

    public function setCarbohydrates(int $carbohydrates): static
    {
        $this->carbohydrates = $carbohydrates;

        return $this;
    }

    public function getFats(): ?int
    {
        return $this->fats;
    }

    public function setFats(int $fats): static
    {
        $this->fats = $fats;

        return $this;
    }

    public function getFiber(): ?int
    {
        return $this->fiber;
    }

    public function setFiber(int $fiber): static
    {
        $this->fiber = $fiber;

        return $this;
    }
}
?>
