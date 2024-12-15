# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the src folder to the working directory inside the container
COPY src/ /app/src/

# Expose port 80 (the default HTTP port)
EXPOSE 80

# Set environment variables for Flask
ENV FLASK_APP=src/app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=80

# Define the command to run the application
CMD ["flask", "run"]
