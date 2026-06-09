<!-- Contexte -->
J'effectue la formation d'intégrateur web OpenClassrooms. Je réalise un projet qui consiste à intégrer une page web de restaurant en mobile first avec hmtl + css (pas de JS). Pour valider ce projet, je devrais le soutenir devant un évaluateur en visio pendant 20 minutes. Ensuite il me posera des questions. La page web doit être la plus fidèle possible à la maquette.
Ton rôle sera celui de l'évaluateur. Tu dois évaluer mon travail et me dire ce que je peux améliorer dans mon code, ou ce qui ne va pas. Ensuite, tu me poseras des questions pour voir si je suis capable d'expliquer ce que j'ai fait et pourquoi.

<!-- Consignes du projet -->
Vous avez intégré Ohmyfood en tant que développeur junior. Il s’agit d’une jeune startup qui voudrait s'imposer sur le marché de la restauration. Déjà présente à New-York, elle souhaite désormais faire sa place à Paris. 

   

Votre mission est de développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques.

En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée.

Finis, les temps d'attente au restaurant !

L’équipe commerciale a déjà réussi à convaincre 4 restaurateurs d’utiliser la plateforme OhMyFood. Paul, le CTO (Chief Technology Officer, ou Directeur technique en français) décide alors que le site contiendra 4 menus dans un premier temps. 

À deux, vous avez pu établir ce brief créatif pour rassembler toutes les informations clés du projet de développement du site.

Le projet va pouvoir commencer. Paul vous envoie les maquettes par e-mail :

Objet : Maquettes site OhMyFood Paris

De : Paul

À : moi

Bonjour !


L’UX designer a finalisé les maquettes mobile et desktop du site ! Tu les trouveras en pièce jointe, en plus du dossier des sources du site (images et textes). Tu y trouveras également le prototype du site via Figma, incluant les animations et comportements à intégrer. Voici un extrait de ce à quoi devra ressembler le site :

Extrait des maquettes mobile et desktop

Il n’y a plus qu’à le développer pour mobile, tablette et desktop en s’appuyant rigoureusement sur les informations déterminées dans le brief créatif ! Pour rappel, le site doit être responsive et en “mobile first”.

N'oublie surtout pas d'utiliser SASS cela te permettra a minima de bien découper ton code CSS.
Pense aussi à soigner tes animations CSS. Il faudra que tu m’expliques comment elles fonctionnent. 


Hâte de voir le site terminé ! 


Bon courage !


Paul, CTO

