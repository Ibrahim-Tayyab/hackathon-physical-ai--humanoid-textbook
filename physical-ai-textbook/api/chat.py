from http.server import BaseHTTPRequestHandler
import json
import os
import logging

# Import required libraries
try:
    import cohere
    from openai import OpenAI
    from qdrant_client import QdrantClient
    LIBS_AVAILABLE = True
except ImportError:
    LIBS_AVAILABLE = False

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_POST(self):
        try:
            if not LIBS_AVAILABLE:
                raise Exception("Required libraries not available")
            
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            request_data = json.loads(post_data.decode('utf-8'))
            
            # For now, return a test response
            result = {
                'response': f"Received your message: {request_data.get('message', '')}. Backend is working!",
                'sources': []
            }
            
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
            error_response = json.dumps({'error': str(e), 'response': 'Backend error', 'sources': []})
            self.wfile.write(error_response.encode())
