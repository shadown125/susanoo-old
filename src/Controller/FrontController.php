<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/susanoo/admin')]

class FrontController extends AbstractController
{
    #[Route('/', name: 'login')]
    public function index(): Response
    {
        return $this->render('login/login.html.twig');
    }
}
