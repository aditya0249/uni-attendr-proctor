import cv2
import face_recognition
import os

attendance_data = []
marked_students = set()

known_encodings = []
known_names = []

# Load known faces
for file in os.listdir("known_faces"):
    image = face_recognition.load_image_file(f"known_faces/{file}")
    encoding = face_recognition.face_encodings(image)[0]
    known_encodings.append(encoding)
    known_names.append(file.split(".")[0])

def start_camera():
    cap = cv2.VideoCapture(0)

    while True:
        ret, frame = cap.read()
        rgb_frame = frame[:, :, ::-1]

        face_locations = face_recognition.face_locations(rgb_frame)
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

        for face_encoding in face_encodings:
            matches = face_recognition.compare_faces(known_encodings, face_encoding)

            if True in matches:
                index = matches.index(True)
                name = known_names[index]

                if name not in marked_students:
                    marked_students.add(name)
                    attendance_data.append({
                        "roll_number": f"2025{name[-2:]}",
                        "name": name,
                        "status": "Present"
                    })
                    print("Marked:", name)

        cv2.imshow("Camera Attendance", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()