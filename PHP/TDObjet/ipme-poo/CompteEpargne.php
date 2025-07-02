<?php
require_once 'Personne.php';
class CompteEpargne extends Compte {
    private float $taux;

    public function __construct(float $soldeInitial, string $devise, Personne $proprietaire, float $taux){
        parent::__construct($soldeInitial, $devise, $proprietaire);
        $this->taux = $taux;
    }

    public function appliquerInterets(){
        $this->solde += $this->solde * $this->taux;
    }
}
