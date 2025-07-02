<?php
require_once 'Personne.php';    
abstract class Compte {
    private int $numero = 0;
    protected float $solde;
    private string $devise;
    private Personne $proprietaire;
    private static int $nbComptes = 0;

    public function __construct(int $solde, string $devise, Personne $proprietaire, int $nbComptes){
        $this->solde = $solde;
        $this->devise = $devise;
        $this->proprietaire = $proprietaire;
        $this->nbComptes = $nbComptes++;
    }

    public function deposer(float $montant) {
        $this-> solde += $montant;
    }

    public function retirer(float $montant) {
        if($montant > $this->solde){
            throw new Exception("Solde insuffisant pour retirer $montant € !");
        }
        $this->solde -= $montant;
    }

    public function getSolde() {
        echo "Solde actuel : {$this->solde} €";
    }

    public function __toString(){
        return $this->numero . " " . $this->solde . " " . $this->devise . " " . $this->proprietaire . " ". $this->nbComptes;
    }
}