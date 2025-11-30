from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="API de recommandation de contenus",
    description="API de recommandation de contenus - Fruits Market",
    version="1.0.0"
)

# Configuration CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "message": "API de recommandation de contenus - Fruits Market",
        "version": "1.0.0"
    }


@app.get("/health")
async def health():
    return {"status": "healthy"}


@app.get("/recommendations")
async def get_recommendations():
    return {
        "recommendations": [
            {
                "id": 1,
                "product": "Pomme",
                "score": 0.95
            },
            {
                "id": 2,
                "product": "Poire",
                "score": 0.87
            },
            {
                "id": 3,
                "product": "Ananas",
                "score": 0.82
            }
        ]
    }
