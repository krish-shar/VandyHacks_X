from flask import Flask, Response, jsonify
from flask_cors import CORS

from camera import VideoCamera, PoseCamera, DoseCamera

app = Flask(__name__)
CORS(app)

dose_camera = DoseCamera()


# /api/home
@app.route("/api/home", methods=["GET"])
def home():
    return jsonify({"message": "Hello World!"})


# /video_feed
@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


# /pose_feed
@app.route('/pose_feed')
def pose_feed():
    return Response(gen(PoseCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


# /dose_feed/right
@app.route('/dose_feed/right')
def dose_feed():
    dose_camera.right = True
    return Response(gen(dose_camera),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


# /dose_feed/left
@app.route('/dose_feed/left')
def dose_feed_left():
    dose_camera.right = False
    return Response(gen(DoseCamera(dose_camera)),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


# helper method for video feed
def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

# method to get does status from camera
@app.route('/dose_status')
def dose_status():
    if dose_camera is None:
        return jsonify({"dosed": False})
    else:
        return jsonify({"dosed": dose_camera.dosed})

# method to reset dose status
@app.route('/reset_dose') 
def reset_dose():
    if dose_camera is None:
        return jsonify({"dosed": False})
    else:
        dose_camera.dosed = False
        return jsonify({"dosed": dose_camera.dosed})

if __name__ == '__main__':
    app.run(debug=True, port=8080, threaded=True, use_reloader=False)
