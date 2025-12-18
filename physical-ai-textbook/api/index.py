import os
import sys

# Add the project root directory to the Python path
# This allows us to import from the 'chatbot' module located in the parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

# Import the Vercel handler from the actual application file
from chatbot.api import handler