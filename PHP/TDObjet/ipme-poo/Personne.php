<?php
require_once 'Compte.php';
require_once 'CompteCourant.php';
require_once 'CompteEpargne.php';
class Personne {
    private string $nom;
    private string $prenom;
    private string $adresse;
    private string $naissance;
    private array $comptes;

    public function __construct(string $nom, string $prenom, string $adresse, string $naissance){
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->adresse = $adresse;
        $this->naissance = $naissance;
    }

    public function ouvrirCompte($solde, $devise, $type = "", $taux= 0) {
        if($type == "epargne"){
            $compte = new CompteEpargne($solde, $devise, $this, $taux);
        $this->comptes[] = $compte; 
        return $compte;
        } else{
            $compte = new CompteCourant($solde, $devise, $this);
        $this->comptes[] = $compte; 
        return $compte;
        }
    }

    public function getComptes(){
        return $comptes;
    }

    public function __toString(){
        return $this->nom . " " . $this->prenom . " " . $this->adresse . " " . $this->naissance;
    }
}