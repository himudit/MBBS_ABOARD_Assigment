from flask import Flask, render_template, request, jsonify
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)

@app.route('/')
def index():
    """Render the main landing page"""
    return render_template('index.html')

@app.route('/submit-lead', methods=['POST'])
def submit_lead():
    """Handle lead form submissions"""
    try:
        data = request.json
        # Here you would typically save the lead to a database
        # For now, we'll just log it
        logging.info(f"New lead received: {data}")

        return jsonify({
            'status': 'success',
            'message': 'Lead received successfully'
        }), 200
    except Exception as e:
        logging.error(f"Error processing lead: {str(e)}")
        return jsonify({
            'status': 'error',
            'message': 'Failed to process lead'
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)