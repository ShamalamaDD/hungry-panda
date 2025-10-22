from fastapi import FastAPI
from fastapi.responses import RedirectResponse

app = FastAPI()

@app.get("/", include_in_schema=False)
def read_root():
    return RedirectResponse(url="/docs")

@app.get("/pint", tags=['Health Check'])
def ping():
    return {"status" : "Success", "message" : "Shamalama ding dong!"}
