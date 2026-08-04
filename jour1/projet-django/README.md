# E-Shop

Site e-shop avec catalogue filtrable et fiches produit. Backend Django REST Framework, frontend Expo (React Native + TypeScript), theme cyberpunk neon (vert/jaune/violet).

## Structure

```
backend/    Projet Django (API REST)
frontend/   Application Expo (mobile + web)
```

## Backend

Prerequis : Python 3, le venv du repo (a la racine, `venv/`) avec les dependances de `requirements.txt` installees.

```
cd backend
python manage.py migrate
python manage.py createsuperuser   # pour acceder a /admin/
python manage.py runserver 0.0.0.0:8000
```

`0.0.0.0` permet aux autres appareils du reseau local (ex. telephone avec Expo Go) d'atteindre l'API.

### Endpoints principaux

- `GET /api/products/` : liste des produits. Parametres de filtre optionnels :
  - `category=<id>`
  - `min_price=<valeur>`
  - `max_price=<valeur>`
- `GET /api/products/<id>/` : detail d'un produit
- `/admin/` : interface d'administration (gestion des categories et produits)

### Tests

```
python manage.py test product
```

## Frontend

Prerequis : Node.js.

```
cd frontend
npm install
npm run web       # navigateur
npm start         # QR code pour Expo Go (mobile)
```

L'URL de l'API est resolue automatiquement dans `constants/api.ts` : `localhost:8000` sur web, IP locale du serveur Expo sur mobile. Le backend doit tourner sur le port 8000 sur la meme machine (ou meme reseau pour le mobile).

## Auteur 
- Awadi BEDJA M.S.
