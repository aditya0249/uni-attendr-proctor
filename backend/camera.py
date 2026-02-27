import cv2
import face_recognition
import numpy as np
import json
from database import get_connection
import dlib

detector = dlib.get_frontal_face_detector()
attendance_data = []
marked_students = set()

def load_students():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT name, roll, face_encoding FROM students")

    encodings = []
    students = []

    for name, roll, encoding_json in cursor.fetchall():
        encoding = np.array(json.loads(encoding_json))
        encodings.append(encoding)
        students.append({
            "name": name,
            "roll": roll
        })

    conn.close()
    return encodings, students


def start_camera():
    print("📷 Camera Starting Automatically...")

    import numpy as np

    known_encodings, known_students = load_students()

    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

    if not cap.isOpened():
        print("❌ Camera not accessible")
        return

    while True:
        ret, frame = cap.read()

        if not ret or frame is None:
            continue

        try:
            # Convert BGR to RGB (face_recognition needs RGB)
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            
            # Make sure it's uint8 and C-contiguous
            rgb_frame = np.ascontiguousarray(rgb_frame)
            
            # Use face_recognition's own face_locations function (more reliable)
            face_locations = face_recognition.face_locations(rgb_frame, model='hog')
            
            # Only process encodings if faces found
            if len(face_locations) > 0:
                face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)
            else:
                face_encodings = []

        except Exception as e:
            print(f"Face processing error: {e}")
            continue

        # Match faces with known students
        for face_encoding in face_encodings:
            matches = face_recognition.compare_faces(
                known_encodings, face_encoding, tolerance=0.5
            )

            if True in matches:
                index = matches.index(True)
                student = known_students[index]

                if student["roll"] not in marked_students:
                    marked_students.add(student["roll"])

                    attendance_data.append({
                        "roll": student["roll"],
                        "name": student["name"],
                        "status": "Present"
                    })

                    save_attendance(student["roll"], student["name"])
                    print("✅ Marked:", student["name"])

        cv2.imshow("Camera Attendance", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()


def save_attendance(roll, name):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO attendance (roll, name) VALUES (%s, %s)",
        (roll, name)
    )
    conn.commit()
    conn.close()
