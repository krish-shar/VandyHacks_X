from flask import Flask, Response, jsonify
from flask_cors import CORS

from camera import VideoCamera, PoseCamera, DoseCamera

app = Flask(__name__)
CORS(app)


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
    return Response(gen(DoseCamera(right=True)),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


# /dose_feed/left
@app.route('/dose_feed/left')
def dose_feed_left():
    return Response(gen(DoseCamera(right=False)),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


# helper method for video feed
def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


if __name__ == '__main__':
    app.run(debug=True, port=8080, threaded=True, use_reloader=False)
