import cv2
import mediapipe as mp
import math


class PoseDetector():

    # instantiating variables
    def __init__(self, mode=False, upBody=False, smooth=True,
                 detectionCon=0.5, trackCon=0.5):
        self.lmList = None
        self.results = None
        self.mode = mode
        self.upBody = upBody
        self.smooth = smooth
        self.detectionCon = detectionCon
        self.trackCon = trackCon

        self.mpDraw = mp.solutions.drawing_utils
        self.mpPose = mp.solutions.pose

        self.pose = self.mpPose.Pose(self.mode,
                                     min_detection_confidence=0.5,
                                     min_tracking_confidence=0.5)

    # finds pose of person
    def findPose(self, img, draw=True, nodes_only=False):
        img_color = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        self.results = self.pose.process(img_color)
        if self.results.pose_landmarks:
            if draw:
                self.mpDraw.draw_landmarks(img, self.results.pose_landmarks,
                                           self.mpPose.POSE_CONNECTIONS)
        return img

    # finds position of person
    def findPosition(self, img, draw=True):
        self.lmList = []
        if self.results.pose_landmarks:
            for idx, lm in enumerate(self.results.pose_landmarks.landmark):
                h, w, c = img.shape
                cx, cy = int(lm.x * w), int(lm.y * h)
                self.lmList.append([idx, cx, cy])
                if draw:
                    cv2.circle(img, (cx, cy), 5,
                               (0, 0, 0), cv2.FILLED)
        return self.lmList

    # find angle between three different nodes
    def findAngle(self, img, p1, p2, p3, draw=True, addNumbers=True):

        # get the landmark nodes
        x1, y1 = self.lmList[p1][1:]
        x2, y2 = self.lmList[p2][1:]
        x3, y3 = self.lmList[p3][1:]

        # calculate the angle
        angle = math.degrees(math.atan2(y3 - y2, x3 - x2) -
                             math.atan2(y1 - y2, x1 - x2))
        if angle < 0:
            angle += 360

        # draw the angle
        if draw:
            cv2.line(img, (x1, y1), (x2, y2), (0, 0, 0), 3)
            cv2.line(img, (x3, y3), (x2, y2), (0, 0, 0), 3)
            cv2.circle(img, (x1, y1), 10, (0, 0, 0), cv2.FILLED)
            cv2.circle(img, (x1, y1), 15, (0, 0, 0), 2)
            cv2.circle(img, (x2, y2), 10, (0, 0, 0), cv2.FILLED)
            cv2.circle(img, (x2, y2), 15, (0, 0, 0), 2)
            cv2.circle(img, (x3, y3), 10, (0, 0, 0), cv2.FILLED)
            cv2.circle(img, (x3, y3), 15, (0, 0, 0), 2)

        # add the angle number
        if addNumbers:
            cv2.putText(img, str(int(angle)), (x2 - 50, y2 + 50),
                        cv2.FONT_HERSHEY_PLAIN, 2, (100, 100, 255), 2)
            cv2.putText(img, str(p1), (x2 + 30, y2 + 50),
                        cv2.FONT_HERSHEY_PLAIN, 2, (100, 255, 100), 2)
        return angle

