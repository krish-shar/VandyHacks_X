import openai
import streamlit as st
import os
# from dotenv import load_dotenv

# load_dotenv()

# openai_api_key = os.environ['OPENAI_API_KEY']
# openai.api_key = openai_api_key

# openai.api_key = os.getenv("OPENAI_API_KEY")


st.set_page_config("MedVisor", page_icon=":pill:")

# Centered title
st.markdown(
    "<h1 style='text-align: center;'>Medvisor</h1>",
    unsafe_allow_html=True
)

# Centered caption
st.markdown(
    "<p style='text-align: center; color: grey'>A medical assistant chatbot ready to help you with all of your medical questions!</p>",
    unsafe_allow_html=True
)

prompt_eng_1 = "You are a medical assistant chatbot designed to help elderly users understand what their medication does and answer any questions they may have."

# {"role": "system", "content": {prompt_eng_1}},

# initial start
if "messages" not in st.session_state:
    st.session_state["messages"] = [
        {"role": "assistant", "content": prompt_eng_1}]
    st.session_state["messages"].append(
        {"role": "assistant", "content": "Hi! I'm a medical assistant bot! How can I help you?"})


# write all items in messages (maintains history)
for index in range(1, len(st.session_state["messages"])):
    msg = st.session_state["messages"][index]
    st.chat_message(msg["role"]).write(msg["content"])
    print(st.session_state.messages)
    print()


prompt = st.chat_input("Say Something!")

if prompt:
    st.session_state["messages"].append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    messages_list = list(st.session_state["messages"])
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", messages=messages_list)
    msg = response.choices[0].message
    st.session_state.messages.append(msg)
    st.chat_message("assistant").write(msg.content)

    # '''
    # 1. Figure out Streamlit layout
    # 2. Figure out Streamlit Data Structures (Messages)
    # 3. Figure out Prompt Engineering
    # 4. Create Sample Prompt Questions
    # '''
