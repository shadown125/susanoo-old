<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/susanoo/admin/susanoo')]

class AdminController extends AbstractController
{
    #[Route('/', name: 'susanoo_dashboard')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig');
    }
}
