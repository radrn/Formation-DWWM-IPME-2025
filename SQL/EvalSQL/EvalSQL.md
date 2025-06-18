### 1. Afficher les 9 derniers album sortis, avec le nom de l’album, le nom de l’artiste et seulement son année de sortie. 

```sql

SELECT album.name AS album_name, artist.name AS artist_name, YEAR(album.published_at)

FROM album 

JOIN artist

ON artist.id = album.artist_id

ORDER BY YEAR(album.published_at) DESC

LIMIT 9;

```

### 2. Afficher le nombre de playlist par compte, triez-les par ordre décroissant, sur le nombre de playlist. 

```sql

SELECT account.id, COUNT(playlist.name)

FROM account

JOIN playlist

ON playlist.account_id = account.id

GROUP BY account.id

ORDER BY COUNT(playlist.name) DESC;

```

### 3. Afficher par album, la durée totale de celui-ci en seconde et son nombre de chansons, on doit voir : « Nom album | Durée totale | Nombre de chansons » 

```sql

SELECT album.name AS album_name, SUM(song.duration) AS total_duration, COUNT(song.id) AS total_songs

FROM album

JOIN album_song

ON album_song.album_id = album.id

JOIN song

ON song.id = album_song.song_id

GROUP BY album.name;

```

### 4. Afficher par playlist, la durée totale de celle-ci en seconde et son nombre de chansons, on doit voir : « Nom playlist | Durée totale | Nombre de chansons » 

```sql

SELECT playlist.name AS playlist_name, SUM(song.duration) AS total_duration, COUNT(song.id) AS total_songs

FROM playlist

JOIN playlist_song

ON playlist_song.playlist_id = playlist.id

JOIN song

ON song.id = playlist_song.song_id

GROUP BY playlist_name;

```

### 5. Afficher le(s) nom(s) de(s) artiste(s) les plus vieux, et seulement sur l’année. Par exemple, s’il y a 2 artistes en 1976 et que c’est l’année la plus basse, je veux voir les deux (on ignore le jours et le mois). 

```sql

SELECT artist.name, YEAR(artist.created_at)

FROM artist

ORDER BY YEAR(artist.created_at) ASC;

```

### 6. Afficher l’âge moyen de tous les utilisateurs de l’application. 

```sql

SELECT ROUND(AVG(YEAR(NOW())-YEAR(account.birth_date)))

FROM account;

```

### 7. Afficher le nombre d’abonnés à la newsletter (colonne newsletter = 1 de la table account). 

```sql

SELECT COUNT(account.id)

FROM account

WHERE account.newsletter = 1;

```

### 8. Afficher le nombre d’utilisateur par genre. 

```sql

SELECT COUNT(account.id)

FROM account

GROUP BY account.gender;

```

### Bonus : labellisé les acronymes par leur signification : 
```sql
ALTER TABLE account
MODIFY COLUMN account.gender VARCHAR(15);
```

### • « F » = Femme 

```sql
UPDATE account
SET account.gender = "Femme"
WHERE account.gender = "F";

```

### • « H » = Homme 

```sql
UPDATE account
SET account.gender = "Homme"
WHERE account.gender = "H";

```

### • « NB » = Non-binaire 

```sql
UPDATE account
SET account.gender = "Non-binaire"
WHERE account.gender = "NB";

```

### • « NR » = Non-renseigné 

```sql

UPDATE account
SET account.gender = "Non-renseigné"
WHERE account.gender = "NR";
```


### 9. Afficher par nom d’abonnement, le nombre de fois où il est présent sur l’année 2024. 

```sql

SELECT subscription.name, COUNT(*)

FROM subscription

JOIN account_subscription

ON account_subscription.subscription_id = subscription.id

WHERE YEAR(account_subscription.effective_at) = 2024

GROUP BY subscription.name;

```

### 10. Afficher les utilisateurs n’ayant jamais créer de playlists. 

```sql

SELECT account.id

FROM account

WHERE account.id NOT IN (

    SELECT account.id

    FROM account

    JOIN playlist

    ON playlist.account_id = account.id

    GROUP BY account.id);

```

### 11. Afficher le nombre de like par playlist, avec le nom du propriétaire de la playlist, on doit voir : « Nom playlist | Nom propriétaire | Nombre de like » 

```sql

SELECT playlist.name AS playlist_name, account.name AS creator, COUNT(account_like_playlist.account_id) AS nbr_like

FROM account_like_playlist

JOIN account

ON account.id = account_like_playlist.account_id

JOIN playlist

ON playlist.id = account_like_playlist.playlist_id

GROUP BY playlist.name;

```

### 12. Quelle est l’écart de durée entre la chanson la plus longue et la chanson la plus courte ? 


```sql

SELECT MAX(song.duration) - MIN(song.duration) AS duration_gap

FROM song;

```

### 13. Afficher le nombre de chansons sorties par années, depuis les 5 dernières années 

```sql

SELECT COUNT(song.id), YEAR(album.published_at)

FROM song

JOIN album_song

ON album_song.song_id = song.id

JOIN album

ON album.id = album_song.album_id

GROUP BY YEAR(album.published_at)

ORDER BY YEAR(album.published_at) DESC

LIMIT 5;

```