# **SCENARIO 3**

1. **Faire des recherche ESP 32**  
Les cartes ESP32 sont des cartes très polyvalentes orientées IOT. Elles intègrent la gestion du wifi, du Bluetooth, du « touch » et une gestion des LiPo sur certaines cartes.  

# **Installation**
Pour utiliser la carte avec Arduino IDE ajoutez sa librairie : « https://dl.espressif.com/dl/package_esp32_index.json » et installez « ESP32 Arduino ».

# **Avec Visual Studio Code PlatformIO**

PlatformIO télécharge automatiquement les fichiers nécessaires pour faire fonctionner la carte, vous n’avez qu’à indiquer votre modèle parmi les 900 et quelques disponibles.

Le port sur lequel la carte est branchée n’est pas à indiquer, le logiciel le reconnaît automatiquement. Dans le cas où plusieurs cartes seraient branchées, accédez aux paramètres du projet comme indiqué sur la deuxième photo, puis ajoutez une nouvelle option (photo 3) et indiquez la valeur souhaitée.
Attention pour programmer certaines cartes il faut en plus appuyer sur un bouton lors de sa mise sous tension, relâchez le bouton quelques secondes après avoir branché la carte à l’ordinateur, plus d’informations dans la documentation technique de la carte.

D’autres paramètres peuvent être indiqués de la même manière : la vitesse de la ne communication série que l’ordinateur va établir avec la carte et surtout la liste des librairies du projet en ajoutant le paramètre « lib_deps« 
Les librairies ainsi associées au projet sont téléchargées automatiquement dans le répertoire du projet.


## **SECONDE ACTIVITE**

1. choisir une idée supplémentaire et chiffrée.

idée : stockage des données dans le cloud pour permettre à Tiphaine et les autres professeurs de visualiser ces données

TJM = 

Brancher un capteur de son (choix, branchement, code, transformation de la donnée) = 1j 

Création d'un nom de domaine = 0.5

Création d'une base de données My SQL = 1j

Connecter la base de donner au domaine et a la visualisation =1j  


## **SECONDE ACTIVITE 2**

L'application utilise le micro du pc, et transmet à la base de données les niveaux en temps réel des décibels;

Via une interface web de cette application, les utilisateurs en se connectant à leur espace sur celle ci, peuvent accéder, trier, ou lire les données.

Pour nous informer que le seuil limite de décibel est dépassé, l'application web nous transmet une notification. "attention seuil décibel dépassé"


Le PC est connecté via INTERNET, depuis internet (google) nous nous connecterons à notre domaine qui lui est communicant avec notre base données. 


TJM = 700€ 
 0.5 j pour le domaine

 2 j pour connecter la base de donner au domaine et a la visualisation 

 1 j création de la BDD

 1 j phase de tests

 1 j pour l'interface

     