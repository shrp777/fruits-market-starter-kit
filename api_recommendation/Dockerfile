FROM python:3.11-slim

# Installation de curl pour le healthcheck
RUN apt-get update && apt-get install -y --no-install-recommends curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./src ./src

EXPOSE 8000

# pour le développement
# CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]

# pour la production
# CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
