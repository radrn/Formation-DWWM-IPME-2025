
Explication de la base :
- address : une adresse, si un "user_uuid" est renseigné, alors cette adresse est celle d'un utilisateur (en plus de potentiellement être celle d'une vente)
- brand : les marques de voiture
- favorite : les annonces mises en favoris par les utilisateurs
- fuel : les types de carburant
- image : les images des annonces
- listing : les annonces
- model : les modèles de voitures
- user : les utilisateurs


# 1/ Afficher les informations des utilisateurs et, s'ils en possèdent une, leur adresse 

```sql

SELECT *

FROM user

LEFT JOIN address 

ON address.user_uuid = user.uuid;

```

# 2/ Afficher les 20 dernières annonces, on affichera seulement les colonnes suivantes : title, price et mileage. Price sera concaténé à "€" et mileage à "km" (PS : les prices sont en centimes, il faut les diviser par 100)

```sql

SELECT title, CONCAT(price/100, '€'), CONCAT(mileage, 'km') 

FROM listing

ORDER BY created_at DESC

LIMIT 20;

```

# 3/ Afficher le nombre d'annonces par marque de voiture

```sql

SELECT COUNT(*), brand.name

FROM listing

JOIN model

ON model.id = model_id

JOIN brand

ON model.brand_id = brand.id

GROUP BY brand.name;
```

# 4/ Afficher les annonces de voitures de la marque "Renault" ayant au moins 50000km

```sql

SELECT title, mileage

FROM listing

JOIN model

ON model.id = model_id

JOIN brand 

ON model.brand_id = brand.id

WHERE brand.name = "Renault" AND mileage >= 50000;

```

# 5/ Afficher les annonces de voitures de la marque "Ford" ayant au moins 30000km et un prix maxmimum de 12000€ (Attention aux centimes...)

```sql

SELECT title

FROM listing

JOIN model

ON model.id = model_id

JOIN brand 

ON model.brand_id = brand.id

WHERE brand.name = "Ford" AND mileage >= 30000 AND (price/100) <= 12000;

```

# 6/ Afficher les emails des utilisateurs ayant fait au moins une annonce dans les 6 derniers mois

```sql

SELECT listing.owner_uuid, email, listing.created_at

FROM user

JOIN listing

ON listing.owner_uuid = user.uuid

WHERE listing.created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)

GROUP BY user.uuid

ORDER BY `listing`.`created_at` DESC;

```

# 7/ Afficher le nombre d'annonces déposées par années (Exemple : "2025 → 10", "2024 → 59", etc...)

```sql

SELECT COUNT(*), YEAR(created_at) AS year

FROM listing

GROUP BY YEAR(created_at);

```

# 8/ Afficher les 5 modèles de voitures les plus mis en vente

```sql

SELECT COUNT(*), model.name

FROM listing

JOIN model

ON model.id = listing.model_id

GROUP BY model.name

ORDER BY COUNT(*) DESC

LIMIT 5;

```

# 9/ Afficher les annonces pour les voitures diesel

```sql

SELECT title, fuel.type, model.name

FROM listing

JOIN fuel

ON fuel.id = listing.fuel_id

JOIN model

ON model.id = listing.model_id

WHERE fuel.type = "diesel";

```

# 10/ Afficher les modèles de voiture n'ayant pas de modèle electrique en annonce

```sql

SELECT model.name, model.id 

FROM model 

WHERE model.id NOT IN (
    SELECT DISTINCT model_id
    FROM `listing`
    WHERE `fuel_id` = 2
);

```

# 11/ Afficher les 20 dernières annonces, mais de la page 3 (on considère que l'on a 20 annonces par page)

```sql

SELECT title

FROM listing

ORDER BY created_at DESC

LIMIT 20 OFFSET 40;

```

# 12/ Afficher le nombre d'adresses enregistrées par ville, les trier par ordre décroissant

```sql

SELECT city, COUNT(*)

FROM address

GROUP BY city

ORDER BY COUNT(*) DESC;

```

# 13/ Afficher les adresses, dont le "street_name" est présent plus d'une fois, et trier par ordre décroissant

```sql

SELECT COUNT(*), address.street_name

FROM address

GROUP BY address.street_name

HAVING COUNT(*) > 1

ORDER BY COUNT(*) DESC;

```

# 14/ Afficher les user n'ayant pas défini d'adresses (leur "uuid" n'est pas présent dans la table "address")

```sql

SELECT *

FROM user

LEFT JOIN address

ON address.user_uuid = user.uuid

WHERE address.user_uuid IS NULL;

```

# 15/ Afficher les annonces n'ayant aucune image (s'il y en a ?)

```sql

SELECT *

FROM listing

JOIN image

ON image.listing_uuid = listing.uuid

WHERE image.listing_uuid IS NULL;

```

# 16/ Afficher les annonces ayant plusieurs images

```sql

SELECT title, COUNT(*)

FROM listing

JOIN image

ON image.listing_uuid = listing.uuid

GROUP BY listing.uuid

HAVING COUNT(*) >1;

```

# 17/ Afficher par marque, leur somme totale mise en vente, les trier par ordre décroissant

```sql

SELECT brand.name
    SUM(listing.price) 

FROM brand

JOIN model

ON model.id = model_id

JOIN brand

ON model.brand_id = brand.id

GROUP BY brand.name;

```

# 18/ Afficher le nombre d'annonce déposée par mois, depuis le début de l'année 2025

```sql

SELECT MONTH(listing.created_at), COUNT(*)

FROM listing

WHERE listing.created_at LIKE '2025%'

GROUP BY MONTH(listing.created_at)

ORDER BY COUNT(*) DESC;

```
