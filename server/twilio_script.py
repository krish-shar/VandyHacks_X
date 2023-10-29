import os
from dotenv import load_dotenv
from twilio.rest import Client
import time

# Load environment variables from the .env file
load_dotenv()

# Find your Account SID and Auth Token
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']


client = Client(account_sid, auth_token)

def confirmStatus(message):
  # Initial status
  current_status = message.status
  print(f"Initial status: {current_status}")

  # Check status periodically
  while current_status != 'delivered':
      time.sleep(2)  # Check every 10 seconds
      message = client.messages(message.sid).fetch()
      new_status = message.status

      if new_status != current_status:
          print(f"Status changed: {current_status} -> {new_status}")

      current_status = new_status

  print("Message delivered!")



time_elapsed = 0

# We're at Green
if (time_elapsed <= 20):
   pass

# We're at Yellow
elif (time_elapsed > 20 and time_elapsed <= 40):
    
  message = client.messages \
                  .create(
                      body="Reminder! Send me nudes pls",
                      from_='+14255377379',
                      to='+14703502122'
                  )
  confirmStatus(message)

# We're at Red
elif (time_elapsed > 40):
   
  message = client.messages \
              .create(
                  body="Urgent!! Send me nudes pls",
                  from_='+14255377379',
                  to='+14703502122'
              )
  confirmStatus(message)

