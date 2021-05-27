<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
    public function __construct(UserPasswordEncoderInterface $password_encoder)
    {
        $this->password_encoder = $password_encoder;
    }

    public function load(ObjectManager $manager)
    {
        foreach ($this->getUserData() as [$name, $last_name, $email, $password, $roles, $created, $profession]) {
            $user = new User();
            $user->setName($name);
            $user->setLastName($last_name);
            $user->setEmail($email);
            $user->setPassword($this->password_encoder->encodePassword($user, $password));
            $user->setRoles($roles);
            $user->setCreatedAt($created);
            $user->setProfession($profession);

            $manager->persist($user);
        }

        $manager->flush();
    }

    private function getUserData(): array
    {
        return [

            ['Dawid', 'Ol', 'do@gmail.com', '123456', ['ROLE_ADMIN'], new \DateTime(), 'Fullstack Developer'],
            ['test', '1', 'test@gmail.com', '1234567', ['ROLE_USER'], new \DateTime(), 'Developer'],

        ];
    }
}
