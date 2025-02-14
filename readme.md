# University Insights - MBBS Education Portal

A Flask web application for managing student inquiries about MBBS education opportunities abroad.

## Features

- Landing page with information about MBBS programs
- Country-specific education details 
- Lead collection form
- Responsive design using Tailwind CSS
- Server-side form validation

## Setup

1. Make sure you have Python 3.11+ installed
2. Install dependencies (Flask, SQLAlchemy, etc.)
3. Click the "Run" button to start the Flask server
4. The application will be available on port 5000

## Project Structure

```
├── static/           # Static assets (CSS, JS)
├── templates/        # HTML templates
├── app.py           # Main Flask application
├── main.py          # Entry point
└── submit-lead.php  # Legacy PHP lead handler
```

## API Endpoints

- `GET /` - Main landing page
- `POST /submit-lead` - Handle lead form submissions

## Environment Variables

Configure the following in the Secrets tab:
- `FLASK_SECRET_KEY` - Flask session security key
- `DATABASE_URL` - Database connection string (if using database)

## License

MIT License
