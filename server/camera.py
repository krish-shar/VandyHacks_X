import time

import cv2

import poseModule


class VideoCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)

    def __del__(self):
        self.video.release()

    def get_frame(self):
        ret, frame = self.video.read()
        ret, jpeg = cv2.imencode('.jpg', frame)
        return jpeg.tobytes()


class PoseCamera(object):
    def __init__(self):
        self.video = cv2.VideoCapture(0)
        self.detector = poseModule.PoseDetector(upBody=False)
        self.nodeJoints = [
            [13, 11, 23],
            [15, 13, 11],
            [14, 12, 24],
            [16, 14, 12],
            [11, 23, 25],
            [23, 25, 27],
            [25, 27, 31],
            [12, 24, 26],
            [24, 26, 28],
            [26, 28, 32],
        ]
        self.instance_angles = [0] * 10
        self.pTime = 0

    def __del__(self):
        self.video.release()
        self.video = None

    def get_frame(self):
        success, img = self.video.read()
        img = self.detector.findPose(img)
        lm_list = self.detector.findPosition(img, draw=False)
        if len(lm_list) != 0:
            for i in range(len(self.nodeJoints)):
                self.instance_angles[i] = (self.detector.findAngle(img, self.nodeJoints[i][0],
                                                                   self.nodeJoints[i][1], self.nodeJoints[i][2], True,
                                                                   True))
        c_time = time.time()
        fps = 1 / (c_time - self.pTime)
        self.pTime = c_time

        cv2.putText(img, str(int(fps)), (70, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

        success, jpeg = cv2.imencode('.jpg', img)
        return jpeg.tobytes()


class DoseCamera(object):
    def __init__(self, right=False):
        self.video = cv2.VideoCapture(0)
        self.detector = poseModule.PoseDetector(upBody=True)
        self.pTime = 0

        self.right = right

        self.dosed = False

        self.dir = 0
        self.color = (255, 0, 255)

        self.lmList = []

    def __del__(self):
        self.video.release()
        self.video = None

    def get_frame(self):
        success, img = self.video.read()
        img = self.detector.findPose(img, draw=False)
        self.lmList = self.detector.findPosition(img, draw=False)

        # add text that says "left arm" or "right arm"
        if self.right:
            cv2.putText(img, "Right Arm", (50, 100), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)
        else:
            cv2.putText(img, "Left Arm", (50, 100), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)

        c_time = time.time()
        fps = 1 / (c_time - self.pTime)
        self.pTime = c_time

        # find angle of arm
        if len(self.lmList) != 0:
            if self.right:
                self.angle = self.detector.findAngle(img, 12, 14, 16, draw=False)
            else:
                self.angle = self.detector.findAngle(img, 11, 13, 15, draw=False)

            # draw a circle on the hand selected
            if self.right:
                cv2.circle(img, (self.lmList[20][1], self.lmList[20][2]), 15, (0, 0, 0), cv2.FILLED)
            else:
                cv2.circle(img, (self.lmList[19][1], self.lmList[19][2]), 15, (0, 0, 0), cv2.FILLED)

            # draw a red dot on the mouth
            mouth = (
                int((self.lmList[10][1] + self.lmList[9][1]) / 2), int((self.lmList[9][2] + self.lmList[10][2]) / 2))
            cv2.circle(img, (mouth[0], mouth[1]), 15, (0, 0, 255), cv2.FILLED)

            # when the hand is raised close to the mouth, using x and y coordinates, dose
            if self.right:
                hand = self.lmList[20]
            else:
                hand = self.lmList[19]

            if self.lmList[10][2] + 100 > hand[2] > self.lmList[10][2] - 100 and self.lmList[8][1] - 50 < hand[1] < \
                    self.lmList[7][1] + 50:
                self.dosed = True
                self.color = (0, 255, 0)
                cv2.putText(img, "Dosed", (50, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

        # add text that says "fps"
        cv2.putText(img, str(int(fps)), (50, 150), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)

        # add text that says "dosed" or "not dosed"
        if self.dosed:
            cv2.putText(img, "Dosed", (50, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)
        else:
            cv2.putText(img, "Not Dosed", (50, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 255, 255), 3)

        success, jpeg = cv2.imencode('.jpg', img)
        return jpeg.tobytes()
