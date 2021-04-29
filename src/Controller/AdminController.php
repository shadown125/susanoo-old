<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/susanoo')]

class AdminController extends AbstractController
{
    #[Route('/', name: 'susanoo_dashboard')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig');
    }

    #[Route('/register', name: 'susanoo_register')]
    public function register(): Response
    {
        return $this->render('admin/register.html.twig');
    }
}
