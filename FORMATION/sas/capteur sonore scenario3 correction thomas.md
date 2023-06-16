# db meter

## Sujet

Je m'appelle Jérémy, je souhaite avoir un objet connecté pour signaler par le clignotement d'une LED un niveau sonore trop élevé

## Objectifs

+ Precisez la charge
+ proposer différentes solutions techniques 

## Proposition de Thomas

1. Projet initial

Charges / Tâches :
    - faire clignoter une led (branchement et code) = 0.5j
    - brancher un capteur de son (choix, branchement, code, transformation de la donnée) = 1j
    - algorithme simple pour faire clignoter la led quand le bruit est trop fort (> 60 db pendant 10 secondes consécutives) = 1j

Charge totale : 0.5 + 1 + 1 = 2.5j

Chiffrage:
    - Professionnel : TJM 500€ pour éléctronicien
        => 500€ x 2.5j = 1250€
    - Thomas / moi : 
        TJM 420€
        Facteur multiplicateur personnel sur projets arduino : x1.7
        => 2.5j x 1.7 x 420€ = 1785€

2. Idées supplémentaires

- suivi des données de la dernière semaine (bilan hebdo)
    But: pouvoir prendre des décisions et améliorer cette problématique au fur et à mesure. Analyser les moments "chauds" et les relier au planning pédagogique ou à des périodes de la semaines (début de semaine / fin de semaine, etc...)
    Réalisation: sans stocker toutes les secondes, faire la moyenne par minutes puis par paquets de 5 minutes. Les conservers sur une semaine.
- exporter les données de suivie (serveur web)
- paramétrer le seuil avec des boutons et un affichage simple (numéro à deux chiffres)
- écran lcd et deux touches de navigation pour afficher :
    - le paramétrage du seuil
    - le suivi quotidien
    - le suivi hebdo
    - la valeur maximale de la journée
- connecté à une application web pour un meilleur affichage
- stockage des données dans le cloud pour permettre à Tiphaine et les autres professeurs de visualiser ces données
- différents modes d'alertes (son / clgnotement / notifications / ampoules connectées)
- applications mobiles:
    - indépendantes (micro + affichage)
    - mixée avec un object connecté
        - micro et calcul sur mobile + ESP32 affichage
        - ESP32 micro et calcul + affichage sur mobile
