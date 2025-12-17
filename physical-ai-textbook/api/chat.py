from http.server import BaseHTTPRequestHandler
import json
import os
import sys

# Add current directory to path
sys.path.insert(0, os.path.dirname(__file__))

# Import the run_agent function from index.py
try:
    from index import run_agent
    AGENT_AVAILABLE = True
except Exception as e:
    AGENT_AVAILABLE = False
    import_error = str(e)

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        try:
            if not AGENT_AVAILABLE:
                raise Exception(f"Agent not available: {import_error}")
            
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            request_data = json.loads(post_data.decode('utf-8'))
            
            # Extract message and history
            message = request_data.get('message', '')
            conversation_history = request_data.get('conversation_history', [])
            
            # Convert history to proper format
            history_dicts = [
                {'role': msg.get('role'), 'content': msg.get('content')} 
                for msg in conversation_history
            ]
            
            # Run the agent to get answer from RAG
            result = run_agent(message, history_dicts)
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            response = json.dumps(result)
            self.wfile.write(response.encode())
            
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            error_response = json.dumps({
                'response': f'Error: {str(e)}',
                'sources': []
            })
            self.wfile.write(error_response.encode())
            error_response = json.dumps({'error': str(e), 'response': 'Backend error', 'sources': []})
            self.wfile.write(error_response.encode())