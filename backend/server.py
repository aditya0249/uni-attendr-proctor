from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import cv2
import json
import face_recognition
import threading
from database import get_connection
from camera import start_camera, attendance_data

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= AUTO START CAMERA =================

@app.on_event("startup")
def startup_event():
    threading.Thread(target=start_camera, daemon=True).start()

# ================= ADD STUDENT =================

@app.post("/add-student")
async def add_student(
    name: str = Form(...),
    roll: str = Form(...),
    branch: str = Form(...),
    batch: str = Form(...),
    email: str = Form(...),
    image: UploadFile = File(...)
):
    contents = await image.read()
    nparr = np.frombuffer(contents, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    encodings = face_recognition.face_encodings(img)

    if len(encodings) == 0:
        return {"error": "No face detected in image"}

    encoding_json = json.dumps(encodings[0].tolist())

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO students (name, roll, branch, batch, email, face_encoding)
        VALUES (%s, %s, %s, %s, %s, %s)
    """, (name, roll, branch, batch, email, encoding_json))

    conn.commit()
    conn.close()

    return {"message": "Student added successfully"}

# ================= GET ATTENDANCE =================

@app.get("/attendance")
def get_attendance():
    return attendance_data