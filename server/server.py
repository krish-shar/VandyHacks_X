from flask import Flask, Response, jsonify
from flask_cors import CORS
from camera import VideoCamera

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


# helper method for video feed
def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


if __name__ == '__main__':
    app.run(debug=True, port=8080, threaded=True, use_reloader=False)
