# Fruits Market - Version minimale (Product uniquement) - à compléter

Projet d'application e-commerce avec API REST et base de données.

## Architecture

- **API** : Bun + TypeORM + Hono (port 3000)
- **Base de données** : MariaDB
- **Adminer** : Adminer (port 8080)

## Commandes Docker Compose essentielles

### Démarrer le projet

```bash
# Démarrer tous les services en arrière-plan
docker compose up -d

# Démarrer et voir les logs en temps réel
docker compose up

# Démarrer un service spécifique
docker compose up -d api
```

### Arrêter le projet

Se placer dans le terminal et saisir le raccourci clavier CTRL + C (identique Windows ou Mac).

```bash
# Arrêter tous les services

docker compose down

# Arrêter et supprimer les volumes (⚠️ supprime les données)
docker compose down -v
```

### Reconstruire les images

```bash
# Reconstruire les images sans cache
docker compose build --no-cache

# Reconstruire et redémarrer
docker compose up -d --build
```

### Voir les logs

```bash
# Logs de tous les services
docker compose logs

# Logs en temps réel
docker compose logs -f

# Logs d'un service spécifique
docker compose logs -f api
```

### Gérer les services

```bash
# Redémarrer un service
docker compose restart api

# Stopper un service
docker compose stop api

# Démarrer un service stoppé
docker compose start api

# Voir l'état des services
docker compose ps
```

### Accéder aux conteneurs

```bash
# Ouvrir un shell dans le conteneur de l'API
docker compose exec api sh

# Ouvrir un shell dans la base de données
docker compose exec db bash

# Exécuter une commande dans un conteneur
docker compose exec api bun run test
```

### Nettoyage

```bash
# Supprimer les conteneurs arrêtés, réseaux et images non utilisées
docker compose down --rmi all

# Nettoyer le système Docker complet (⚠️ affecte tous les projets)
docker system prune -a --volumes
```

## Accès aux services

- **API** : <http://localhost:3000>
- **Adminer** : <http://localhost:8080>
- **Health check** : <http://localhost:3000/health>

![Fruits market](./assets/fruits-market.png)

--

!["Logotype Shrp"](https://sherpa.one/images/sherpa-logotype.png)

**Alexandre Leroux**
_Enseignant / Formateur_
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