Pièces jointes :
Brief créatif (D:\Documents\Open Classrooms\Projet 4\Ohmyfood\Vérification travail\Brief+creatif+site+Ohmyfood.pdf)
Maquette (https://www.figma.com/design/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood--mobile-et-desktop-?node-id=25368-717&t=EHnmCUnYwngWpRE6-1)
Prototype (https://www.figma.com/proto/t4449fzDnwGYmzuwQdu87V/Maquettes-Ohmyfood--mobile-et-desktop-?node-id=25368-654&page-id=0%3A1&starting-point-node-id=25368%3A654&t=gwqOYdeb9iBt5H5U-1)
Fichiers sources (D:\Documents\Open Classrooms\Projet 4\Ohmyfood\Vérification travail\Images et textes Ohmyfood)

<!-- Etapes à suivre pour réaliser le projet -->
Étape 1 : Mettez en place votre environnement de développement :

Afin de commencer le projet dans de bonnes conditions, prenez connaissance des différents documents, et notamment du brief créatif. Il a pour objectif de définir toutes les exigences et contraintes du projet de développement du site, et de faciliter la communication entre les équipes. Lisez-le attentivement pour comprendre les enjeux du site OhMyFood !

 

Avant de démarrer cette étape, je dois avoir :

suivi les parties 1 et 2 du cours Gérez votre code avec Git et GitHub.
suivi le cours Simplifiez-vous le CSS avec SASS.
  

Une fois cette étape terminée, je devrais avoir :

mon projet sur un repo GitHub.
une structure de projet contenant :
une page index.html ;
un dossier pour les assets (fichier CSS, images) ;
un dossier pour le SASS ;
un dossier ‘restaurants’ pour y mettre les pages de restaurants.
 

Recommandations : 

Après avoir créé le dossier du projet, créez le fichier “ReadMe.md” avec le nom du projet.
Initialisez le projet avec Git, et publiez le repo sur GitHub.
Créez les différents fichiers nécessaires pour le projet.
Si vous le souhaitez, publiez le site sur GitHub Pages afin de le voir en live.
Pensez à bien structurer votre code Sass, idéalement en plusieurs fichiers.
 

Points de vigilance :

Assurez-vous que le repo GitHub soit public pour que votre mentor ait bien accès au projet. 
 

Ressources : 

Site de GitHub Pages
Pour aller plus loin sur l’utilisation de Git et GitHub, suivez le cours Devenez un expert de Git et GitHub

Étape 2 : Intégrez la version mobile de la page d’accueil :

Maintenant que le projet est prêt, vous allez commencer par intégrer la version mobile de la page d’accueil sans les animations.

 

Avant de démarrer cette étape, je dois avoir :

analysé les maquettes afin d’en identifier : 
les différentes couleurs utilisées sur le site ;
les différentes sections de la page ;
les différents composants (ce sont les éléments de l’interface qui se répètent).
 

Une fois cette étape terminée, je devrais avoir :

la page d’accueil du site sans les animations.
 

Recommandations : 

Pensez à analyser la maquette desktop de la page également, afin d’avoir une meilleure idée de la gestion des sections. 

À chaque étape, pensez à vérifier votre code aux validateurs HTML et CSS. Vous pouvez le faire en passant votre lien GitHub Pages au validateur.

 

Points de vigilance : 

Pensez bien que l’on souhaite ici faire une intégration Mobile First, c'est-à-dire que le CSS principal nous servira pour le mobile, et que les media queries nous permettront d’aller vers le format desktop. 

 

Ressources :

Mobile First : la nouvelle approche du Web design – Blog Ionos 

Étape 3 : Ajoutez les animations à la page d’accueil 

Désormais, vous avez la structure de la page. Il est temps d’ajouter les premières animations au projet. 

 

Avant de démarrer cette étape, je dois avoir :

suivi le cours “Créez des animations CSS modernes”.
 

Une fois cette étape terminée, je devrais avoir :

la page d’accueil avec les animations fonctionnelles pour la version mobile. 
les animations qui doivent s’intégrer de manière naturelle : si j’ai une animation au survol d’un élément, alors j’ai l’animation dans le sens contraire lorsque je quitte l’élément. 
 

Recommandations : 

Pour chaque création d’animation, vérifiez si un exemple précis à suivre est donné. Si ce n’est pas le cas, demandez-vous : “Est-ce que mon animation s’intègre bien avec le reste des animations du site ?”.

 

Points de vigilance :

Pour une meilleure expérience utilisateur, il est important de prendre en compte l’animation dans tous les états de ses composants. Par exemple : si on a une animation au survol d’un élément, on doit avoir l’animation inverse lorsque le curseur quitte l’élément. 

 

Ressources :

Mozilla.org : Utiliser les transitions CSS
MDN : Utiliser les animations CSS
 
 Étape 4 : Réalisez le responsive de la page d’accueil :

 Avant de démarrer cette étape, je dois avoir :

analysé la version desktop de la page d’accueil. 
 

Une fois cette étape terminée, je devrais avoir :

la page d’accueil finalisée et publiée sur GitHub Pages.
 

Recommandations : 

Identifiez des breakpoints* standard dans votre application afin d’éviter de multiplier les media queries. 
 

Points de vigilance :

Gardez en tête que pour la réalisation du responsive d’un site, il ne faut ajouter que les règles que nous souhaitons modifier dans les media queries.
 

Ressources :

*C’est quoi un breakpoint ? Définition, utilisation, intérêt.

Étape 5 : Intégrez le code d’une page de restaurant :

Après avoir finalisé la page d’accueil, vous allez répéter le même processus sur la page du premier restaurant.

 

Avant de démarrer cette étape, je dois avoir :

analysé la maquette des restaurants sur mobile et sur desktop.
 

Une fois cette étape terminée, je devrais avoir :

une page de restaurant intégrée.
la page validée au W3C pour le HTML et le CSS.
 

Recommandations : 

Ici, vous devez suivre le même processus développé des étapes 2 à 4, mais cette fois-ci sur la page du premier restaurant.
 

Points de vigilance :

N’oubliez pas l’ellipse sur le nom et la description de plats qui sont trop longs en version mobile.
Faites attention aux rendus des animations. Assurez-vous qu’elles sont conformes aux attentes du cahier des charges.

Étape 6 : Copiez la page de restaurant et adaptez le contenu aux restaurants restants :

Une fois la page du premier restaurant développée, vous allez pouvoir l’utiliser pour développer celles des autres restaurants.

 

Avant de démarrer cette étape, je dois avoir :

terminé d’intégrer la page du premier restaurant.
  

Une fois cette étape terminée, je devrais avoir :

toutes les pages du site intégrées dans tous les formats.
 

Recommandations : 

D’un restaurant à un autre, la structure reste la même, seul le contenu change. Vous ne devriez donc pas avoir besoin de toucher au code CSS ni à la structure du HTML, mais simplement de remplacer le contenu (image + textes).
 

Points de vigilance :

Après avoir intégré le contenu d’un nouveau restaurant, si vous avez changé du CSS, assurez-vous que le restaurant original ne soit pas impacté.
Par ailleurs, ne dupliquez pas de code CSS inutilement. Les différentes pages "restaurant" ont exactement la même forme et partagent donc le même code CSS à l'exception de la bannière.

Étape 7 : Faites une revue complète du projet :

Avant de démarrer cette étape, je dois avoir :

terminé l’intégration des maquettes.
 

Une fois cette étape terminée, je devrais avoir :

le projet finalisé et les livrables vérifiés.
 

Recommandations : 

Prenez le temps de passer chaque page au validateur afin de vérifier que le code est conforme aux attentes.
Vérifiez le rendu sur mobile, tablette et desktop afin de vous assurer du rendu. Celui-ci doit respecter le visuel des maquettes.

<!-- Soutenance -->

Durant la présentation orale, l’évaluateur interprétera le rôle de Paul, le CTO. La soutenance de 30 minutes est structurée de la manière suivante :

Présentation des livrables (15 minutes) 
Dans un premier temps, vous expliquerez vos choix techniques concernant la conception du site.
Vous aborderez : 
comment vous avez réalisé l’animation du cœur.
comment vous avez réalisé le sélecteur de plat.
votre choix pour le loader de la page d’accueil.
comment vous avez abordé le code du projet en mobile first.
Discussion (10 minutes) 
Toujours dans le rôle de Paul, votre évaluateur vous posera des questions. Il pourra vous challenger sur les points suivants : 
La façon dont vous avez réalisé les animations.
Vos choix pour l’organisation de votre code CSS et l'utilisation de Sass.
La façon dont vous avez abordé le responsive du site.
Debriefing (5 minutes)
À la fin de la soutenance, l'évaluateur arrêtera de jouer le rôle de Paul pour vous permettre de débriefer ensemble.
Votre mentor et les évaluateurs (lors d'une soutenance) seront très attentifs à votre niveau de compréhension. Tout code que vous produisez doit être maîtrisé ligne par ligne : un code qui “fonctionne” mais n’est pas compris sera considéré comme non maîtrisé et sera pénalisé.

Un bon développeur ne se contente pas de faire fonctionner du code : il sait expliquer ses choix, justifier sa logique et comprendre ce qu’il a écrit. Copier du code (depuis une IA, un tutoriel ou le travail de quelqu’un d’autre) sans le comprendre est contraire aux bonnes pratiques professionnelles et ne permet pas de valider vos compétences.

Votre présentation devra durer 15 minutes (+/- 5 minutes). Puisque le respect des durées des présentations est important en milieu professionnel, les présentations en dessous de 10 minutes ou au-dessus de 20 minutes peuvent être refusées.  

<!-- Fichier évaluateur -->

Pour m'évaluer, tu devras te baser sur la fiche d'évaluation suivante (D:\Documents\Open Classrooms\Projet 4\Ohmyfood\Vérification travail\Améliorez l'interface d'un site mobile avec des animations CSS - OpenClassrooms)
